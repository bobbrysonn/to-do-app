import React from "react";

// Import library to generate unique id's
import { v4 as uuidv4 } from "uuid";

// Other Components 
import Header from "./Header"
import TodosList from "./TodosList";
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					title: "Setup development environment",
					completed: true
				},
				{
					id: 2,
					title: "Develop website and add content",
					completed: false
				},
				{
					id: 3,
					title: "Deploy to live server",
					completed: false
				},
			],

			formErrors: ["bob"],
		};
	}

	handleChange = id => {

		this.setState(
			{
				todos: this.state.todos.map(function (todo) {
					if (todo.id === id) {
						todo.completed = !todo.completed;
					}

					return todo;
				})
			}
		);
	}

	addTodoItem = title => {
		
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false,
		};
		
		this.setState({
			todos: [...this.state.todos, newTodo],
		});
	}

	delTodo = id => {

		this.setState({
			todos: [
				...this.state.todos.filter(todo => {

					return todo.id !== id;
				})
			]
		});
	}

	render() {

		return (
			<div className="container">
				<Header />
				<InputTodo
					addTodoProps={this.addTodoItem}
				/>
				<TodosList
					todos={this.state.todos}
					handleChangeProps={this.handleChange}
					deleteTodoProps={this.delTodo}
				/>
			</div>
		);
	}
};

export default TodoContainer;