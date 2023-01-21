import {
  HorizontalPositionRelativeFrom,
  ImageRun,
  VerticalPositionRelativeFrom,
} from "docx";
import { retirementGoalCard } from "./image";

export const getGoalCardTable = (goalType: string) => {
  return retirementGoalCard;
};

export const goalCardImage = (goalType: string): ImageRun => {
  // return new ImageRun({
  //   data: Buffer.from(getGoalCardTable(goalType), "base64"),
  //   transformation: {
  //     width: 100,
  //     height: 100,
  //   },
  // });
  return new ImageRun({
    data: Uint8Array.from(atob(getGoalCardTable(goalType)), (c) =>
      c.charCodeAt(0)
    ),
    transformation: {
      width: 208,
      height: 242,
    },
    floating: {
      horizontalPosition: {
        offset: 180000,
        relative: HorizontalPositionRelativeFrom.LEFT_MARGIN,
      },
      verticalPosition: {
        offset: 0,
        relative: VerticalPositionRelativeFrom.LINE,
      },
      behindDocument: true,
    },
  });
};
