import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleCapClick = () => {
        let nText = text.toLowerCase();
        let words = nText.split(" ");
        let capitalizeWord = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        let newText = capitalizeWord.join(' ')
        setText(newText)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter Text Here.')
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  style={{ backgroundColor: props.mode==='light'?'white':'grey'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>

        <button className="btn btn-warning mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-warning mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-warning mx-2" onClick={handleCapClick}>Capitalize each word</button>
        <button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-warning mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
<div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <h2>Your Text Summary</h2>
    <p>{text.length} Characters., {text.length<1?0:text.split(" ").length} Words and {text.split(".").length-1} sentences.</p>
    <p>Less than {Math.ceil(0.008 * text.split(" ").length)} Minutes to read.</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter you text in textbox to preview here."}</p>
</div>
    </>
  )
}

TextForm.propTypes={
    heading: PropTypes.string,
}
