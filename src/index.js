import React from "react";
import ReactDOM from "react-dom";

// Import the Todo Container
import TodoContainer from "./components/TodoContainer";

// Import CSS Files
import "./css/App.css";

// Render the element
ReactDOM.render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>,

    document.getElementById("root")
);