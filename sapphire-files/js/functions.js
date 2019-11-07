
/*
    *** SYNTAX: window.open(URL, name, specs, replace)

    *** Open about:blank page in new window/tab ***
    var myWindow = window.open("", "", "width=200,height=100");

    *** Replace current window with a new window ***
    var myWindow = window.open("", "_self");
    myWindow.document.write("<p>I replaced the current window.</p>");

    *** Open new window called "MsgeWindow", and write some text ***
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");

    *** Open a new window and control appearance  ***
    window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

    *** Open multiple tabs ***
    window.open("http://www.google.com/", "width=);
    window.open("https://www.w3schools.com/");

    *** Open new window, use close() to close the new window ***
    function openWin() {
    myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window

    function closeWin() {
    myWindow.close();   // Closes the new window
*/


//var gameFive = gameFive.open("/* URL Placeholder */", "_self"); 

function openHome() {
    var homePage = homePage.open("index.html", "_self")
}   // END openHome()

/* Game one open/close */
function openGameOne() {       // ADD game url
    var gameOne =  gameOne.open("Gunslinger.html", "_self");
}   // END openGameOne()

/* function closeGameOne():
    gameOne.close(); */

/* Game two open/close */
function openGameTwo() {
    var gameTwo = gameTwo.open("/* URL Placeholder */", "_self");
}         // ADD game url
    

/* function closeGameTwo(){
    gameTwo.close();
}
    */

/* Game threeopen/close */
function openGameThree() {
    var gameThree = gameThree.open("/* URL Placeholder */", "_self");
}         // ADD game url
    

/* function closeGameThree() {
    gameThree.close(); 
    
}
*/

/* Game four open/close */
function openGameFour() {
    var gameFour = gameFour.open("/* URL Placeholder */", "_self");
}         // ADD game url
    

/* function closeGameFour() {
    gameFour.close(); 
}    
    */

/* Game five open/close 
function openGameFive() {
}            

function closeGameFive() {
    gameFive.close(); 
}
*/
