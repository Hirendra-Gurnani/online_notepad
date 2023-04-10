import React, { useState } from "react";
import { saveAs } from "file-saver";
import fileDownload from "react-file-download";

function Notepad() {
  const [value, setValue] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [fileName, setFileName] = useState(``);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleBoldClick = () => {
    setBold(!bold);
  };

  const handleItalicClick = () => {
    setItalic(!italic);
  };

  const handleUnderlineClick = () => {
    setUnderline(!underline);
  };

  const handleSave = () => {
    if (fileName === "" || fileName === null || fileName === 0) {
      window.alert("Please mention a filename");
    } else {
      const fileText = value;
      // const fileName = "my-notes.txt";
      const blob = new Blob([fileText], { type: "text/plain;charset=UTF-8" });
      saveAs(blob, `${fileName}.txt`);
      fileDownload(fileText, `${fileName}.txt`);
    }
  };

  const getStyle = () => {
    let style = {};
    if (bold) {
      style.fontWeight = "bold";
    }
    if (italic) {
      style.fontStyle = "italic";
    }
    if (underline) {
      style.textDecoration = "underline";
    }
    style.fontFamily = fontFamily;
    style.fontSize = fontSize;
    return style;
  };

  return (
    <>
      <div className="App App-header">
        <h1>Net Notepad {"beta-v"}</h1>
      </div>
      <form>
        <div className="notepad">
          <div className="toolbar">
            <input
              id="filename"
              type="text"
              placeholder="Title Name Here..."
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              required
              title="Please give a name for the file here"
            />
            <select value={fontFamily} onChange={handleFontFamilyChange}>
              <option value="Arial">Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
              <option value="Impact">Impact</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Roboto">Roboto</option>
              <option value="Lato">Lato</option>
            </select>
            <select value={fontSize} onChange={handleFontSizeChange}>
              <option value="12px">12</option>
              <option value="14px">14</option>
              <option value="16px">16</option>
              <option value="18px">18</option>
              <option value="20px">20</option>
              <option value="22px">22</option>
              <option value="24px">24</option>
            </select>
            <div className="bttnStyle">
              <button
                onClick={handleBoldClick}
                className={bold ? "active" : ""}
              >
                Bold
              </button>
              <button
                onClick={handleItalicClick}
                className={italic ? "active" : ""}
              >
                <i>Italic</i>
              </button>
              <button
                onClick={handleUnderlineClick}
                className={underline ? "active" : ""}
              >
                <u>Underline</u>
              </button>
            </div>
          </div>

          {/* <form> */}
          <textarea
            style={getStyle()}
            value={value}
            onChange={handleChange}
            placeholder="Enter your text here..."
          />
          <button onClick={handleSave} type="submit">
            Save
          </button>
          {/* </form> */}
        </div>
      </form>
    </>
  );
}

export default Notepad;
