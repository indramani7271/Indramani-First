import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)

function add(){
    setCount(count+1)
    

}


    return(
        <div>
            <p>count: {count}</p> 

            <button onClick ={add}> Add</button>
        </div>

    )
}
export default Counter