const Engineer = require("../../lib/Engineer");
test("Can create Engineer object", () => {
    const emp = new Engineer();
    expect(typeof(emp)).toBe("object");
  });

  test("getRole() must return \"Engineer\"", () => {
    const expectedValue = "Engineer";
    const emp = new Engineer("Alice", 1, "test@test.com");
    expect(emp.getRole()).toBe(expectedValue);
  });