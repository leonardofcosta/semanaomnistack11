const generateUniqueId = require("../../src/utils/genereteUniqueId");

describe("Generete Unique ID", () => {
  it("should generate an unique ID", () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});