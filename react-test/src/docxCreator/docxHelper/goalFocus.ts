import { Paragraph, TextRun } from "docx";
import * as suitabilityReportDerivedData from "./suitabilityReportDerivedData";

export const goalFocus = (
  goals: any,
  annualRetirementSpending: any,
  inflation: any,
  nextColour: any,
  checkboxColour: any
) => {
  let _goal: any[] = [];

  const _goals = suitabilityReportDerivedData
    .getGoalRankedByImportance(goals)
    .map((goal) => {
      _goal.push(
        goal.focused === true
          ? new Paragraph({
              children: [
                new TextRun({
                  text:
                    goal.focused === true
                      ? goal.goalName +
                        " - " +
                        suitabilityReportDerivedData.getGoalImportance(
                          parseInt(goal.goalImportance)
                        )
                      : "",
                  color: checkboxColour,
                }),
                new TextRun({ break: 2 }),
                new TextRun({
                  text:
                    goal.focused === true && goal.goalNotes
                      ? goal.goalNotes
                      : "",
                  style: "MainText",
                  color: "#000000",
                  bold: false,
                }),
              ],
              style: "BlueHeading",
            })
          : new TextRun("text")
      );
    });

  console.log(_goal);

  return [
    new Paragraph({
      style: "Heading2",
      children: [
        new TextRun({
          text: "Goal focus for now",
          color: nextColour,
          break: 1,
        }),
      ],
    }),
    new Paragraph({
      style: "MainText",
      children: [
        suitabilityReportDerivedData.getIsNotEveryGoalFocused(goals) &&
        goals &&
        goals.length > 1
          ? new TextRun({
              text: "We think it's important to get you on your way towards your most important goals first. Because of that, we’ve focused on these goals in this report. Once you’re on your way towards these goals, we’ll help you on your way to achieving your other goals too.",
            })
          : new TextRun({ text: "" }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Retirement Spending - Primary",
          color: checkboxColour,
        }),
      ],
      style: "BlueHeading",
    }),
    new Paragraph({
      text:
        "You're targeting annual spending in retirement of £" +
        (annualRetirementSpending ? annualRetirementSpending : 0) +
        ". That means you might need a retirement pot of around £" +
        (goals[0].goalAmount ? goals[0].goalAmount : 0) +
        " in tomorrow's money (i.e. after inflation), assuming a withdrawal rate of 3.5% and inflation at " +
        inflation * 100 +
        "%.",
      style: "MainText",
    }),
    // new TextRun({ break: 2, text: "" }),

    new Paragraph({
      style: "MainText",
      children: [
        new TextRun({ break: 2 }),
      ],
    }),
  ];
};
