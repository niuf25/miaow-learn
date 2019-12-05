test("array add ele in last", () => {
    let numbers = [0, 1, 2];
    numbers.push(3);
    expect(numbers).toEqual([0, 1, 2, 3]);
});

test("array add ele in first", () => {
    let numbers = [0, 1, 2];
    numbers.unshift(-1);
    expect(numbers).toEqual([-1, 0, 1, 2]);
});

test("array delete ele in last", () => {
    let numbers = [0, 1, 2];
    numbers.pop();
    expect(numbers).toEqual([0, 1]);
});

test("array delete ele in first", () => {
    let numbers = [0, 1, 2];
    numbers.shift();
    expect(numbers).toEqual([1, 2]);
});

test("array indexOf", () => {
    let numbers = [0, 1, 2];
    
    expect(numbers.indexOf(1)).toBe(1);
    expect(numbers.indexOf(4)).toBe(-1);
});