function Counter(){

    let cnt = 0

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