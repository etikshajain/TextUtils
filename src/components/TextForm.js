import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text,setText]=useState("Enter text here");

    function handleUpClick(){
        let newText=text.toUpperCase();
        setText(newText);
    }

    function handleOnChange(event){
        setText(event.target.value);
    }

    return(
        <>
        <div div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="my-box" rows="10" onChange={handleOnChange} value={text}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </>
    )
}

TextForm.propTypes={
    heading: PropTypes.string
}

TextForm.defaultProps={
    heading: "Enter below"
}