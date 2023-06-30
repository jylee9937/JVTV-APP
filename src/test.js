import { useEffect, useState } from "react";
import "./App.css";
function App() {
	function readTodosFromLocal() {
		const todos = localStorage.getItem("todos");
		return todos ? JSON.parse(todos) : [];
	}
	// const [todos, setTodos] = useState(() => readTodosFromLocal());
	const [todos, setTodos] = useState(readTodosFromLocal());

	const [todoTitle, setTodoTitle] = useState("");

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<h1 className="title">TODO APP</h1>
			{/* map!!! */}
			{todos.map((todo) => (
				<div key={todo.id}>
					<input
						type="checkbox"
						name="done"
						id={todo.id}
						checked={todo.done}
						onChange={(event) => {
							setTodos(
								todos.map((element) =>
									element.id === todo.id
										? { ...element, done: event.target.checked }
										: element
								)
							);
						}}
					/>
					<span>{todo.title}</span>
					<button
						onClick={() => {
							// 해당하는 todo를 todos에서 삭제한다.
							setTodos(todos.filter((element) => element.id !== todo.id));
						}}
					>
						삭제
					</button>
				</div>
			))}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const newTodo = {
						id: new Date().getTime(),
						title: todoTitle,
						done: false,
					};
					setTodos([...todos, newTodo]);
					setTodoTitle("");
				}}
			>
				<input
					type="text"
					value={todoTitle}
					onChange={(event) => {
						setTodoTitle(event.target.value);
					}}
				/>
			</form>
		</>
	);
}
export default App;
