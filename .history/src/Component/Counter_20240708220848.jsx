import {useState} from "react"
function Counter()
 {
    const[goals, setGoals] = useState(0)

    function updateCounter() {
        setGoals(goals + 1);
    }
    return(
        <div>this is Counter
            <p>{goals}</p>
            <button onClick={updateCounter}>Add</button>
        </div>
        
    )
}

export default Counter