let PriorityQueue = require('./priorityQueue');

test("priorityQueue", () => {
    let pq = new PriorityQueue();
    pq.enqueue(2);
    pq.enqueue(1);
    expect(pq.front()).toEqual({ element: 2, priority: 9999 });
    expect(pq.size()).toBe(2);
    pq.enqueue(3, 5);
    // console.log(pq.dequeue());
    expect(pq.dequeue()).toEqual({ element: 3, priority: 5 });
    pq.clear();
    expect(pq.isEmpty()).toBeTruthy();
    expect(() => {
        pq.enqueue()
    }).toThrow();
    expect(() => {
        pq.dequeue()
    }).toThrow();
    expect(() => {
        pq.front()
    }).toThrow();
});