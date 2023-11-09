//  [1,2,3], [2,3,4], [3,4,5] => [1,5]
const arr = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];
const distinct = (n) => {
  var newArr = [];
  n.map((num, index) => {
    for (var i = 0; i < num.length; i++) {
      newArr.push(num[i]);
    }
  });
};
distinct(arr);
