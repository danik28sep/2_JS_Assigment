//// Problem No 1 ////
// function addnum(a){
//    return function num(b){
//         return b + a
//     }
// }

// let a = addnum(20);

// console.log(a(40))


//// Problem No 2 ////
// let arr = [1, 2, 3, 4, 5, 6]
// function searchArray(arr, val) {
//   if (arr.length === 0) {
//     return false;
//   }

//   if (arr[0] === val) {
//     return true;
//   }

//   return searchArray(arr.slice(1), val);
// }


// let Input = prompt("Enter a value");
// let val = Number(Input);

// let found = searchArray(arr, val);

// if (found) {
//   console.log(true);
// } else {
//   console.log(false);
// }

///// Problem No 3 /////
//// 2 method se keya function bana k aur without function ////

// function Para(text) {
//     let newPara = document.createElement("p");
    
//     newPara.textContent = text;

//     let body = document.querySelector("body");

//     document.body.appendChild(newPara);
//   }
  
// add("HI 2");

///// Problem 3 P2 /////

// let a = document.createElement("P");

// document.body.appendChild(a);

// document.querySelector("p").innerHTML = "HI";

//// Problem No 4 ////

// function addLi() {
//     let newLi = document.createElement("li");
    
//     let body = document.querySelector("body");

//     document.body.appendChild(newLi);
//   }
  
// addLi();

//// Problem No 5 ////

// function changeBackground(element, color){
//   element.style.backgroundColor = color;
// }

// let a = document.getElementById("container")

// changeBackground(container, "red")

//// Problem No 6 ////

// function saveLocalStorage(key, obj) {
//   localStorage.setItem(key, JSON.stringify(obj));
// }

// let aObj = { name: "Dani", age: 19 };
// saveLocalStorage("aKey", aObj);

//// Problem No 7 ////

// function getLocalStorage(key) {
//   let obj = localStorage.getItem(key);
//   return JSON.parse(obj);
// }
