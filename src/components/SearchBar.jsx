import { useEffect, useState } from "react";
import SuperHeros from "../superheros.json";
import SuperheroDetails from "./SuperheroDetails";

function SearchBar() {
  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState(null);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    setCharacters(SuperHeros);
  }, []);

  function handleInput(event) {
    setInput(event.target.value);
  }

  function enterKeyPressed(event) {
    if (event.key === "Enter") {
      findHero();
      event.target.value = "";
    }
  }

  function findHero() {
    setCharacter(
      characters.find((hero) =>
        hero.name
          .replace(/-|\s/, "")
          .toLowerCase()
          .includes(input.replace(/-|\s/, "").toLowerCase()),
      ),
    );
    setInput("");
  }

  return (
    <>
      <div className="mx-auto mt-4 flex w-3/4 justify-center text-center">
        <input
          className="w-2/3 border-b-2 p-2 font-semibold tracking-wider text-2xl placeholder:text-xl focus:outline-0"
          onChange={handleInput}
          onKeyDown={enterKeyPressed}
          type="search"
          placeholder="Search the multiverse..."
          value={input}
        />
        <button className="border-b-2 p-2" onClick={findHero}>
          <img
            src="search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="w-8 transition delay-0 duration-300 ease-in-out hover:-translate-y-1"
          />
        </button>
      </div>
      {character && <SuperheroDetails character={character} />}
    </>
  );
}

export default SearchBar;
