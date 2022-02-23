export default function Header() {
    return (
        <header className="py-2 shadow-grey-600 shadow-lg px-20 mb-10">
            <nav className="flex justify-between items-center">
                <img src="./logo192.png" alt="react logo" className="w-20" />
                <ul className="flex gap-16 text-xl">
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
