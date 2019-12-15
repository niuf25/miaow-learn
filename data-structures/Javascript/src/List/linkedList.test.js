let linkedList = require("./linkedList");

test("linkedList append", () => {
    let list = new linkedList();

    list.append(19);
    expect(list.toString()).toEqual("19");
});

test("linkedList insert", () => {
    let list = new linkedList();

    list.append(2);
    list.append(4);
    expect(list.toString()).toEqual("2,4");
    expect(list.size()).toBe(2);
    expect(() => {
        list.insert(-1, 3)
    }).toThrowError("position is error.");
    expect(list.insert(1, 6)).toBeTruthy();
    expect(list.toString()).toEqual("2,6,4");
});

test("linkedList removeAt", () => {
    let list = new linkedList();

    list.append(2);
    list.append(4);
    expect(list.toString()).toEqual("2,4");
    expect(list.size()).toBe(2);
    expect(() => {
        list.removeAt(-1)
    }).toThrowError("position is error.");
    expect(list.removeAt(1)).toEqual(4);
});

test("linkedList indexOf", () => {
    let list = new linkedList();

    list.append(2);
    list.append(4);
    expect(list.size()).toBe(2);
    expect(list.indexOf(2)).toBe(0);
    expect(list.indexOf(3)).toBeFalsy();
});

test("linkedList remove", () => {
    let list = new linkedList();

    list.append(2);
    list.append(4);
    expect(list.size()).toBe(2);
    expect(list.remove(2)).toEqual(2);
    expect(list.remove(3)).toBeFalsy();
});