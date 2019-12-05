function Stack()
{
    let items = [];

    this.push = function(ele) {
        items.push(ele);
    }
    
    this.pop = function() {
        return items.pop();
    }

    this.peek = function() {
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.size = function() {
        return items.length;
    }

    this.clear = function() {
        return items = [];
    }
}

module.exports = Stack;