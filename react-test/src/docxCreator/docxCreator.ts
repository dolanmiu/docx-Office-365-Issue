import { Document, Paragraph, TabStopPosition, TextRun } from "docx";
import { goalFocus } from "./docxHelper/goalFocus";
import { yourGoals } from "./yourGoals";

export const docxCreator = (
  state: any,
  fileName: any,
  _config: any,
  _nonClientData: any,
  nextColour: any,
  _result: any
): Document => {
  const doc = new Document({
    // styles: docXStyles,
    styles: {
      paragraphStyles: [
        {
          id: "MainText",
          name: "MainText",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            font: "Calibri",
            size: 26,
            bold: true,
          },
          paragraph: {
            spacing: {
              line: 276,
              before: 20 * 72 * 0.1,
              after: 20 * 72 * 0.05,
            },
            rightTabStop: TabStopPosition.MAX,
            leftTabStop: 453.543307087,
          },
        },
        {
          id: "BlueHeading",
          name: "BlueHeading",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            font: "Calibri",
            size: 26,
            bold: true,
          },
          paragraph: {
            spacing: {
              line: 276,
              before: 20 * 72 * 0.1,
              after: 20 * 72 * 0.05,
            },
            rightTabStop: TabStopPosition.MAX,
            leftTabStop: 453.543307087,
          },
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
          },
        },

        children: [
          // YOUR GOALS
          new Paragraph({
            children: [
              new TextRun({
                text: "Your goals",
                color: "#ecef86",
              }),
            ],
            style: "Heading2",
          }),
          new Paragraph({
            text: "We established that you have the following financial goals:",
            style: "MainText",
          }),
          ...yourGoals(state, _config, _nonClientData, 0),

          //   ...yourGoalsRow2,

          new Paragraph({
            style: "MainText",
            children: [
              new TextRun({
                text: "*inflation-linked, where appropriate, assuming inflation at ",
                italics: true,
              }),
              new TextRun({
                text: "" + _nonClientData.Assumptions.inflation * 100,
                italics: true,
              }),
              new TextRun({
                text: "%. Please note that inflation is subject to change, and the amount you may need in tomorrow’s money may be more or less than shown above.",
                italics: true,
              }),
            ],
          }),
          ...goalFocus(
            state.goals,
            state.annualRetirementSpending,
            _nonClientData.Assumptions.inflation,
            nextColour,
            "#ecef86"
          ),
        ],
      },
    ],
  });

  return doc;
};
