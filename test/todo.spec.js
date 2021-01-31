/**
 * Required External Modules and Interfaces
 */

const { testPostMehod, testPatchMehod, testDeleteMethod } = require("./common");

/**
 * App Variables
 */
const BASE_URL = "/api";

/**
 * Test
 */
// GET /todo/{userId}

// POST /todo
describe("POST /todo 는 todo 를 생성한다.", () => {
  const URL = `${BASE_URL}/todo`;
  describe("성공시", () => {
    it("todo 데이터를 생성한다.", (done) => {
      const sendData = {
        todoId: "1fajslkvih2",
        title: "코딩 테스트 새로 생성",
      };
      // url, sendData, statusCode, done
      testPostMehod(URL, sendData, 201, done);
    });
  });

  describe("실패시", () => {
    it("요청 파라미터가 잘못된 경우(todoId 누락), 400을 반환", (done) => {
      const sendData = {
        title: "코딩 테스트",
      };
      testPostMehod(URL, sendData, 400, done);
    });
    it("요청 파라미터가 잘못된 경우(title 누락), 400을 반환", (done) => {
      const sendData = {
        todoId: "1fajslkvih2",
      };
      testPostMehod(URL, sendData, 400, done);
    });
    it("로그인이 안되어 있는 경우, 401를 반환 (구현 예정)", (done) => {
      return done();
    });
  });
});

// PATCH /todo
describe("PATCH /todo 는 todo의 title를 업데이트한다.", () => {
  const URL = `${BASE_URL}/todo`;

  describe("성공시", () => {
    it("todo의 title를 업데이트한다.", (done) => {
      const sendData = {
        todoId: "1fajslkvih2",
        title: "코딩 테스트 (타이틀 수정)",
      };
      // url, sendData, statusCode, done
      testPatchMehod(URL, sendData, 201, done);
    });
  });

  describe("실패시", () => {
    it("요청 파라미터가 잘못된 경우 (todoId 누락), 400을 반환한다.", (done) => {
      // url, sendData, statusCode, done
      const sendData = {
        title: "코딩 테스트",
      };
      testPatchMehod(URL, sendData, 400, done);
    });
    it("요청 파라미터가 잘못된 경우 (title 누락), 400을 반환한다.", (done) => {
      const sendData = {
        todoId: "1fajslkvih2",
      };
      testPatchMehod(URL, sendData, 400, done);
    });
    it("todo가 존재하지 않는 경우, 404를 반환한다.", (done) => {
      const sendData = {
        todoId: "wrong_todoId",
        title: "update todo title",
      };
      testPatchMehod(URL, sendData, 404, done);
    });
    it("로그인 되지 않는 경우, 401를 반환한다. (구현 예정)", (done) => {
      return done();
    });
  });
});

// POST / todo / item;
describe("POST /todo/item 는 item을 생성한다.", () => {
  const URL = `${BASE_URL}/todo/item`;

  describe("성공시", () => {
    it("해당 todo에 Item을 생성한다.", (done) => {
      const sendData = {
        todoId: "1fajslkvih2",
        itemText: "책 읽기",
        property: true,
      };
      testPostMehod(URL, sendData, 201, done);
    });
  });

  describe("실패시", () => {
    it("요청 파라미터가 잘못된 경우(todoId 누락), 400을 반환", (done) => {
      const sendData = {
        itemText: "책 읽기",
        property: true,
      };
      testPostMehod(URL, sendData, 400, done);
    });
    it("요청 파라미터가 잘못된 경우(itemText 누락), 400을 반환", (done) => {
      const sendData = {
        todoId: "1fajslkvih2",
        property: true,
      };
      testPostMehod(URL, sendData, 400, done);
    });
    it("요청 파라미터가 잘못된 경우(property 누락), 400을 반환", (done) => {
      const sendData = {
        todoId: "1fajslkvih2",
        itemText: "책 읽기",
      };
      testPostMehod(URL, sendData, 400, done);
    });
    it("로그인이 안되어 있는 경우, 401를 반환 (구현 예정)", (done) => {
      return done();
    });
  });
});

