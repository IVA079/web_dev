import { useState } from "react";
//import "./TodoList.css"; // optional

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]); // [{id, title, done}]

  const addTask = () => {
    const title = text.trim();
    if (!title) return;
    const newTodo = { id: Date.now(), title, done: false };
    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const toggleDone = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const removeTask = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.done));
  };

  return (
    <div style={{ maxWidth: 420, margin: "32px auto", fontFamily: "system-ui" }}>
      <h2>📝 Todo List</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
        style={{ display: "flex", gap: 8 }}
      >
        <input
          placeholder="add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ flex: 1, padding: "8px 10px" }}
        />
        <button type="submit">Add</button>
      </form>

      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button onClick={clearCompleted}>Clear Completed</button>
        <span style={{ color: "#666" }}>
          {todos.filter((t) => !t.done).length} left
        </span>
      </div>

      <hr />

      <h4>todo list</h4>
      {todos.length === 0 ? (
        <p style={{ color: "#777" }}>No tasks yet. Add one! ✨</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((t) => (
            <li
              key={t.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                margin: "6px 0",
              }}
            >
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleDone(t.id)}
              />
              <span style={{ textDecoration: t.done ? "line-through" : "none" }}>
                {t.title}
              </span>
              <button onClick={() => removeTask(t.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
