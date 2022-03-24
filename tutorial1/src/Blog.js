import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import CounterProject from "./components/CounterProject";

export default function Blog() {
    const [value, setValue] = useState(10)

    const valueHandler = (e, input) => {
        e.preventDefault();
        if (value <= 0) {
            console.log('Value can not be smaller than 0')
        } else {
            switch (input) {
                case 'dec':
                    setValue(value - 1)
                    break;
                case 'inc':
                    setValue(value + 1)
                    break;
                default:
                    console.log('hello!')
            }
        }

    }


    const nameRef = useRef()
    const clickHandler = (e, name) => {
        e.preventDefault();
        console.log('click test', name)
        console.log(nameRef)
        console.log(nameRef.current.classList)
        nameRef.current.classList.add('newClassname')
    }




    return (
        <>
            {/* <h1>Blog section</h1>
        <h2>headijaisd</h2>
        <h3>asdiadjiasdj</h3>
        <input className="form-control mb-2" ref={nameRef} type="text"/>
        <Button onClick={(e)=>clickHandler(e,'George')}>Click it</Button>
         */}
            <CounterProject clickHandler={valueHandler} recentNumber={value} />
        </>
    )
}