// ES6 문법은 아니지만, 리액트에서 많이 사용하는 상항 연산자

let person = {
  name: "seungho",
  age: 20,
};

// 조건문
// person이라는게 존재 한다면 person.name, 없다면 '없다' (if ~ else)

if (person) {
  console.log(person.name);
} else {
  console.log("없다.");
}

person ? console.log(person.name) : console.log("없다.");

if (person.age > 18) {
  console.log("성인 입니다");
} else {
  console.log("미성년자 입니다");
}

console.log(person.age > 18 ? "성인 입니다." : "미성년자 입니다");

let arr = [1, 2, 3];
if (arr.length > 5) {
  console.log("길다");
} else {
  console.log("짧다");
}

console.log(arr.length > 5 ? "길다" : "짧다");

if (person.age > 65) {
  console.log("노인입니다");
} else if (person.age < 18) {
  console.log("미성년자 입니다");
} else {
  console.log("18세이상 성인입니다.");
}

console.log(
  person.age > 65
    ? "노인입니다."
    : person.age < 18
    ? "미성년자 입니다"
    : "18세이상 성인입니다."
);

let num1 = 5,
  num2 = 15,
  num3 = 525;

console.log(
  num1 > num2
    ? "num1>num2"
    : num2 > num3
    ? "num2>num3"
    : "숫자가 같거나 num3이 가장 크다"
);

console.log(person.name ? person.name : "이름이 없다.");
console.log(person.name == "" ? "이름이 없다" : "이름" + person.name);
