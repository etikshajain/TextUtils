import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text,setText]=useState("");

    function handleUpClick(){
        let newText=text.toUpperCase();
        setText(newText);
    }

    function handleDownClick(){
        let newText=text.toLowerCase();
        setText(newText);
    }

    function handleOnChange(event){
        setText(event.target.value);
    }

    return(
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div div className="mb-3">
                <textarea className="form-control" id="my-box" rows="10" onChange={handleOnChange} value={text} placeholder="Enter Text"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
        </div>

        <div className="container my-2">
            <h2>Text Summary:</h2>
            <ul>
                <li>Words: {text.split(" ").length}</li>
                <li>Characters: {text.length}</li>
                <li>Minute read: {text.split(" ").length * 0.008}</li>
            </ul>
            <h2>Preview:</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

TextForm.propTypes={
    heading: PropTypes.string
}

TextForm.defaultProps={
    heading: "Enter below"
}