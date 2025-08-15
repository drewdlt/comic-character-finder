import { useEffect } from "react";

function SuperheroDetails({ character }) {
  return (
    <>
      <div className="flex">
        <div className="mt-4">
          <div className="text-center tracking-wide">
            <img
              className="mx-auto mb-1 w-20"
              src={`src/assets/${character.info.publisher}.png`}
              alt={character.info.publisher}
            />
            <span className="mb-2 block text-6xl font-extrabold">
              {character.name}
            </span>
            <span className="mb-2 block text-lg">{character.real_name}</span>
          </div>
          <div className="sm:hidden">
            <img src={character.img} alt={character.name} />
          </div>
          <div className="text-center text-white/80">
            <span>Created By: </span>
            <span>{character.info.creators}</span>
          </div>
        </div>
        <div className="hidden sm:block">
          <img src={character.img} alt={character.name} />
        </div>
      </div>
    </>
  );
}

export default SuperheroDetails;
