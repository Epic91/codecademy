// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = arr => {
    let sum = 0; // INITIALIZED AT 0
    
    // LOOPS STARTING AT THE END OF THE ARRAY
    for (let i = arr.length - 1; i >= 0; i--) {  
        // HOLDS THE REVERSED NUMBERS IN THE ARRAY
        let currentVal = arr[i]
        // IF THE CURRENTVAL HAS A REMAINDER OF 1, DOUBLE IT
        if((arr.length - 1 - i) % 2 === 1) {
            currentVal *= 2
            // IF THE CURRENTVAL IS GREATER THAN 9, SUBTRACT 9 FROM IT
            if (currentVal > 9) {
                currentVal -= 9
            }
        }
        // STORES ALL ADDED NUMBERS INSIDE OF THE PROVIDED ARRAY
        sum += currentVal
    }
    // RETURNS TRUE OR FALSE DEPENDING IF THE SUM IS DIVED BY 10 AND HAS A REMAINDER OF 0
    return sum % 10 === 0;
}

//TEST FUNCTION
// console.log(validateCred(invalid1))

const findInvalidCards = cards => {
    let invalid = []    // initialized empty array
    // ITERATES THE LENGHT OF THE ARRAY
    for(let i = 0; i < cards.length; i++) { 
        // HOLDS ALL NUMBERS IN THE ARRAYS
        let currentCred = cards[i] 
        // IF THE ARRAY PROVIDED IS NOT VALID IT GETS PUSHED INTO THE INVALID ARRAY
        if (!validateCred(currentCred)){
            invalid.push(currentCred)
        }
    }
    // RETURNS ARRAY OF INVALID CARDS
    return invalid
}

// TEST FUNCTION
// console.log([valid1, valid2, valid3, valid4, valid5])
// console.log([invalid1, invalid2, invalid3, invalid4, invalid5])
// console.log(batch)

const idInvalidCardCompanies = invalidNums => {
    const companies = [] // INITIALIZED EMPTY ARRAY
    // ITERATES THROUGH THE PROVIDED PARAMETER
    for(let i = 0; i < invalidNums.length; i++) {
        //CONDITIONAL ON THE ZEROTH INDEX OF THE ARRAY
        switch (invalidNums[i][0]) {
            case 3:
                // IF INSIDE THE COMPANIES ARRAY 'AMEX' DOESNT EXIST, INSERT AMEX INSIDE THE COMPANIES ARRAY
                if(companies.indexOf('Amex') === -1) {
                    companies.push('Amex')
                }
                break
            case 4:
                if(companies.indexOf('Visa') === -1) {
                    companies.push('Visa')
                }
                break
            case 5:
                if(companies.indexOf('Mastercard') === -1) {
                    companies.push ('Mastercard')
                }
                break
            case 6:
                if (companies.indexOf('Discorver') === -1) {
                    companies.push('Discover')
                }
                break
            default:
                console.log('Company not found')
        }
    }
    return companies
  }

  console.log(idInvalidCardCompanies([invalid3])); // Should print['visa']
  console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
  console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards


// To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
//Create a function that will convert invalid numbers into valid numbers.








/* NOTES:

CONFLICT:
- ALL VALID ARRAYS ARE COMING BACK INVALID BECAUSE THE MATH ISN'T ADDING UP CORRECTLY, THE CODE IS SIMPLY ADDING ONLY THE DOUBLED DIGITS UP.
RESOLUTION: 
INSIDE OF MY CONDITIONAL I STATED; IF THE INDEX INSIDE OF THE PROVIDED ARRAY IS DIVISIBLE BY 2 AND HAS A REMINDER OF 0 THEN IT SHOULD BE DOUBLED.

- ALL OF THE NUMBERS IN THE ARRAY ARE CURRENTLY BEING DOUBLED
RESOLUTION:
I WAS MUTATING THE ARRAYS, THEREFORE ALL OF THE NUMBERS INSIDE OF THE ARRAY WERE BEING MUTATED, 

*/