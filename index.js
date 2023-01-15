// MASTER CARD
const master =/^\d\5[1-5]{1}[0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/;
console.log(master);


//brief description of the regex pattern 

// ‘ ^ ‘  represents the starting of the Pattern.

// ‘ 5[1-5]{1} ‘ represents that the First digit of the card number must be 5 and the second digit can be within 1 to 5.

// ‘ [0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4} ‘ represents that the rest of the number can be within 0-9.

// ‘$’ represents the end of the pattern.



// VISA CARD
const visa=/^\d\4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{1}$/;
console.log(visa);

//brief description of the regex pattern 

// ‘ ^ ‘  is representing the starting of the Pattern.


// ‘ 4{1} ‘ is representing that the First letter must be 4.

// ‘ [0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4} ‘

// Above Represents the rest of the number can be within 0-9.

// ‘$’ represents the end of the pattern.


// AMERICAN EXPRESS CARD 
const express=/^\d\3[4|7]{1}[0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{3}$/;
console.log(express);

//brief description of the regex pattern 

// ‘ ^ ‘  is representing the starting of the Pattern.

// ‘ 3[4|7]{1} ‘ is representing that the First letter must be 3 and the second letter can be either 4 or 7.

// ‘ [0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{3}’ it  represents the rest of the number can be within 0-9.

// ‘$’ represents the end of the pattern.

