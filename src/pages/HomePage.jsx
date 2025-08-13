import Navbar from "../components/Navbar";

function HomePage() {
    return (
        <>
            <div className="w-full bg-[url('hero-img.jpg')] h-screen bg-no-repeat bg-cover bg-center pt-3 flex flex-col justify-between">
                <Navbar />
                <div className="bg-black/40 w-11/12 mb-3 mx-auto py-2 px-1py-2 px-1 flex flex-col rounded-xl">
                    <p className="text-2xl mb-2 font-bold text-center">Unmask the Legends. Discover the Stories.</p>
                    <p className="mb-0 text-center">Explore detailed profiles of your favorite comic book characters - from iconic heroes to notorious villians. Learn their origins, powers, first appearances, and more.</p>
                    <button className="bg-blue-700 w-auto self-center mt-3 mb-2 font-bold py-1 px-2 rounded-5 transition delay-0 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-800">Search Your Hero</button>
                    <p className="font-thin italic text-sm text-center mb-0">Every hero has a story... and every story starts here.</p>
                </div>
            </div>
        </> 
    );
}

export default HomePage;