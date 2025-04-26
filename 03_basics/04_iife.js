// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();           //dui ota iife lekhdaa semicolon use garne natra execute hudaina 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')





// -------------------------------IIFE----------------------------------
// 1. If you want to write two IIFE in single file then adding a semecolon after fumction is must to fuction end
// 2. some time there is issue with globle scope pollution with normal fuction so to avoid this issue we use IIFE.