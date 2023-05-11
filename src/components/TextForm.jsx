import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Text converted to upper case", "success")
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text converted to lower case", "success")
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success")
  };

  const handleSpaces = () => {
    setText(text.replace(/\s\s+/g, " "));
    props.showAlert("Extra spaces removed", "success")
  };

  return (
    <>
      <div className="container" style={{color: props.mode==="dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            id="myBox"
            value={text}
            onChange={handleChange}
          
            style={{backgroundColor: props.mode==="dark" ? "#a7b1c4" : "white",
            color: props.mode==="dark" ? "white" : "black"}}
          ></textarea>

          <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
            {" "}
            Convert To UpperCase{" "}
          </button>

          <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>
            {" "}
            Convert To LowerCase{" "}
          </button>

          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleClearClick}
          >
            {" "}
            Clear Text{" "}
          </button>

          <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>
            {" "}
            Copy Text{" "}
          </button>

          <button className="btn btn-primary my-3 mx-1" onClick={handleSpaces}>
            {" "}
            Remove Spaces{" "}
          </button>
        </div>
      </div>

      <div className="container" style={{color: props.mode==="dark" ? "white" : "black"}}>
        <h2>Your text summary</h2>

        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>

        <p>
          On an average, a person can read it in{" "}
          {0.008 * text.split(" ").length} minutes.
        </p>

        <h2>Preview</h2>

        <p>{text}</p>
      </div>
    </>
  );
}
