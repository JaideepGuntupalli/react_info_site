export default function MainContent() {
    return (
        <section className="bg-[#282D35] font-sans text-white h-screen bg-[url('./assets/reactjs-half.png')] bg-no-repeat bg-right">
            <section className="flex flex-col gap-12 pt-24 pl-20">
                <h1 className="font-bold text-4xl">Fun facts about React</h1>
                <ul className="list-disc list-inside flex flex-col gap-6 marker:text-[#61DAFB] pl-8">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>
                        Powers thousands of enterprise apps, including mobile
                        apps
                    </li>
                </ul>
            </section>
        </section>
    );
}
