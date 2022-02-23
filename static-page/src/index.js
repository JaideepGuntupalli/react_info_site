import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Heading from "./Heading";
import List from "./List";

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
