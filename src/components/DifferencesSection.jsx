import Button from "./Button/button"
import { differences } from '../data'
import { useState } from "react";


export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null);
    function handleClick(type) {
        // alert(type)
        setContentType(type);
    } 
    return ( 
        <section>
          <h3>What is difference between us and others</h3>
          <Button isActive={contentType==='way'} onClick={() => handleClick('way')}>concentration</Button>
          <Button isActive={contentType==='easy'} onClick={() => handleClick('easy')}>something</Button>
          <Button isActive={contentType==='program'} onClick={() => handleClick('program')}>anything</Button>
          {/* {contentType ? <p>{differences[contentType]}</p> : <div>presss the button</div>} */}
          {!contentType ? <span>press the button</span>: null}
          {contentType ? <p>{differences[contentType]}</p> : null}
          {/* {tabContent} */}
          
        </section>
    )
}