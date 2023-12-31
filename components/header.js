import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function header() {
    return (
        <header className="bg-gray-200">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-3 sm:order-3 flex justify-center py-4 sm:py-0">
                    <input type="text" className="input-text" placeholder="Search..." />
                </div>
                <div className="flex shrink w-80 sm:order-2">
                    <img className="h-[50px] w-[50px] mr-2" src="/logo/logo/mathHeavenLogo.jpg" alt="" />
                    <a className="font-bold uppercase text-3xl">Math Heaven</a>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Link href='/'>Home</Link>

                        <Link href='/class'>Class</Link>
                        <Link href='/about'>About</Link>
                    </div>
                </div>
                {/* <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <a><ImFacebook color="#888888" /></a>
                        <a><ImTwitter color="#888888" /></a>
                        <a><ImYoutube color="#888888" /></a>
                    </div>
                </div> */}
            </div>
        </header>
    )
}
