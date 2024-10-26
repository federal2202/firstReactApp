import { useState, useRef } from "react"
import Button from "./Button/button"


function StateVsRef() {
    const input = useRef()
    
    const [show, setShow] = useState(false)

    function handleKeyDown(event){
        if(event.key === 'Enter') {
            setShow(true)
        }
    }


    return (
        <div>
            <h3>input value: {show ? input.current.value : null}</h3>
            <input ref={input} className='control' onKeyDown={handleKeyDown}type="text" />
        </div>
    )
}



export default function FeedbackSection(){
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help', 
    })
    function handleNameChange(event) {
        console.log(event.target.value);
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,

        }))
    }
    // function toggleError() {
    //      setHasError((prev) => !prev)
    // }

    return (
        <section>
            <h3>You are in feedback section</h3>
            {/* <Button onClick={toggleError}>Toggle Error</Button> */}
            <form style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Your name</label>
                <input 
                type="text" 
                className="control" 
                value={form.name} 
                style={{
                    border: form.hasError ? '1px solid red' : null,

                }}
                onChange = {handleNameChange}/>
                <label htmlFor="reason">What's the reason</label>
                <select id="reason" className="control" value={form.reason} onChange={event => setForm(prev => ({...prev, reason: event.target.value}))}>
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="suggest">suggest</option>
                </select>
                {/* <pre>
                    {JSON.stringify(form)}
                    <br />
                    Reason: {form.reason}
                </pre> */}
                <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>
                
            </form>
            <hr />
            <StateVsRef />
        </section>
        
        
    )
}