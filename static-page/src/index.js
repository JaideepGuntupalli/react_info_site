import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

function Header() {
    return (
        <header>
            <nav>
                <img src="./logo192.png" alt="react logo" className="w-20" />
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer className="pt-10 italic text-gray-400">
            © 2022 Jaideep development. All rights reserved.
        </footer>
    );
}

function Heading() {
    return (
        <h1 className="font-bold text-3xl py-2">
            Reasons I'm excited to learn React
        </h1>
    );
}

function List() {
    return (
        <ol className="list-disc list-inside">
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
        <div className="pl-10 pt-5">
            <Header />
            <Heading />
            <List />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));
