import { Packer } from "docx";
import { docxCreator } from "./docxCreator";
import * as fs from "fs";

const doc = docxCreator(
  {
    goals: [{}],
    people: [],
  },
  null,
  null,
  {
    Assumptions: {
      inflation: 0.02,
    },
  },
  null,
  null
);

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});
