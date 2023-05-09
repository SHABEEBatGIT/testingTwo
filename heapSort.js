function heapSort(arr) {
  // build max heap
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  // extract elements from heap one by one
  for (let i = arr.length - 1; i > 0; i--) {
    // swap root (max element) with the last element
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // maintain max heap property on the remaining heap
    heapify(arr, 0, i);
  }

  return arr;
}

function heapify(arr, i, n) {
  let largest = i; // initialize largest as root
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // if left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // if right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // if largest is not root
  if (largest != i) {
    // swap root with largest element
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // recursively heapify the affected sub-tree
    heapify(arr, largest, n);
  }
}
