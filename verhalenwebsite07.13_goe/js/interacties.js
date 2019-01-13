/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


var button = document.querySelector('section > button');

button.addEventListener('click', function() {
  button.classList.toggle('block');
});


console.log("haaaay");