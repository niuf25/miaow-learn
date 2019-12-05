let Stack = require("./stack");

let s = new Stack();

test("stack push ele", () => {
    s.push(1);
    expect(s.pop()).toBe(1);
});

test("stack isEmpty", () => {
    expect(s.isEmpty()).toBeTruthy();
});

test("stack clear", () => {
    s.push(2);
    s.push(4);
    expect(s.clear()).toEqual([]);
});

test("stack push pop peek", () => {
    s.push(1);
    s.push(3);
    expect(s.size()).toBe(2);
    expect(s.peek()).toBe(3);
    expect(s.pop()).toBe(3)
    expect(s.size()).toBe(1);
});