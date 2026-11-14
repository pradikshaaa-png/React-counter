import {useState} from "react"
function Counter()
{
    var[count,setcount]=useState(0)

    function increment(){
        setcount(count+1)
    }
function decrement(){
     if (count > 0) {
    setcount(count-1)
     }
}

function reset(){
    setcount(0)
}

return(
    <div class="container">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button class="buttons" onClick={increment}>INC</button>
        <button class="buttons" onClick={decrement}>DEC</button>
        <button class="buttons" onClick={reset}>RESET</button>
       {count === 0 ? (<p class="message">Minimum limit reached</p>) : null}
    </div>
)
}

export default Counter
