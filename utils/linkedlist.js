var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype = {
  add: function(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      var temp =  new Node(value);
      this.tail.next = temp;
      this.tail = temp;
    }
  },

  remove: function() {
    var node = this.head;

    while (node.next !== this.tail) {
      node = node.next;
    }

    node.next = null;
    this.tail = node;
  }
};

module.exports = {
  linkedlist: LinkedList,
  node: Node
};
