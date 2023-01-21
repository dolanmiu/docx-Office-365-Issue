import { goalCardImage } from "./imageRunFunctions";

import { Paragraph, TextRun } from "docx";

export const showGoalCardRows1 = (
  firstCardIndex: any,
  goals: any,
  people: any,
  nonClientData: any
) => {
  let _goalTimeHorizon =
    goals[firstCardIndex].goalType === "Retirement pot"
      ? goals[firstCardIndex].goalTimeHorizon
      : goals[firstCardIndex].goalTimeHorizon;

  let inflationToPower = Math.pow(
    1 + nonClientData.Assumptions.inflation,
    _goalTimeHorizon
  );
  let rawResult =
    inflationToPower * parseInt(goals[firstCardIndex].amountRequiredToday, 10);
  let result = Math.round((rawResult * 100 + Number.EPSILON) / 100);

  return new Paragraph({
    keepLines: true,
    style: "GoalCardText",

    children: [
      firstCardIndex > 0 ? new TextRun({ break: 1 }) : new TextRun({}),
      goalCardImage(goals[firstCardIndex].goalType),
      goals[firstCardIndex + 1]
        ? goalCardImage(goals[firstCardIndex + 1].goalType)
        : new TextRun({}),
      goals[firstCardIndex + 2]
        ? goalCardImage(goals[firstCardIndex + 2].goalType)
        : new TextRun({}),
      firstCardIndex > 2 ? new TextRun({}) : new TextRun({ break: 1 }),
      new TextRun({
        text: goals[firstCardIndex].goalName,
        bold: true,
        size: 18,
      }),
      new TextRun({
        text: goals[firstCardIndex].goalType,
        break: 2,
      }),
      new TextRun({
        text: "In today's money",
        bold: true,
        break: 3,
      }),
      new TextRun({
        text: `£${goals[firstCardIndex].amountRequiredToday}`,
        break: 2,
      }),
      new TextRun({
        text: "In tomorrow's money*",
        bold: true,
        break: 2,
      }),
      new TextRun({
        text: `£${
          goals[firstCardIndex].inflationLinked === false
            ? goals[firstCardIndex].amountRequiredToday
            : result
        }`,
        break: 2,
      }),
      new TextRun({
        text: "Years to Goal",
        bold: true,
        break: 2,
      }),
      new TextRun({
        text: `${
          goals[firstCardIndex].goalType === "Retirement pot"
            ? _goalTimeHorizon
            : _goalTimeHorizon
        } years`,
        break: 2,
      }),
      new TextRun({ break: 3 }),
    ],
  });
};
