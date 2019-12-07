let Queue = require('./queue');

let q = new Queue();

test('Queue enqueue ele', function() {
    q.enqueue(2);
    expect(q.size()).toBe(1);
    q.enqueue(1);
    expect(q.size()).toBe(2);
    expect(q.toString()).toEqual("front: 2, 1");
});

test('Queue dequeue ele', function() {
    q.clear();
    expect(() => {
        q.dequeue()
    }).toThrowError("Queue is empty");
    q.enqueue(2);
    q.enqueue(5);
    expect(q.dequeue()).toEqual(2);
    expect(q.size()).toBe(1);
});

test("Queue front,clear,isEmpty", function() {
    q.clear();
    expect( () => {
        q.front()
    }).toThrowError("Queue is empty");
    expect(q.isEmpty()).toBeTruthy();
    q.enqueue(4);
    expect(q.isEmpty()).toBeFalsy();
    expect(q.front()).toEqual(4);
});
