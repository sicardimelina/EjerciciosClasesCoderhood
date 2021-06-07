let array = [1, 2, 3, 4, 5, 6]

let slice = array.slice(1, 3)
console.log(slice)

const arr1 = [1, 2, 3];
arr1.forEach(function(element, index) {
    console.log(`En la posición ${index} se encuentra el elemento ${element}`)
})

const arr2 = arr1.map(function (element) {
    return element.toString();
    }
)

console.log(arr2)

const arr3 = [11, 2, 4, 20, 4, 10, 99, 1, 3]

const arr4 = arr3.filter(function (element) {
    return element > 10
    }
)
console.log(arr4)
