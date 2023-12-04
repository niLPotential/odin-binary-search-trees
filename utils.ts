export function checkDuplicate(value: number, index: number, array: number[]) {
  return index === 0 || value !== array[index - 1];
}

export function checkSorted(arr: number[]) {
  return arr.every(
    (value, index, array) => index === 0 || value > array[index - 1]
  );
}
