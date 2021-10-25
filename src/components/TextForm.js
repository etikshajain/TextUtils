import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text,setText]=useState("");

    function handleUpClick(){
        let newText=text.toUpperCase();
        setText(newText);
        props.alert("Converted to upper case!","success");
    }

    function handleDownClick(){
        let newText=text.toLowerCase();
        setText(newText);
        props.alert("Converted to lower case!","success");
    }

    function handleClearClick(){
        setText("");
        props.alert("Cleared the textbox","success");
    }

    function handleOnChange(event){
        setText(event.target.value);
    }

    function words(){
        if(text===""){
            return 0;
        }
        // if(text.split(" ").at(-1)==='' || text.split(" ").at(-1)===null){
        //     return text.split(" ").length-1;
        // }
        // return text.split(" ").length;

        let newText=text.split(/[ ]+/);
        newText=newText.join(" ");

        if(newText.split(" ").at(-1)==='' || newText.split(" ").at(-1)===null){
            return newText.split(" ").length-1;
        }
        return newText.split(" ").length;

    }
    
    function handleCopy(event){
        var txt=document.getElementById("my-box");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.alert("Copied to Clipboard!","success");
    }

    function handleExSps(){
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("Deleted extra spaces!","success");
    }

    return(
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h2 style={{display: 'inline'}}>{props.heading}</h2>
            <button className="btn btn-outline-primary sm my-2" onClick={handleCopy} style={{marginLeft:700+'px'}}>Copy</button>
            <div div className="mb-3">
                <textarea className="form-control" id="my-box" rows="7" onChange={handleOnChange} value={text} placeholder="Enter Text" style={{backgroundColor:props.mode==='light'?'white':'#393E46', color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleExSps}>Handle Extra Spaces</button>
        </div>

        <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Text Summary:</h2>
            <ul>
                <li>Words: {words()}</li>
                <li>Characters: {text.length}</li>
                <li>Minute read: {words() * 0.008}</li>
            </ul>
            <h2>Preview:</h2>
            <p>{text.length>0?text:"Enter your text to preview it here"}</p>
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