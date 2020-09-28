import React from "react";
import "../css/bootstrap.min.css";

function ErrorBox(props) {

    let errors = props.errors ? props.errors.map((error, index) => <li key={index}>{error}</li>) : null;    

    if (props.errors.length) {
        return (
            <div className="alert alert-danger text-center">
                <ul style={{ listStyleType: "none", fontSize: "17px" }}>
                    {errors}
                </ul>
            </div>
        )
    } else {

        return null;
    }
}

export default ErrorBox;