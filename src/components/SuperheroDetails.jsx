import { useEffect } from "react";

function QuickInfo({ character }) {
  return (
    <div className="text-white">
      <span className="block text-lg font-semibold tracking-wide xl:text-2xl">
        {character.real_name}
      </span>
      <span className="block text-6xl font-extrabold tracking-wider sm:text-5xl xl:text-6xl">
        {character.name}
      </span>
      <span className="block text-lg tracking-wide sm:text-base xl:text-lg">
        {character.bio}
      </span>
    </div>
  );
}

function SuperheroDetails({ character }) {
  return (
    <>
      <div
        style={{ "--img-url": `url(${character.img})` }}
        className="mt-2 flex h-95 w-full bg-[image:var(--img-url)] bg-cover bg-center sm:h-75 sm:items-center md:h-90 xl:h-130"
      >
        <div className="hidden h-fit bg-gradient-to-r from-black/45 via-black/30 to-transparent py-2 transition delay-0 duration-150 ease-in hover:from-black/55 hover:via-black/40 hover:to-black/5 sm:flex sm:h-full sm:w-1/2 sm:flex-col sm:justify-center sm:gap-4 sm:pl-[10%] xl:w-1/2 xl:gap-4 xl:pl-[15%]">
          <QuickInfo character={character} />
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-neutral-800 px-4 py-4 sm:hidden">
        <QuickInfo character={character} />
      </div>
      <div className="my-3 flex flex-col items-center bg-white text-black sm:mx-15 sm:flex-row sm:justify-between">
        <img
          src={character.svg_img}
          alt={character.name}
          className="w-3/4 sm:w-2/5"
        />
        <div className="px-4 sm:w-3/5">
          <div className="mb-3 text-5xl font-extrabold tracking-wide">
            {character.name}
          </div>
          <div className="font-light lg:text-xl lg:tracking-wide">
            {character.description}
          </div>
        </div>
      </div>
    </>
  );
}

export default SuperheroDetails;
