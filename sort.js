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

function insertion_sort(array) {
  for (let i = 0; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;

    while(left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = cur;
  }

  return array;

  // for (let i = 1; i < array.length; i++) {
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (array[j + 1] < array[j]) {
  //       [array[j + 1], array[j]] = [array[j], array[j + 1]];
  //     } else {
  //       break;
  //     }
  //   }
  // }
  // return array;
}

function quick_sort(arr) {

  function recursion(array, start, end) {
    if (start >= end) {
      return;
    }
  
    pivot = start;
    left = start + 1;
    right = end;
  
    while(left <= right) {
      // 피벗보다 큰 데이터를 찾을때까지 반복
      while(left <= end && array[left] <= array[pivot]) {
        left += 1;
      }
      // 피벗보다 작은 데이터를 찾을때까지 반복
      while(right > start && array[right] >= array[pivot]) {
        right -= 1;
      }
      // 엇갈릴 경우 작은 데이터와 pivot을 교환한다.
      if (left > right) {
        [array[right], array[pivot]] = [array[pivot], array[right]];
      } else {
      // 엇갈리지 않을 경우 작은 데이터와 큰 데이터를 교체한다.
        [array[left], array[right]] = [array[right], array[left]];
      }
    }
  
    // 분할 이후, 왼쪽 부분과 오른쪽 부분에서 각각 정렬을 수행한다.
    recursion(array, start, right - 1);
    recursion(array, right + 1, end);
  }

  recursion(arr, 0, arr.length - 1);
  return arr;
}

function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const sorted_left = quick_sort(left);
  const sorted_right = quick_sort(right);
  return [...sorted_left, pivot, ...sorted_right];
}

function count_sort(arr) {
  const k = Math.max(...arr);
  const count = Array.from({ length: k + 1 }, () => 0);
  const result = [];

  // 숫자의 개수를 저장
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  // 누적합 : 인덱스 역할
  for (let i = 0; i < k; i++) {
    count[i + 1] += count[i];
  }
  // 누적합을 바탕으로 숫자를 결과값에 넣는다.
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], count[arr[i]] - 1);
    result[count[arr[i]] - 1] = arr[i];
    count[arr[i]] -= 1;
  }

  return result;
}
