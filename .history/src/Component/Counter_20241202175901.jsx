function Counter(){

    let cnt = 0

function add(){
    cnt++

}


    return(
        <div>
            <p>count: {cnt}</p> 

            <button onClick ={add}> Add</button>
        </div>

    )
}
export default Counter