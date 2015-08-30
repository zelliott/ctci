var Heap = function(arr, options) {
  this.arr = [0];
  this.type = options.type || 'min';
  this.max = options.max || Infinity;

  if (arr) {
    this._heapify(arr);
  }
};

Heap.prototype = {
  _heapify: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
  },

  _swap: function(i, j) {
    var temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  },

  _swim: function(index) {
    var parent = Math.floor(index / 2);
    var minCondition = this.type === 'min' &&
      this.arr[index] < this.arr[parent];
    var maxCondition = this.type === 'max' &&
      this.arr[index] > this.arr[parent];

    if (minCondition || maxCondition) {
      this._swap(index, parent);
      this._swim(parent);
    }
  },

  // TODO: Refactor...
  _sink: function(index) {
    var leftChild = (index * 2);
    var rightChild = (index * 2) + 1;
    var that = this;
    var sinkCandidate;

    function shouldSink() {
      var rightChildValue;

      if (that.type === 'min') {
        rightChildValue = that.arr[rightChild] || Infinity;
        sinkCandidate = that.arr[leftChild] < rightChildValue ? leftChild : rightChild;
      } else {
        rightChildValue = that.arr[rightChild] || -Infinity;
        sinkCandidate = that.arr[leftChild] > rightChildValue ? leftChild : rightChild;
      }

      return ((that.type === 'min' && that.arr[index] > that.arr[sinkCandidate]) ||
        that.type === 'max' && that.arr[index] < that.arr[sinkCandidate]);
    }

    if (shouldSink()) {
      this._swap(index, sinkCandidate);
      this._sink(sinkCandidate);
    }
  },

  insert: function(value) {
    var index = this.arr.length;

    this.arr.push(value);
    this._swim(index);
  },

  remove: function() {
    var top;

    this._swap(1, this.arr.length - 1);
    top = this.arr.pop();
    this._sink(1);
    return top;
  },

  isEmpty: function() {
    return this.arr.length <= 1;
  },

  empty: function() {
    this.arr = [0];
  },

  size: function() {
    return this.arr.length - 1;
  }
};

function heapSort(arr) {
  var heap = new Heap(arr, {
    type: 'min'
  });
  var sorted = [];

  while (heap.size() > 0) {
    sorted.push(heap.remove());
  }

  return sorted;
}

console.log(heapSort([1, 3, 2]));
console.log(heapSort([6, 5, 4, 3, 2, 1]));
console.log(heapSort([7, 3, 5, 9, 2, 3, 1, 1, 5, 5, 10]));
