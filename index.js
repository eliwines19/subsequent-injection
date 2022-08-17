stringOfNums = "21462675756"

function subsequent(str) {
    
    // create a loop that compares the next value in the array to the current value
    for (var i = 0; i < str.length; i++) {
        // define current element and next element
        var current = parseInt(str[i], 10)
        var next = parseInt(str[i+1], 10)

        // find if numbers are even or odd
        var currentNumStatus = isEvenOrOdd(current)
        var nextNumStatus = isEvenOrOdd(next)

        // // if both are even, insert * between the two elements
        // // if both are odd, insert - between the two elements
        if (!isNaN(next)) {
            if (currentNumStatus == 'even' && nextNumStatus == 'even') {
                console.log(str.slice(0, i+1) + '*' + str.slice(i+1))
            } else if (currentNumStatus == 'odd' && nextNumStatus == 'odd') {
                console.log(str.slice(0, i+1) + '*' + str.slice(i+1))
            }
        }
    }

    return str

}

function isEvenOrOdd(num) {
    if ((num % 2) == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

console.log(subsequent(stringOfNums))