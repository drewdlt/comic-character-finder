
function QuickInfo({ character }) {
  return (
    <div className="text-white">
      <span className="block text-lg font-semibold tracking-wide xl:text-2xl mb-2">
        {character.real_name}
      </span>
      <span className="block text-6xl font-extrabold tracking-wider sm:text-5xl xl:text-6xl mb-4">
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
        <div className="hidden h-fit bg-gradient-to-r from-black/45 via-black/30 to-transparent py-2 transition delay-0 duration-150 ease-in hover:from-black/55 hover:via-black/40 hover:to-black/5 sm:flex sm:h-full sm:w-1/2 sm:flex-col sm:justify-center sm:pl-[10%] xl:w-1/2 xl:pl-[15%]">
          <QuickInfo character={character} />
        </div>
      </div>
      <div className="flex flex-col bg-neutral-800 px-4 py-4 sm:hidden">
        <QuickInfo character={character} />
      </div>
      <div className="bg-neutral-900 text-white flex flex-col items-center text-xl tracking-wider py-4 gap-2 sm:flex-row sm:justify-around px-2">
        <div className="font-thin text-center">Created <span className="font-semibold text-nowrap">{character.info.created}</span></div>
        <div className="font-thin text-center">Created By <span className="font-semibold text-nowrap">{character.info.creators}</span></div>
        <div className="font-thin text-center relative">First Appearance - <a className="text-white font-semibold italic text-nowrap" style={{textDecoration: 'none'}} target="_blank" href={character.info.first_appearance_link}>{character.info.first_appearance}</a><img className="w-5 absolute -right-5.5 -top-2.5" src="open_in_new_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" /></div>
      </div>
      <div className="my-3 flex flex-col items-center bg-white text-black sm:mx-15 sm:flex-row sm:justify-around">
        <img
          src={character.svg_img}
          alt={character.name}
          className="w-3/4 sm:w-2/5"
        />
        <div className="px-4 sm:w-3/5 lg:w-2/5">
          <div className="mb-3 text-5xl font-extrabold tracking-wide">
            {character.name}
          </div>
          <div className="font-light lg:text-xl md:tracking-wider">
            {character.description}
          </div>
        </div>
      </div>
    </>
  );
}

export default SuperheroDetails;
