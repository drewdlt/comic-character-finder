import { useEffect, useState } from "react"
import Superheros from './superheros.json'

function Test() {
    const [heros, setHeros] = useState(null);
    const [myHero, setMyHero] = useState(null);

    useEffect(() => {
        setHeros(Superheros);
    }, [])

    function printHeros() {
        const selectedHero = heros.find(hero => hero.name === "Spider-Man");

        setMyHero(selectedHero);
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={printHeros}>Test</button>
            {myHero && (
                <>
                    <p>{myHero.name}</p>
                    <p>{myHero.id}</p>
                    <p>{myHero.description}</p>
                </>
            )}            
        </div>
    );
}

export default Test