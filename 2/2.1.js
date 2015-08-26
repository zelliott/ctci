var Ctci = function() {};
var Node = function(value) {
  this.value = value;
  this.next=  null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype = {
  add: function(value) {
    if (this.head === null) {
      this.head = newNode(value);
      this.tail = this.head;
    } else {
      var temp =  new Node(value);
      this.tail.next = temp;
      this.tail = temp;
    }
  },

  remove: function() {
    if (this.tail !== null) {

    }
  }
};


Ctci.prototype.removeDups = function(list) {

};
