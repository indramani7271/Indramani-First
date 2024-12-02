import { useState } from "react"

function Counter(){
    const [count, setCount] = useState()

function add(){
    

}


    return(
        <div>
            <p>count: {count}</p> 

            <button onClick ={add}> Add</button>
        </div>

    )
}
export default Counter