export default function stableSort(arr, cmp) {
  let stabilizedArr = arr.map((el, index) => [el, index]);
  let stableCmp = (a, b) => {
    let order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  }
  stabilizedArr.sort(stableCmp);
  return stabilizedArr.map(item => item[0]);
}