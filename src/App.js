import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: newText,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="todo-main-block">
          <TodoForm
            onAdd={(text) => {
              setTodos([
                ...todos,
                {
                  id: Math.random(),
                  text: text,
                  isCompleted: false,
                },
              ]);
            }}
          />
          <TodoFilter />
          {todos.length > 0 && todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                status={todo.isCompleted}
                onDelete={() => {
                  const updatedTodos = todos.filter(
                    (item) => item.id !== todo.id
                  );
                  setTodos(updatedTodos);
                }}
                onEdit={(text) => {
                  const updatedTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return { ...item, text: text };
                    }
                    return item;
                  });
                  setTodos(updatedTodos);
                }}
                onStatusChange={() => {
                  const updatedTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return { ...item, isCompleted: !item.isCompleted };
                    }
                    return item;
                  });
                  setTodos(updatedTodos);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
