import React, { useState } from "react";
import styles from "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState();
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["eee"]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);
    setTodoText("");
  };
  const onClickDel = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);
  };
  const onClickOk = (todo, index) => {
    const newcompleteTodo = [...completeTodos, todo];
    setCompleteTodos(newcompleteTodo);

    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);
  };
  const onClickReturn = (todo, index) => {
    const newIncompleteTodos = [...incompleteTodos, todo];
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="初期入力値"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickOk(todo, index)}>ok</button>
                <button onClick={() => onClickDel(index)}>del</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickReturn(todo, index)}>
                  return
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
