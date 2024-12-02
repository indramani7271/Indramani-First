import { useState } from "react"

function Counter(){
    const [count, setCount] = useState()

function add(){
    cnt = 2

}


    return(
        <div>
            <p>count: {cnt}</p> 

            <button onClick ={add}> Add</button>
        </div>

    )
}
export default Counter