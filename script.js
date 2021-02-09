// задание 1

let arr = []
for(let i = 1; i <= 5; i++) {
    arr.push(i);
}
console.log(arr);

// задание 2

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] > -10 && arr2[i] < -3) {
	console.log(arr2[i]);   
    }
}

// задание 3

let result = 0;
let arr3 = [];
let i = 23;
while(i < 57) {
    i++;
    arr3.push(i);
    result += i;
}
console.log(arr3);
console.log(result);


// задание 4

let arr4 = ['10', '20', '30', '50', '235', '3000'];
console.log(arr4.filter(num => ['1','2','5'].includes(num.toString()[0])));

// задание 5

let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arr5.length; i++) {
    if (i == 5 || i == 6) {
    document.write (arr5[i].bold() + ' ');
    } else {
        document.write (arr5[i] + ' ');
    }
    }

// задание 6

let arr6 = ['Knowing', 'English', 'Is', 'Important', 'For', 'Every', 'Software'];
arr6.push('Developer');
console.log(arr6, arr6.length);
let array6 = arr6.slice(7);
console.log(array6);

// задание 7

let arr7 = [];
let check = true;
while(check) {
    let p = prompt ('Введите любое число', 0);
    if(p === '') {
        check = false;
    } else if(p === null || isNaN(p)){
        check = false;
    } else {
        arr7.push(Number(p));
    }
}
console.log(arr7);
arr7.sort(function(a, b) { 
     return a - b;
})
console.log(arr7);

// задание 8

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
arr8.sort(function(a, b) { 
    return a - b;
})
console.log(arr8);
let arr8Reverse = arr8.reverse(arr8);
console.log(arr8Reverse);

// задание 9

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
console.log(arr9);
count = 0, i = arr9.length;
while (i--) {
    if (typeof arr9[i] === "undefined")
        count++;
}
console.log(count);

// задание 10

let arr10 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
let sumArr10 = (arr10[3] + arr10[4] + arr10[5] + arr10[6] + arr10[7] + arr10[8]);
console.log(sumArr10);

// задание 11

let h = prompt('Введите высоту треугольника');

var e = 0,
    j = 0;
var space = "",
    caret = "";

while (e < h) {
  space = "";
  caret = "";
  for (j = 0; j < h - e; j++) space += " ";
  for (j = 0; j < 2 * e + 1; j++) caret  += "^";
  console.log(space + caret);
  e++;
}
