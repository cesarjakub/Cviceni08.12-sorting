let a = [8,6,4,6,9,3,0];

//#region quickSort
//quickSort
function quicksort(arr){
    if(arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(pivot, quicksort(right));
}

console.log("quickSort");
console.log(quicksort(a));
//#endregion

//#region mergeSort
//mergeSort
function mergesort(ar){
    if(ar.length === 1){
        return ar;
    }

    const middle = Math.floor(ar.length / 2);
    const l = ar.slice(0, middle);
    const r = ar.slice(middle);

    const sordetLeft = mergesort(l);
    const sordetRight = mergesort(r);

    return merge(sordetLeft, sordetRight);

}

function merge(le, ri){
    const result = [];

    while(le.length && ri.length){
        if(le[0] <= ri[0]){
            result.push(le.shift());
        } else {
            result.push(ri.shift());
        }
    }
    return result.concat(le, ri);
}
 
console.log("mergeSort");
console.log(mergesort(a));

//#endregion

const cislo = document.querySelector("#guessField");
const sort = document.querySelector("#sort")
const joe = document.querySelector("#joe");

let pole = [];

function addToPole() {
    pole = cislo.value.split(",").map(Number);
    joe.innerHTML = "setříděné pole: "+mergesort(pole);
}
sort.addEventListener("click", addToPole);


let names = ["zuzana", "ondra", "jirka", "kuba"]
console.log(names.sort());