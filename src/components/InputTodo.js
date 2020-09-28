import React, { Component } from "react";
import ErrorBox from "./ErrorBox"

class InputTodo extends Component {

    constructor(props) {

        super(props);
        this.state = {

            title: "",
            formErrors: [],
        }
    }

    onChange(event) {

        this.setState({

            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {

        event.preventDefault();
        if (!this.state.title) {
			let error = "The input box is empty !"; 
			this.setState({

				formErrors: [error],
			});

			console.log(this.state.formErrors);
			return;
		}
		if (!this.state.title.trim().length) {

			let error = "The input box is empty and only filled with spaces !";
			this.setState({

				formErrors: [error],
			});

			console.log(this.state.formErrors);
			return;
		}
        this.props.addTodoProps(this.state.title);
        this.setState({

            title: "",
            formErrors: []
        });
    }

    render() {

        return (
            <>
            <ErrorBox errors={this.state.formErrors} />
            <form onSubmit={(event) => this.handleSubmit(event)} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    name="title"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={(event) => this.onChange(event)}
                />
                <input type="submit" value="Submit" className="input-submit" />
            </form>
            </>
        );
    }
}

export default InputTodo;