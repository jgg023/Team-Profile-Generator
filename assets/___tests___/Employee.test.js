const Employee = require("../../lib/Employee");
test("Can create Employee object", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
  });

  test("getRole() must return \"Employee\"", () => {
    const expectedValue = "Employee";
    const emp = new Employee("Alice", 1, "test@test.com");
    expect(emp.getRole()).toBe(expectedValue);
  });



