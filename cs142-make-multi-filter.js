function cs142MakeMultiFilter(originalArray) {
  var currentArray = originalArray;
  function arrayFilter(filterCriteria, callback) {
    if (!filterCriteria) {
      return currentArray;
    }
    currentArray = currentArray.filter(filterCriteria);
    if (callback) {
      callback.call(originalArray, currentArray);
    }
    return arrayFilter;
  }
  return arrayFilter;
}
