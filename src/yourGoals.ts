import { TableCell, BorderStyle, WidthType, Table, TableRow } from "docx";

import { showGoalCardRows1 } from "./docxHelper/showGoalCardRows1";
// import { showGoalCardRows2 } from "./docxHelper/showGoalCardRows2";
// import { showGoalCardRows3 } from "./docxHelper/showGoalCardRows3";

export const yourGoals = (state: any, _config: any, _nonClientData: any, firstCardIndex: number) => {
  const _cell1 = state.goals[firstCardIndex]
    ? new TableCell({
        borders: {
          top: { style: BorderStyle.NONE },
          bottom: { style: BorderStyle.NONE },
          left: { style: BorderStyle.NONE },
          right: { style: BorderStyle.NONE },
        },
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        // style: "GoalText1",
        children: [
          showGoalCardRows1(
            firstCardIndex,
            state.goals,
            state.people,
            _nonClientData
          ),
        ],
      })
    : null;

  const _cell2 = state.goals[firstCardIndex]
    ? new TableCell({
        borders: {
          top: { style: BorderStyle.NONE },
          bottom: { style: BorderStyle.NONE },
          left: { style: BorderStyle.NONE },
          right: { style: BorderStyle.NONE },
        },
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        // style: "GoalText1",
        children: [
          showGoalCardRows1(
            firstCardIndex,
            state.goals,
            state.people,
            _nonClientData
          ),
        ],
      })
    : null;

  const _cell3 = state.goals[firstCardIndex]
    ? new TableCell({
        borders: {
          top: { style: BorderStyle.NONE },
          bottom: { style: BorderStyle.NONE },
          left: { style: BorderStyle.NONE },
          right: { style: BorderStyle.NONE },
        },
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        // style: "GoalText1",
        children: [
          showGoalCardRows1(
            firstCardIndex,
            state.goals,
            state.people,
            _nonClientData
          ),
        ],
      })
    : null;

  return [
    new Table({
      width: {
        size: 11906,
        type: WidthType.DXA,
      },
      columnWidths: [100, 3000, 3000, 3000],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              borders: {
                top: { style: BorderStyle.NONE },
                bottom: { style: BorderStyle.NONE },
                left: { style: BorderStyle.NONE },
                right: { style: BorderStyle.NONE },
              },
              width: {
                size: 100,
                type: WidthType.DXA,
              },
              children: [],
            }),
            ...[_cell1, _cell2, _cell3]
              .filter((x) => x !== null)
              .map((x) => x as TableCell),
          ],
        }),
      ],
    }),
  ];
};
