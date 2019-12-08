function PriorityQueue() {
    let items = [];

    let QueueElement = function(ele, priority) {
        this.element = ele;
        this.priority = priority;
    }

    // 默认优先级为9999，存在小bug
    this.enqueue = function(ele, priority=9999) {
        if (!ele || priority < 0) {
            throw new Error("ele is empty or priority is less zero.");
        }

        let queueEle = new QueueElement(ele, priority);

        if (this.isEmpty()) {
            items.push(queueEle);
        } else {
            let added = false;

            for (let index = 0, len=items.length; index < len; index++) {
                // 数字越小，优先级越高
                if (queueEle.priority < items[index].priority) {
                    items.splice(index, 0, queueEle);
                    added = true;
                    break;
                }
            }

            if (!added) {
                items.push(queueEle);
            }
        }
    }

    this.dequeue = function() {
        if (this.isEmpty()) {
            throw new Error("priorityQueue is empty");
        }
        return items.shift();
    }

    this.front = function() {
        if (this.isEmpty()) {
            throw new Error("priorityQueue is empty");
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
}

module.exports = PriorityQueue;