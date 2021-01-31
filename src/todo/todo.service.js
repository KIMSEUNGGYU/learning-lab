/**
 * Data Model Interfaces
 */

/**
 * In-Memory Store
 */
require("dotenv").config();

let todos = [];
let items = [];

if (process.env.NODE_ENV === "development") {
  todos = [
    {
      todoId: "1fajslkvih2",
      title: "코딩 테스트",
    },
  ];
  items = [
    {
      todoId: "1fajslkvih2",
      itemId: 1,
      itemText: "테스트용 아이템",
      property: false,
    },
  ];
} else {
  // TEST DB
  todos = [
    {
      todoId: "test_todo",
      title: "Test Title",
    },
    {
      todoId: "delete_todo",
      title: "delete todo title",
    },
  ];
  items = [
    {
      todoId: "test_todo",
      itemId: "test_item_id",
      itemText: "테스트용 아이템",
      property: false,
    },
    {
      todoId: "delete_todo",
      itemId: "test_delete_item",
      itemText: "삭제용 아이템",
      property: true,
    },
    {
      todoId: "delete_todo",
      itemId: "test_delete_item_2",
      itemText: "삭제용 아이템",
      property: true,
    },
    {
      todoId: "delete_todo",
      itemId: "test_delete_item_3",
      itemText: "삭제용 아이템",
      property: false,
    },
  ];
}

/**
 * Service Methods
 */
// COMMON
exports.checkBody = (body) =>
  Object.values(body).some((value) => value === undefined);

// TODOS
exports.getTodos = () => todos;
exports.getTodo = (todoId) => todos.find((todo) => todo.todoId === todoId);
exports.createTodo = (todo) => {
  todos.push(todo);
  return todo;
};
exports.updateTodo = (todoId, title) =>
  todos.find((todo) => {
    if (todo.todoId === todoId) {
      todo.title = title;
      return todo;
    }
  });
exports.deleteTodo = (todoId) =>
  (todos = todos.filter((todo) => todo.todoId !== todoId));

//   ITEMS
exports.getItems = () => items;
exports.getItem = (todoId, itemId) =>
  items.find((item) => item.todoId === todoId && item.itemId === itemId);

exports.createItem = (item) => {
  items.push(item);
  return item;
};
exports.updateItem = ({ itemId, itemText, property }) =>
  items.find((item) => {
    if (item.itemId === itemId) {
      item.itemText = itemText;
      item.property = property;
      return item;
    }
  });
exports.deleteItem = (todoId, itemId) =>
  (items = items.filter(
    (item) =>
      (item.todoId === todoId && item.itemId !== itemId) ||
      item.todoId !== todoId
  ));
