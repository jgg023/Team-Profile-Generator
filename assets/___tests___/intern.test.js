const Intern = require("../../lib/Intern");
test("Can create Intern object", () => {
    const emp = new Intern();
    expect(typeof(emp)).toBe("object");
  });

  test("getRole() must return \"Intern\"", () => {
    const expectedValue = "Intern";
    const emp = new Intern("Alice", 1, "test@test.com");
    expect(emp.getRole()).toBe(expectedValue);
  });