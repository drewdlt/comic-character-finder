import { useEffect } from "react";

function QuickInfo({ character }) {
  return (
    <>
      <span className="block text-lg font-semibold tracking-wide xl:text-2xl">
        {character.real_name}
      </span>
      <span className="block text-6xl font-extrabold tracking-wider sm:text-5xl xl:text-6xl">
        {character.name}
      </span>
      <span className="block text-lg tracking-wide sm:text-base xl:text-lg">
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
        className="mt-4 flex h-95 w-full bg-[image:var(--img-url)] bg-cover bg-center sm:h-75 sm:items-center md:h-90 xl:h-130"
      >
        <div className="hidden h-fit bg-gradient-to-r from-black/45 via-black/30 to-transparent py-2 sm:pl-[10%] sm:h-full sm:justify-center xl:pl-[15%] sm:flex sm:w-1/2 sm:flex-col sm:gap-4 xl:w-1/2 xl:gap-4 transition delay-0 duration-150 ease-in hover:from-black/55 hover:via-black/30 hover:to-black/5 ">
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
