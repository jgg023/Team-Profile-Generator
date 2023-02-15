const Manager = require("../../lib/Manager");
test("Can create Manager object", () => {
    const emp = new Manager();
    expect(typeof(emp)).toBe("object");
  });

  test("getRole() must return \"Manager\"", () => {
    const expectedValue = "Manager";
    const emp = new Manager("Julian", 1, "julian@gmail.com");
    expect(emp.getRole()).toBe(expectedValue);
  });