/**
 * Required External Modules and Interfaces
 */
const express = require("express");
const todoService = require("./todo.service");
const view = require("./todo.view");

/**
 * Router Definition
 */
const router = express.Router();

// GET /todo/{userId}
router.get("/", async (req, res, next) => {
  const todos = await todoService.getTodos();
  return res.status(200).json(view.success(todos));
});

// POST /todo
router.post("/", async (req, res, next) => {
  try {
    const { todoId, title } = req.body;

    if (todoService.checkBody({ todoId, title })) {
      return res.status(400).json(view.badRequest());
    }

    const _todo = todoService.getTodo(todoId);
    if (_todo) {
      return res.status(409).json(view.conflict());
    }

    const todo = await todoService.createTodo({ todoId, title });
    return res.status(201).json(view.created(todo));
  } catch (err) {
    next(new Error(err));
  }
});

// PATCH /todo
router.patch("/", async (req, res, next) => {
  try {
    const { todoId, title } = req.body;
    if (todoService.checkBody({ todoId, title })) {
      return res.status(400).json(view.badRequest());
    }

    const _todo = todoService.getTodo(todoId);
    if (!_todo) {
      return res.status(404).json(view.noContent());
    }

    const updatedTodo = todoService.updateTodo(todoId, title);
    return res.status(201).json(view.created(updatedTodo));
  } catch (err) {
    next(new Error(err));
  }
});

// POST /todo/item
router.post("/", async (req, res, next) => {
  try {
    const { todoId, title } = req.body;

    if (todoService.checkBody({ todoId, title })) {
      return res.status(400).json(view.badRequest());
    }

    const _todo = todoService.getTodo(todoId);
    if (_todo.length > 0) {
      return res.status(409).json(view.conflict());
    }

    const todo = await todoService.createTodo({ todoId, title });
    return res.status(201).json(view.created(todo));
  } catch (err) {
    next(new Error(err));
  }
});

// GET /todo/item
router.get("/item", async (req, res, next) => {
  const items = todoService.getItems();
  return res.status(200).json(view.success(items));
});

// POST /todo/item/
router.post("/item", async (req, res, next) => {
  try {
    const { todoId, itemText, property } = req.body;

    if (todoService.checkBody({ todoId, itemText, property })) {
      return res.status(400).json(view.badRequest());
    }

    const itemId = String(Date.now());
    const createdItem = await todoService.createItem({
      todoId,
      itemId,
      itemText,
      property,
    });
    return res.status(201).json(view.created(createdItem));
  } catch (err) {
    next(new Error(err));
  }
});

// PATH /todo/item
router.patch("/item", async (req, res, next) => {
  try {
    const { todoId, itemId, itemText, property } = req.body;

    if (todoService.checkBody({ todoId, itemId, itemText, property })) {
      return res.status(400).json(view.badRequest());
    }

    const item = await todoService.getItem(todoId, itemId);
    if (!item) {
      return res.status(404).json(view.noContent());
    }

    const updatedItem = todoService.updateItem(req.body);
    return res.status(201).json(view.created(updatedItem));
  } catch (err) {
    next(new Error(err));
  }
});

// DELETE /todo
router.delete("/:todoId", async (req, res, next) => {
  try {
    const todoId = req.params.todoId;
    const todo = todoService.getTodo(todoId);

    // 데이터가 없는 경우 404
    if (!todo) {
      return res.status(404).json(view.noContent());
    }

    await todoService.deleteTodo(todoId);
    // 데이터 삭제 성공
    return res.status(204).json(view.noContent());
  } catch (err) {
    next(new Error(err));
  }
});

// DELETE /todo/{todoId}/{itemId}
router.delete("/:todoId/:itemId", async (req, res, next) => {
  try {
    let { todoId, itemId } = req.params;

    const item = await todoService.getItem(todoId, itemId);
    if (!item) {
      return res.status(404).json(view.noContent());
    }

    await todoService.deleteItem(todoId, itemId);

    return res.status(204).json(view.noContent());
  } catch (err) {
    next(new Error(err));
  }
});

module.exports = router;
