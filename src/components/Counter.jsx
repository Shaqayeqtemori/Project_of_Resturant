import { useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <h4>Counter:{count}</h4>
            <button onClick={()=>setCount(count + 1)}>Increase</button>
            <button onClick={()=>setCount(count - 1)}>Deccrease</button>

        </div>
    );
}
export default Counter;