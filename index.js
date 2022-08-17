stringOfNums = "98676555533"

function subsequent(str) {

    array = [];
    
    for (var i = 0; i < str.length; i++) {
        var current = parseInt(str[i], 10)
        var next = parseInt(str[i+1], 10)

        var currentNumStatus = isEvenOrOdd(current)
        var nextNumStatus = isEvenOrOdd(next)

        if (!isNaN(next)) {
            if (currentNumStatus == 'even' && nextNumStatus == 'even') {
                array.push(current.toString(), '*')
            } else if (currentNumStatus == 'odd' && nextNumStatus == 'odd') {
                array.push(current.toString(), '-')
            } else {
                array.push(current)
            }
        } else {
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