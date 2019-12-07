function Queue() {
    let items = [];

    this.enqueue = function(ele) {
        items.push(ele);
    }
    this.dequeue = function() {
        if (this.isEmpty())
        {
            throw new Error("Queue is empty");
        }

        return items.shift();
    }
    this.front = function() {
        if (this.isEmpty())
        {
            throw new Error("Queue is empty");
        }

        return items[0];
    }
    this.clear = function() {
        return items = [];
    }
    this.isEmpty = function() {
        return items.length === 0;
    }
    this.size = function() {
        return items.length;
    }
    this.toString = function() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        }

        let str = 'front: ';
        str += items.reduce(function(ele1, ele2) {
            return ele1 + ", " + ele2;
        });

        return str;
    }
}

module.exports = Queue;