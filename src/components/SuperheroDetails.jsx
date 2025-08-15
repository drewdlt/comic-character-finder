import { useEffect } from "react";

function SuperheroDetails({ character }) {
  return (
    <div>
      <div className="flex">
        <div className="">
          <div className="">
            <p className="">
              <img
                className="hidden"
                src={`src/assets/${character.info.publisher}.png`}
                alt={character.info.publisher}
              />
              {character.real_name}
              <img
                className="w-20"
                src={`src/assets/${character.info.publisher}.png`}
                alt={character.info.publisher}
              />
            </p>
          </div>
          <div className="">
            <h1 className="">{character.name}</h1>
          </div>
          <div className="sm:hidden">
            <img src={character.img} alt={character.name} />
          </div>
          <div>
            <div className="">
              <p className="">
                First Appearance:{" "}
                <a
                  href={character.info.first_appearance_link}
                  target="_blank"
                  className="link-underline link-opacity-100 link-underline-opacity-0 link-underline-opacity-100-hover link-offset-2-hover link-light fst-italic fs-5"
                >
                  {character.info.first_appearance}
                </a>
              </p>
            </div>
            <div className="">
              <p className="">
                Total Appearances:{" "}
                <span className="">
                  {character.info.total_appearances.toLocaleString()}
                </span>
              </p>
            </div>
            <div className="">
              <span className="">
                {character.info.creators.length === 1
                  ? "Creator:"
                  : "Creators:"}
              </span>
              {character.info.creators.map((creator) => {
                if (
                  creator ===
                  character.info.creators[character.info.creators.length - 1]
                ) {
                  return (
                    <span className="" key={creator}>
                      {creator}
                    </span>
                  );
                }
                return (
                  <span className="" key={creator}>
                    {creator},
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <img src={character.img} alt={character.name} />
        </div>
      </div>
    </div>
  );
}

export default SuperheroDetails;
