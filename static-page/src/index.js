import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Header() {
    return (
        <header className="py-5 shadow-grey-600 shadow-lg px-20">
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

function Footer() {
    return (
        <footer className="pt-10 italic text-gray-400 px-20">
            © 2022 Jaideep development. All rights reserved.
        </footer>
    );
}

function Heading() {
    return (
        <h1 className="font-bold text-3xl py-2 my-2 px-20">
            Reasons I'm excited to learn React
        </h1>
    );
}

function List() {
    return (
        <ol className="list-disc list-inside px-20">
            <li>
                It's a popular library, so I'll be able to fit in with the cool
                kids!
            </li>
            <li>I'm more likely to get a job as a developer if I know React</li>
        </ol>
    );
}

function Page() {
    return (
        <div className="">
            <Header />
            <Heading />
            <List />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));
