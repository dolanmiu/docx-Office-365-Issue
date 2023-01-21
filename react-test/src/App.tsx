import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { docxCreator } from "./docxCreator";
import { Packer } from "docx";
import { saveAs } from "file-saver";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => {
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

            Packer.toBlob(doc).then((blob) => {
              saveAs(blob, "My Document React.docx");
            });
          }}
        >
          Create document
        </button>
      </header>
    </div>
  );
}

export default App;
