import Banner from "@/components/Home/Banner";
import Featured from "@/components/Home/Featured";
import Trending from "@/components/Home/Trending";
import Image from "next/image";

export default function Home() {
    return (
        <main className="w-full min-h-screen ml-[10%] sm:ml-[3rem] mt-[8.5vh] flex flex-col items-center justify-start border-5 overflow-y-auto overflow-x-hidden scroll-smooth">
            {/* <video
                className="fixed top-0 left-0 w-full h-screen object-cover z-[-1]"
                src="/star-vid.mp4"
                autoPlay
                loop
                muted
                playsInline
            /> */}

            <Banner/>
            <Featured/>
            <Trending/>
        </main>
    );
}
