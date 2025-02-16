// Tạo hàm trả về số lượng giá trị "true" có trong một mảng.
// 1. countTrue([true, false, false, true, false]) ➞ 2
// 2. countTrue([false, false, false, false]) ➞ 0
// 3. countTrue([]) ➞ 0

// ---------------------------------------------------------
// [Cách 1] for i
function countTrue(arr) {
  let countTrue = 0;
  for (let index = 0; index < arr.length; index++) {
    if (String(arr[index]) === "true" && typeof arr[index] === "boolean") {
      countTrue++;
    }
  }
  return countTrue;
}

// ---------------------------------------------------------
// [Cách 2] forEach: không duyệt phần tử empty
// vd: tạo 1 arr có độ dài là 10, tuy nhiên không có phần tử thực tế
const empty_items = Array(10); // (empty x 10)
console.log(empty_items);
empty_items.forEach((item) => console.log(item)); // code not run

function countTrue_forEach(arr) {
  let countTrue = 0;
  // sử dụng toán tử 3 ngôi để so sánh
  arr.forEach((item) =>
    String(item) === "true" && typeof item === "boolean" ? countTrue++ : 0
  );
  return countTrue;
}

// ---------------------------------------------------------
// [Cách 3] While (vòng lặp vô hạn)
function countTrue_while(arr) {
  let countTrue = 0;
  let n = 0;
  while (n < arr.length) {
    if (String(arr[n]) === "true" && typeof arr[n] === "boolean") {
      countTrue++;
    }
    n++;
  }
  return countTrue;
}

// ---------------------------------------------------------
// [Cách 4] ES6 array functions => arrow function
// 1. Map
const countTrue_map = (arr) => {
  let countTrue = 0;
  arr.map((item) =>
    String(item) === "true" && typeof item === "boolean" ? countTrue++ : 0
  );
  return countTrue;
};
countTrue_map([true, true, false])

// 2. Filter
const countTrue_filter = (arr) => {
  const countTrue = arr.filter(
    (item) => String(item) === "true" && typeof item === "boolean"
  ); // return a list
  return countTrue.length;
};
