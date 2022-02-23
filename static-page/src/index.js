import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Heading from "./Heading";
import List from "./List";

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Page() {
    return (
        <div className="relative h-screen">
            <Header />
            <Heading />
            <List />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));
