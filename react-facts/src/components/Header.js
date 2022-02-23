import reactLogo from "../assets/react-logo.png";

export default function Header() {
    return (
        <header className=" bg-[#21222A] flex justify-between px-20 items-center py-5">
            <div className="flex items-center gap-1">
                <img src={reactLogo} alt="React Logo" className=" w-10" />
                <p className="text-[#61DAFB] text-2xl font-sans font-bold">
                    ReactFacts
                </p>
            </div>
            <div className="flex">
                <p className="font-sans font-semibold text-[#DEEBF8]">
                    React Course - Project 1
                </p>
            </div>
        </header>
    );
}
