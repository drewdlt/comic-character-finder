import { useEffect, useState } from "react";
import './SearchBar.css'
import '../index.css'
import SuperHeros from '../superheros.json'
import SuperheroDetails from "../SuperheroDetails/SuperheroDetails";

function SearchBar() {
    const [input, setInput] = useState('');
    const [characters, setCharacters] = useState(null);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        setCharacters(SuperHeros);
    }, [])

    function handleInput(event) {
        setInput(event.target.value);
    }

    function enterKeyPressed(event) {
        if(event.key === 'Enter') {
            findHero();
            event.target.value = '';
        }
    }

    function findHero() {
        setCharacter(characters.find(hero => hero.name.replace(/-|\s/, '').toLowerCase().includes(input.replace(/-|\s/, '').toLowerCase())));
        console.log(character);
        setInput('');
    }

    return(
        <div className="container text-center my-5">
            <div className="row ">
                <input className="col form-control form-control-lg bg-body-secondary mx-2" onChange={handleInput} onKeyDown={enterKeyPressed} type="search" placeholder="Enter Comic Book Character" value={input}/>
                <button className="col-auto btn btn-primary btn-lg mx-2" onClick={findHero}>Search</button>   
            </div>
            {character && <SuperheroDetails character={character} />}
        </div>
    );
}

export default SearchBar