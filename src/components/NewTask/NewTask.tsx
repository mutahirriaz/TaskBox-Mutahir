import React from "react";
import { add } from '../../redux/Redux';
import {useDispatch} from "react-redux"


const NewTask = () => {
    const dispatch = useDispatch()

    const [input, setInput] = React.useState("plz add a task");

    const handleSubmit = () => {
        if(input === ""){
            dispatch(add({input:"Title is Required"}))
        }
        else {
            dispatch(add({input}))
            setInput('')
        }
    }

   

    return (
        <div className='input_main_div' >
            <div className='input_div' >
                        <input className='input' type="text" value = {input}  onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}   />
            <button className = "button"  onClick = {handleSubmit} >Add Task</button>
        </div>
        </div>
    )
}

export default NewTask
