var Ctci = function() {};

Ctci.prototype.findSubsets = function(set) {
  var subsets = [[]];

  // For each element in the set...
  for (var i = 0; i < set.length; i++) {

    // Duplicate the current subsets
    var subsetsCopy = [];

    // For each of the current subsets, push the new element
    // into them.  Also build the subset copy.
    for (var j = 0; j < subsets.length; j++) {
      subsetsCopy.push(subsets[j].slice());
      subsets[j].push(set[i]);
    }

    // Finally, combine the unmodified subsets with the new
    // subsets to double the count of subsets;
    subsets = subsets.concat(subsetsCopy);
  }

  return subsets;
};

module.exports = new Ctci();
