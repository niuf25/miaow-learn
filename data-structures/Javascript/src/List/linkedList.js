function linkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function (ele) {
        let newNode = new Node(ele);

        if (head == null) {
            head = newNode
        } else {
            let current = head

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        length++;
    }

    this.insert = function (position, ele) {
        if (position < 0 || position > length) {
            throw new Error("position is error.");
        }

        let newNode = new Node(ele);
        let current = head;
        let previous = null;
        let index = 0;

        if (position == 0) {
            newNode.next = current;
            head = newNode;
        } else {
            while(index++ < position) {
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            previous.next = newNode;
        }

        length++;

        return true;
    }

    this.removeAt = function (position) {
        if (position < 0 || position > length) {
            throw new Error("position is error.");
        }

        let current = head;
        let previous = null;
        let index = 0;

        if (position == 0) {
            head = current.next;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        length--;

        return current.element;
    }

    this.remove = function (ele) {
        let index = this.indexOf(ele);

        if (index === false) {
            return false;
        }

        return this.removeAt(index);
    }

    this.indexOf = function (ele) {
        let current = head;
        let index = 0;

        while(current) {
            if (current.element === ele) {
                return index;
            }

            index++;
            current = current.next;
        }

        return false;
    }

    this.isEmpty = function () {
        return this.size() == 0;
    }

    this.size = function () {
        return length;
    }

    this.toString = function () {
        let current = head;
        let listString = "";

        while(current) {
            listString += "," + current.element;
            current = current.next;
        }

        return listString.slice(1);
    }
}

module.exports = linkedList;