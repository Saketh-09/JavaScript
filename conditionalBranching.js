let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
}
if (0) { // 0 is falsy
}if (1) { // 1 is truthy

}
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {

}

let accessAllowed = (age > 18) ? true : false;

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

alert( message );

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
    alert('Right!') : alert('Wrong.');

