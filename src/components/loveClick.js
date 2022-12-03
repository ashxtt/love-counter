import { useState } from "react";

function Counter() {
    const [counterObj, setCounterObj] = useState({
        love: 0,
        resetLove: 0,
        color: "white",
    });

    const handleIncrement = () => {
        counterObj.love === 10000
        ? handleReset()
        : setCounterObj({
            ...counterObj,
            color: "lightgreen",
            love: counterObj.love +1,
        });
    };

    const handleReset = () => {
        setCounterObj({color: 'white', love: 0, resetLove: counterObj.resetLove + 1})
    }

    return(
        <div className="love-counter">
            <span> MY LOVE FOR YOU IS:   {counterObj.love} TIMES GREATER THAN YOURS!</span>
            <section>
                <button className="heart" onClick={handleIncrement}><span class="entypo-heart"></span></button>
             <button  className="reset" onClick={handleReset}><i class="fa fa-refresh"></i></button>
            </section>
            <div className="gif">
                <img src="https://i.pinimg.com/originals/d3/d6/f7/d3d6f72695eed14ba7a8b5a8169eae78.gif"/>
            </div>
        
        </div>
        
    )
}

export default Counter




