function Counter(){
    let cnt = 0
    return(
        <div>
            <p>count: {cnt}</p> 

            <button onClick ={add}> Add</button>
        </div>

    )
}
export default Counter