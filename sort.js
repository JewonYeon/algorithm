function sort_bubble(array) {
  const length = array.length;
  let temp;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};


function selection_sort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let min_index = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }

    [array[i], array[min_index]] = [array[min_index], array[i]];
  }

  return array;
}