//  PATH /todo/item
describe("PATCH /todo/item 는 item을 업데이트한다.", () => {
  const URL = `${BASE_URL}/todo/item`;
  describe("성공시", () => {
    it("해당 todo에 Item을 수정한다", (done) => {
      const sendData = {
        todoId: "test_todo",
        itemId: "test_item_id",
        itemText: "테스트용 아이템 - 수정",
        property: false,
      };
      testPatchMehod(URL, sendData, 201, done);
    });
  });

  describe("실패시", () => {
    it("요청 파라미터가 잘못된 경우(todoId 누락), 400을 반환", (done) => {
      const sendData = {
        itemId: "wrong id",
        itemText: "테스트용 아이템 - 수정",
        property: false,
      };
      testPatchMehod(URL, sendData, 400, done);
    });
    it("요청 파라미터가 잘못된 경우(itemId 누락), 400을 반환", (done) => {
      const sendData = {
        todoId: "test_todo",
        itemText: "테스트용 아이템 - 수정",
        property: false,
      };
      testPatchMehod(URL, sendData, 400, done);
    });
    it("요청 파라미터가 잘못된 경우(itemText 누락), 400을 반환", (done) => {
      const sendData = {
        todoId: "test_todo",
        itemId: "wrong id",
        property: false,
      };
      testPatchMehod(URL, sendData, 400, done);
    });
    it("요청 파라미터가 잘못된 경우(property 누락), 400을 반환", (done) => {
      const sendData = {
        todoId: "test_todo",
        itemId: "wrong id",
        itemText: "테스트용 아이템 - 수정",
      };
      testPatchMehod(URL, sendData, 400, done);
    });
    it("해당 todo에 item이 존재하지 않는 경우 (todoId wrong), 404를 반환한다.", (done) => {
      let sendData = {
        todoId: "wrong todoId",
        itemId: "test_item_id",
        itemText: "테스트용 아이템 - 수정",
        property: false,
      };
      testPatchMehod(URL, sendData, 404, done);
    });
    it("해당 todo에 item이 존재하지 않는 경우(itemId wrong), 404를 반환한다.", (done) => {
      let sendData = {
        todoId: "test_todo",
        itemId: "wrong item id",
        itemText: "테스트용 아이템 - 수정",
        property: false,
      };
      testPatchMehod(URL, sendData, 404, done);
    });
    it("로그인 되지 않는 경우, 401를 반환한다. (구현 예정)", (done) => {
      return done();
    });
  });
});

// Delete /todo/:todoId/:itemId
// Delete /todo/delete_todo/test_delete_item_2
describe("DELETE /todo/{todoId}/{itemId} 는 해당 item을 삭제한다.", () => {
  const URL = `${BASE_URL}/todo`;
  describe("성공시", () => {
    it("해당 item을 삭제한다.", (done) => {
      testDeleteMethod(`${URL}/delete_todo/test_delete_item_2`, 204, done);
      // testDeleteMethod(`${URL}/${}item/`)
    });
  });
  describe("실패시", () => {
    const wrongTodoId = "wrongTodoId";
    const wrongItemId = "wrongItemId";
    it("요청 파라미터가 잘못된 경우(todoId), 404를 반환", (done) => {
      const url = `${URL}/${wrongTodoId}/test_delete_item_2`;
      testDeleteMethod(url, 404, done);
    });
    it("요청 파라미터가 잘못된 경우(itemId), 404를 반환", (done) => {
      const url = `${URL}/delete_todo/${wrongItemId}`;
      testDeleteMethod(url, 404, done);
    });
    it("요청 파라미터가 잘못된 경우(todo, item 누락), 404를 반환", (done) => {
      const url = `${URL}/${wrongTodoId}/${wrongItemId}`;
      testDeleteMethod(url, 404, done);
    });
    it("로그인 되지 않는 경우, 401를 반환한다. (구현 예정)", (done) => {
      return done();
    });
  });
});

// DELETE /todo/{todoId}
describe("DELETE /todo/{todoId} 는 해당 todo를 삭제한다.", () => {
  const URL = `${BASE_URL}/todo`;
  describe("성공시", () => {
    it("해당 todo 를 삭제한다.", (done) => {
      // url, statusCode, done
      testDeleteMethod(`${URL}/delete_todo`, 204, done);
    });
  });
  describe("실패시", () => {
    it("요청 파라미터가 잘못된 경우(todoId 누락), 404을 반환", (done) => {
      // url, statusCode, done
      testDeleteMethod(`${URL}/wrong_todoId`, 404, done);
    });
    it("로그인 되지 않는 경우, 401를 반환한다. (구현 예정)", (done) => {
      return done();
    });
  });
});
