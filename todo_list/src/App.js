import React from "react";
import "./App.css";
const App = () => {
    //list of todos
    //@type Array
  const [todos, setTodos] = React.useState([]);

  //single todo from the input
  //@type String
  const [todo, setTodo] = React.useState("");

//check if todo is beign edited
//@type null
  const [todoEditing, setTodoEditing] = React.useState(null);
  
  //the edited text from the text input
  //@type String
  const [editingText, setEditingText] = React.useState('');
  
  // Add the handlesubmit code here
  function handleSubmit(e){
      e.preventDefault();

      //new todo object
      const newTodo = {
          id: new Date().getTime().toString(),
          //text of the todo from the input form
          text: todo.trim(),
          completed: false,
      }

      //check if the text ppt in the newTodo obj is less than 0
      if(newTodo.text.length > 0){
          //add new todo to setTodos getter
          setTodos([...todos].concat(newTodo))

          //set todo text to empty string, 
          //which inadvertently sets the form input to empty
          setTodo("")
      }else{
          alert("Enter valid Task");
          setTodo("")
      }
  }
  
  // Add the deleteToDo code here
function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
}
  
  // Add the toggleComplete code here

  function toggleComplete(id){
      let updatedTodos = [...todos].map((todo) => {
          if(todo.id === id){
              todo.completed = !todo.completed;
          }
          return todo
      })

      setTodos(updatedTodos)
  }
  // Add the submitEdits code here
  function submitEdits(id){
      let updatedTodos = [...todos].map((todo) => {
          if(todo.id === id){
              todo.text = editingText;
          }

          return todo;
      })
      setTodos(updatedTodos);
      setTodoEditing(null)
  }


  //loads todos from the localStorage
  React.useEffect(() => {
      const json = localStorage.getItem('todos');
      const loadedTodos = JSON.parse(json)

      if(loadedTodos){
          setTodos(loadedTodos)
      }
  }, []);

  //setTodos to the localStorage
  React.useEffect(() => {
      if([todos].length > 0){
          const json = JSON.stringify(todos);
          localStorage.setItem("todos", json)
      }
  },[todos])
  
  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
