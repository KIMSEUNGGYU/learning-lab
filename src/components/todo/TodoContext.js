import React, { useReducer, createContext, useContext } from "react";

const initialTodos = [
  {
    id: "161089691825_프로젝트 생성하기",
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: "16108969181_컴포넌트 스타일링하기",
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: "16108969182_Context 만들기",
    text: "Context 만들기",
    done: false,
  },
  {
    id: "16108969183_기능 구현하기",
    text: "기능 구현하기",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.todoText } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
