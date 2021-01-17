import React, { useState } from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #0079bf;
    // color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const Input = styled.input``;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);
  const today = new Date();
  const date = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [dateString, setText] = useState(date);
  const [editable, setEditable] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const KeyDown = (event) => {
    if (event.key === "Enter") {
      setEditable(!editable);
    }
  };

  const changeEditMode = () => {
    setEditable(!editable);
  };

  return (
    <TodoHeadBlock>
      {editable ? (
        <Input
          type="text"
          value={dateString}
          onChange={onChange}
          onKeyDown={KeyDown}
        />
      ) : (
        <h1 onDoubleClick={changeEditMode}>{dateString}</h1>
      )}

      {/* <div className="day">{dayName}</div> */}
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
