import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Section";
import About from "./components/About";
import Counter from "./components/Counter";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./Types/data";

function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = () => {
    if (text !== "")
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: text!,
          completed: false,
        },
      ]);
    setText("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(prev => prev.id !== id))
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className="App">
      <Heading title={"Hi Kamila"} isActive={true} />
      <Section text={"My best course Okurmen"}>
        Tell me about Okurmen
        <div>Hi Islam, How old are you Islam</div>
      </Section>
      <About firstName={"Daniel"} lastName={"Dancho"} age={16}></About>
      <Counter click={setCount}>
        <h1>Count: {count}</h1>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          onKeyDown={handleKeyDown}
        ></input>
        <button onClick={addTodo}>add</button>
        <br></br>
        <TodoList
          items={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </Counter>
    </div>
  );
}

export default App;
