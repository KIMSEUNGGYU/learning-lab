import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "./TodoContext";

function Todo() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default Todo;
