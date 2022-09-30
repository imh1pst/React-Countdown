import { useState, useEffect } from 'react';

function Countdown() {
    // targetSeconds, elapsedSeconds
    let [targetSeconds, setTargetSeconds] = useState(null);
    let[elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(function(){
        if (targetSeconds === null) return;

        // targetSeconds tiene un valor
        setElapsedSeconds(0);

        // Actualizando los segundos transcurridos
        let Interval = setInterval(function () {
           setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1)
        }, 1000);

        //Metodo de limpieza cuando se valla a desmontar el elemnto de funsion
        return ()=>{
           clearInterval(Interval);
           } 
    }, [targetSeconds]);

    function parseForm(ev){
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }

    if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
        return(
            <div>
                 <p> Termino el conteo! </p>
                 <button onClick={()=> setTargetSeconds(null) }> Reiniciar </button>
            </div>       
        );
    }

    if (targetSeconds !== null) {
        return(
            <p> Faltan {targetSeconds - elapsedSeconds} segundos </p>
        );
    }


    return (
        <div>
            <p> Cuantos segundos quieres contar? </p>
            <form action="#" onSubmit={ev => parseForm(ev) }>
                <input type="number" name="seconds" />
                <button>Iniciar</button>
            </form>
        </div>
    );
}

export default Countdown;