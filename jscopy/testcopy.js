// Adapted from http://www.javascriptkit.com/javatutors/copytoclipboard.shtml




copybutton = document.getElementById("listcopy");
console.log(copybutton);
copybutton.addEventListener("click", copystuff);

function copystuff() {
    var copyList = document.getElementById("liststuff");
    selectElementText(copyList); // select the element's text we wish to read
    //var listtext = getSelectionText(); // read the user selection
    copySelectionText();
}

function selectElementText(el) {
    var range = document.createRange(); // create new range object
    range.selectNodeContents(el); // set range to encompass desired element text
    var selection = window.getSelection(); // get Selection object from currently user selected text
    selection.removeAllRanges(); // unselect any user selected text (if any)
    selection.addRange(range); // add range to Selection object to select it
}

function getSelectionText(){
    var selectedText = ""
    if (window.getSelection){ // all modern browsers and IE9+
        selectedText = window.getSelection().toString()
    }
    return selectedText
}

function copySelectionText(){
    var copysuccess // var to check whether execCommand successfully executed
    try{
        copysuccess = document.execCommand("copy") // run command to copy selected text to clipboard
    } catch(e){
        copysuccess = false
    }
    return copysuccess
}