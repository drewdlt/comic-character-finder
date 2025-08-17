import Navbar from "../components/Navbar";
import { NavLink } from "react-router";

function HomePage() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-between bg-[url('hero-img.jpg')] bg-cover bg-center bg-no-repeat md:justify-normal">
        <Navbar />
        <div className="mb-3 flex w-11/12 flex-col rounded-xl bg-black/40 px-1 py-2 md:relative md:mt-14 md:ml-[10%] md:w-1/4 md:gap-2 md:self-start lg:gap-3 text-white">
          <p className="mb-2 text-center text-2xl font-bold md:pt-3 md:text-3xl lg:text-5xl">
            Unmask the Legends. Discover the Stories.
          </p>
          <p className="mb-0 text-center md:text-xl lg:text-2xl">
            Explore detailed profiles of your favorite comic book characters -
            from iconic heroes to notorious villians. Learn their origins,
            powers, first appearances, and more.
          </p>
          <NavLink
            to="lookup"
            className="rounded-5 mt-3 mb-2 w-auto self-center bg-blue-700 px-2 py-1 font-bold transition delay-0 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-800"
            style={{ textDecoration: "none" }}
          >
            <span className="text-white md:text-xl lg:text-2xl">
              Search Your Hero
            </span>
          </NavLink>
          <p className="mb-0 text-center text-sm font-thin italic md:pb-3 md:text-base lg:text-lg">
            -"Every hero has a story... and every story starts here.""
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
