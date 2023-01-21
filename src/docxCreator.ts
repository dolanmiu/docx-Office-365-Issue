import { Document, Paragraph, TextRun } from "docx";
import { yourGoals } from "./yourGoals";

function docxCreator(
  state: any,
  fileName: any,
  _config: any,
  _nonClientData: any,
  nextColour: any,
  _result: any
): Document {
  const doc = new Document({
    // styles: docXStyles,
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
        ],
      },
    ],
  });

  return doc;
}

export default docxCreator;
