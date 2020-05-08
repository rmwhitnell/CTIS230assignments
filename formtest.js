mytext=document.getElementById("mytext");
mycheck=document.getElementById("mycheck");
mypassword=document.getElementById("mypassword");

function formfunction() {
    // we can write a completely new page to send back to the browser
    console.log(mytext.value);
    document.write("<h1>");
    document.write(mytext.value);
    document.write("</h1>");
}