// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("secretString", () => {
    it("takes in a string and returns a string with a coded message", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(secretString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(secretString(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(secretString(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//   FAIL  ./code-challenges.test.js
//   secretString
//     ✕ takes in a string and returns a string with a coded message (1 ms)

//   ● secretString › takes in a string and returns a string with a coded message

//     ReferenceError: secretString is not defined



// b) Create the function that makes the test pass.
/* 
  PSEUDOCODE
    - create a function named secretString
    - input: a string
    - process: 
        - make empty string variable
        - set letter variable to index of string
        - take string, iterate over string to look for specific characters: a, e, i, o, 
        - if strings are equal to those characters, replace them with 4, 3, 1, 0
    - output: words with converted strings replaced for those letters
*/

const secretString = (string) => {
    let newString = ""
    for(let index = 0; index < string.length; index++) {
        let letter = string[index]
        if(letter === 'a') {
            newString += "4"
        } else if(letter === 'e' || letter === 'E') {
            newString += 3
        } else if(letter === 'i') {
            newString += '1'
        } else if(letter === 'o') {
            newString += '0'
        } else {
            newString += letter
        }
    }
    return newString
}

// PASS  ./code-challenges.test.js
// secretString
//   ✓ takes in a string and returns a string with a coded message (3 ms)





// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("containsLetter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(containsLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(containsLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//   FAIL  ./code-challenges.test.js
//   secretString
//     ✓ takes in a string and returns a string with a coded message (3 ms)
//   containsLetter
//     ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//   ● containsLetter › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//     ReferenceError: containsLetter is not defined


// b) Create the function that makes the test pass.
/*
  PSEUDOCODE
    - create a function named containsLetter
    - input: an array
    - process: 
        - create function
        - set empty array variable
        - use .includes to check for string in array
        - use .toLowerCase so uppercase letters don't mess it up
        - use iteration method for
        - if array includes letter at index, push what is at that index to empty array variable
    - output: new array
*/

const containsLetter = (array, letter) => {
    newArray = []
    for(let index = 0; index < array.length; index++) {
        if(array[index].toLowerCase().includes(letter.toLowerCase())) {
            newArray.push(array[index])
        }
    }
    return newArray
}

// PASS  ./code-challenges.test.js
// secretString
//   ✓ takes in a string and returns a string with a coded message (2 ms)
// containsLetter
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it('takes in an array of 5 numbers and determines whether or not the array is a "full house"', () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
    })
  })

//   FAIL  ./code-challenges.test.js
//   secretString
//     ✓ takes in a string and returns a string with a coded message (4 ms)
//   containsLetter
//     ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (2 ms)
//   fullHouse
//     ✕ takes in an array of 5 numbers and determines whether or not the array is a "full house" (1 ms)

//   ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a "full house"

//     ReferenceError: fullHouse is not defined



// b) Create the function that makes the test pass.
/* 
 PSEUDOCODE
  - create a function named fullHouse
  - input: array
  - process:
        take in array
        set empty object to keep track of how many times each number appears in the input array, key is the number, and the value is the number of times the number appears. 
        iterate over array by using a for..of loop to add counts to the counts object
        declare hasPair variable to false
        declare hasThreeOfAKind variable to false
        loop over counts object.values to see if the count of a number is 2 which is a pair, or 3 which is three of a kind.
        if array is has threeOfAKind and hasPair, return true
  - output: boolean
*/
const hand1 = [5, 5, 5, 3, 3]

const fullHouse = (array) => {
    const counts = {}
    for(const num of array) {
        if (counts[num]) {
            counts[num]++
        } else {
            counts[num] = 1
        }
    }

    let hasPair = false
    let hasThreeOfAKind = false
    for (const count of Object.values(counts)) {
        if (count === 2) {
            hasPair = true
        } else if (count === 3) {
            hasThreeOfAKind = true
        }
    }
    return hasPair && hasThreeOfAKind
}

// PASS  ./code-challenges.test.js
// secretString
//   ✓ takes in a string and returns a string with a coded message (2 ms)
// containsLetter
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a "full house" (1 ms)