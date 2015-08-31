var Ctci = function() {};

function bucketDatum(buckets, datum) {
  if (datum.length === 0) {
    if (typeof buckets.number === 'undefined') {
      buckets.number = 1;
    } else {
      buckets.number = buckets.number + 1;
    }
    return;
  }

  var ch = datum.charAt(0);

  if (typeof buckets[ch] === 'undefined') {
    buckets[ch] = {};
  }

  bucketDatum(buckets[ch], datum.slice(1, datum.length));
}

// FIXME: This function currently does absolutely nothing.  Like it takes
// the array of strings to be sorted and returns a new array of strings to be
// sorted.  But it's pretty cool how it does it.  :\
Ctci.prototype.sortData = function(data) {
  var buckets = {};

  // Bucket the datum of each string
  for (var i = 0; i < data.length; i++) {
    var datum = data[i];
    bucketDatum(buckets, datum);
  }

  // We have the bucket data structure assembled,
  // now we just need to recurse through and print out the sorted strings.
  var result = [];


  function assembleBucketData(buckets, assembled) {
    var bucketKeys = Object.keys(buckets);

    // If we're at the end
    if (bucketKeys[0] === 'number') {
      for (var j = 0; j < buckets[bucketKeys[0]]; j++) {
        result.push(assembled);
      }
      return;
    }

    for (var i = 0; i < bucketKeys.length; i++) {
      var singleBucket = buckets[bucketKeys[i]];

      assembleBucketData(singleBucket, assembled + bucketKeys[i]);
    }
  }

  assembleBucketData(buckets, '');

  return result;
};

module.exports = new Ctci();
