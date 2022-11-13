import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const validation = (msg) => {
        if (text === '') {
            props.alertShow("Please enter text", "warning");
            return false;
        }
        else {
            props.alertShow(msg, "success");
            return true;
        }
    }

    const handleUpClick = () => {
        if (validation("Converted to Upper Case")) {
            setText(text.toUpperCase());
        }
    }

    const handleLwClick = () => {
        if (validation("Converted to Lower Case")) {
            setText(text.toLowerCase());
        }
    }

    const handleSpClick = () => {
        if (validation("All spaces removed")) {
            setText(text.replaceAll('\n', '').replaceAll(' ', ''));
        }
    }

    const handleExSpClick = () => {
        if (validation("Extra spaces removed")) {
            setText(text.split(/[ ]+/).join(' ').split(/[\n]+/).join("\n"));
        }
    }

    const handleCopyClick = () => {
        if (validation("Text copied")) {
            navigator.clipboard.writeText(text);
        }

    }

    const handleClearClick = () => {
        if (validation("Text cleared")) {
            setText("");
        }
    }

    const handleNumExSpClick = () => {
        if (validation("Number Extracted")) {
            if (text.match(/\d+/g) === null) {
                props.alertShow("No numbers to extract", "warning");
            }
            else {

                setText(text.match(/\d+/g).join(' '));
            }
        }
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className="container my-3">
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#6c757dd1' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="textBox1" onChange={handleChange} rows="7"></textarea>
                </div>
                <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>UpperCase</button>
                <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleLwClick}>LowerCase</button>
                <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleSpClick}>Remove all Spaces</button>
                <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleNumExSpClick}>Extract Numbers</button>
                <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleExSpClick}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <div className="my-3">
                    <hr></hr>
                    <h5>Your text Summary</h5>
                    <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> <i>words</i>, <b>{text.length}</b> <i>chars</i>, <b>{text.match(/[a,e,i,o,u]/g) === null ? 0 : text.match(/[a,e,i,o,u]/g).length}</b> <i>vowels</i></p>
                    <p><b>{text.replaceAll('\n', '').replaceAll(' ', '').length / (125 * 5)}</b> <i>minutes</i>, <b>{text.replaceAll('\n', '').replaceAll(' ', '').length * 60 / (150 * 5)}</b> <i>seconds</i> to read</p>
                    <hr></hr>
                    <h5>Preview</h5>
                    <p style={{ textAlign: 'justify' }}>{text === '' ? <i>Nothing to preview</i> : text}</p>
                </div>
            </div>
        </>
    )
}



TextForm.propTypes = {
    heading: PropTypes.string
}