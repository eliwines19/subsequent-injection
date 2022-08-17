stringOfNums = "98676555533"

function subsequent(str) {

    // create array where string elements will be pushed once evaluated
    array = [];
    
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
                // if both even, push current element plus '*'
                array.push(current.toString(), '*')
            } else if (currentNumStatus == 'odd' && nextNumStatus == 'odd') {
                // if both off, push current element plus '-'
                array.push(current.toString(), '-')
            } else {
                // if they are not the same, just push the current element
                array.push(current)
            }
        } else {
            // even if next number is NaN, push the current element
            array.push(current)
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

console.log(subsequent(stringOfNums))