import { useEffect } from "react";

function QuickInfo({ character }) {
  return (
    <>
      <span className="block text-lg font-semibold tracking-wide">
        {character.real_name}
      </span>
      <span className="block text-6xl font-extrabold tracking-wider sm:text-5xl">
        {character.name}
      </span>
      <span className="block text-lg tracking-wide sm:text-base">
        {character.bio}
      </span>
    </>
  );
}

function SuperheroDetails({ character }) {
  return (
    <>
      <div
        style={{ "--img-url": `url(${character.img})` }}
        className="mt-4 flex h-95 w-full bg-[image:var(--img-url)] bg-cover bg-center sm:h-75 sm:items-center"
      >
        <div className="ml-[5%] hidden h-fit gap-2 bg-gradient-to-r from-black/20 via-transparent to-transparent pl-2 sm:flex sm:w-1/3 sm:flex-col">
          <QuickInfo character={character} />
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-black px-4 py-4 sm:hidden">
        <QuickInfo character={character} />
      </div>
    </>
  );
}

export default SuperheroDetails;
