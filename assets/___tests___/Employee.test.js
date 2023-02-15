const Employee = require("../../lib/Employee");
test("Can create Employee object", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
  });

  test("getRole() must return \"Employee\"", () => {
    const expectedValue = "Employee";
    const emp = new Employee("Julian", 1, "Julian@gmail.com");
    expect(emp.getRole()).toBe(expectedValue);
  });



