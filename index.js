function isPrime(n) {
    if (n === 1 || n === 0) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

function allPrimes(n) {

    let res = []

    for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && isPrime(i)) {
            res.push(i)
        }
    }

    return res
}

function fib(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }

    return fib(n-1) + fib(n-2)
}

function gcd(a, b) {

    let max = Math.max(a, b)
    let min = Math.min(a, b)

    if (max % min === 0) {
        return min
    }

    let GCD = 1

    for (let i = 2; i < max; i++) {
        if (a % i === 0 && b % i === 0 && i < min ) {
            GCD = i
            console.log(`New GCD: ${GCD}`)
        }

    }

    return GCD

}

function fancyGCD(a, b) {
    if (b == 0) {
        return a
    }
    else {
        return fancyGCD(b, a%b)
    }
}

function removeDuplicates(arr) {

    let res = []

    for (let i = 0; i < arr.length; i++) {
        
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}

function mergeSortedArray(arr1, arr2) {
    let index0 = 0
    let index1 = 0

    let n = arr1.length + arr2.length
    let res = []

    for (let i = 0; i < n; i++) {
        if (arr1[index0] < arr2[index1]) {
            res[i] = arr1[index0]
            index0++
        }
        else {
            res[i] = arr2[index1]
            index1++
        }
    }

    return res
}

function swapWithoutTemp(a, b) {

    a = a + b
    b = a - b
    a = a - b

    return [a, b]
}

function stringReverse(str) {
    let res = ""
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}

function recursiveReverse(str) {
    if (str === "") {
        return ""
    }
    else {
        console.log((str.substr(1)))
        return recursiveReverse(str.substr(1)) + str.charAt(0)
    }
}


String.prototype.reverse = function () {
    if (!this || this.length < 2) return this

    return this.split('').reverse().join('')
}

function reverseWords(str) {
    let myArr = str.split(' ')

    for (let i = 0; i < myArr.length; i++) {
        myArr[i] = myArr[i].reverse()
    }
    
    return myArr.join(' ')
}

function reverseWordOrder(str) {
    let rev = []
    let wordLength = 0

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ' || i === 0) {
            rev.push(str.substr(i, wordLength + 1))
            wordLength = 0
        }
        else {
            wordLength++
        }
    }

    return rev.join(' ')
}

function firstNonRepeatingChar(str) {

    let length = str.length;
    let char
    let charCount = {}
    let newStr = []
    for (let i = 0; i < length; i++) {
        char = str[i].toLowerCase()
        if(charCount[char]) {
            charCount[char]++
        }
        else {
            charCount[char] = 1
        }
    }
    console.log(charCount)

    for (let j in charCount) {
        if (charCount[j] == 1) {
            newStr.push(j)
        }
    }

    return newStr

}

function rand5() {
    return 1 + Math.random() * 4
}

function rand7() {
    return 5 + rand5() / 5 * 2
}

function findMissing(arr) {
    
    // Add one to N because our expected sum contains  sum of 100 elements while actual sum will be sum of 99
    let n = arr.length + 1
    let expectedSum = n * (n+1) / 2
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return expectedSum - sum

}

let arr = [7, 2, 1, 3, 4, 5, 8]
let target = 9


function twoSum(arr, target) {

    let compliments = new Map()

    for (let i = 0; i < arr.length; i++) {

        let compliment = target - arr[i]

        if (compliments.has(compliment)) {
            return [compliments.get(compliment), i]
        }
        else {
            compliments.set(compliment, i)
        }
    }

}

function countZeros(n) {

    let count = 0
    
    while (n > 0) {
        let digit = n % 10
        
    }
    return count
}

function topSum(arr) {

    let biggest = Math.max(arr[0], arr[1])
    let second = Math.min(arr[0], arr[1])
    
    if (arr.length < 2) {
        return null
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > biggest) {
            second = biggest
            biggest = arr[i]
        }
        else if (arr[i] > second) {
            second = arr[i]
        }
    }

    return [biggest, second]
}

function subStringFinder(str, subStr) {
    let index = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === subStr[i]) {

        }
    }
}

function isTwoPassed() {
    args = []
    args = args.slice.call(arguments)
    return args.includes(2)
}

function getMax(arr) {
    return Math.max.apply(null, arr)
}

function log() {
    let args = Array.prototype.slice.call(arguments)
    args.unshift('(app)')
    console.log(args)
    console.log.apply(console, arguments)
}

let User = {
    count: 1,

    getCount: function() {
        return this.count
    }
}

const nums = [3, 5, 6, 82, 1, 4, 3, 5, 82]
const result = nums.reduce((tally, amount) => {
    tally[amount] ? tally[amount]++ : tally[amount] = 1
    return tally
}, {})

console.log(result)
console.log(User.getCount())
let unboundFunction = User.getCount
console.log(unboundFunction())
let boundFunction = unboundFunction.bind(User)
console.log(boundFunction())

log('Arg1', 'Arg2', 'Arg3')
console.log(getMax([1, 2,34,5,6,7 ]))
console.log(isTwoPassed(1, 4, 5, 6))
console.log(topSum([2,3,4,1,5,23,6,3,12,3454]))