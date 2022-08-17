stringOfNums = "21462675756"

function subsequent(str) {
    // split str into array
    array = str.split("")
    
    // create a loop that compares the next value in the array to the current value
    for (var i = 0; i < array.length; i++) {
        // define current element and next element
        var current = parseInt(array[i], 10)
        var next = parseInt(array[i+1], 10)

        // find if numbers are even or odd
        var currentNumStatus = isEvenOrOdd(current)
        var nextNumStatus = isEvenOrOdd(next)

        // // if both are even, insert * between the two elements
        // // if both are odd, insert - between the two elements

        if (!isNaN(next)) {
            if (currentNumStatus == 'even' && nextNumStatus == 'even') {
                insert(array, i+1, '*')
            } else if (currentNumStatus == 'odd' && nextNumStatus == 'odd') {
                insert(array, i+1, '-')
            }
        }
    }

    return array.join("")

}

function isEvenOrOdd(num) {
    if ((num % 2) == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

const insert = (arr, index, newItem) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
]