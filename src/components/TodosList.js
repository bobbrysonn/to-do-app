import React from "react";

// Other Components 
import TodoItem from "./TodoItem";

class TodosList extends React.Component {

    constructor(props) {

        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                {this.props.todos.map(
                    todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleChangeProps={this.props.handleChangeProps}
                            deleteTodoProps={this.props.deleteTodoProps}
                        />
                    )
                )}
            </div>
        );
    }
}

export default TodosList;