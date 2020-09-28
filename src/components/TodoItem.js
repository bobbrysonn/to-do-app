import React from "react";

class TodoItem extends React.Component {

    constructor(props) {

        super(props);
        this.state = {};
    }

    render() {
        
        const completedStyle = {
            fontStyle: "italic",
            color: "#D35E0F",
            opacity: .4,
            textDecoration: "line-through",
        }

        return (
            <li className="todo-item"><input
                    type="checkbox"
                    checked={this.props.todo.completed} 
                    onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                />
                <button
                    onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
                >
                    Delete
                </button>
                <span style={this.props.todo.completed ? completedStyle : null}>
                    {this.props.todo.title}
                </span>
            </li>
        );
    }
}

export default TodoItem;