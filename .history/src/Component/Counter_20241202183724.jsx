import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)

function add(){
    setCount(count+1)
    

}
function sub(){
     setCount(count-1)
}
function reset(){
    setCount(0)
}

    return(
        <div>
            <p>count: count</p> 

            <button onClick ={add}> Add</button>
            <button onClick ={sub}> sub</button>
            <button onClick ={reset}> reset</button>
        </div>

    )
}
export default Counter