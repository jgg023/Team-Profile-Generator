const Intern = require("../../lib/Intern");
test("Can create Intern object", () => {
    const emp = new Intern();
    expect(typeof(emp)).toBe("object");
  });

  test("getRole() must return \"Intern\"", () => {
    const expectedValue = "Intern";
    const emp = new Intern("Julian", 1, "julian@gmail.com");
    expect(emp.getRole()).toBe(expectedValue);
  });