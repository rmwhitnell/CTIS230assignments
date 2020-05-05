// Step 0: What do we want to do?
// Change the color of the text when we move over it; change it back when we move off of it

// Step 1: Get the element we want to listen to and affect and store it away for use
ourText = document.getElementById("text");
ourButton = document.getElementById("mybutton");
theTextInput = document.getElementById("myinput");
theImgDiv = document.getElementById("card");
theImage = document.getElementById("cardimage");
theBigImage = document.getElementById("largeview");
cardShown = false;


// Each page is called "document"--we want to ask document to do something. That something is get the HTML node with the id "text"
// Then, we'll give that element the name "ourText"

// Step 2: We want to tell ourText that we when a mouse moves over it, it should change its color. We do this by telling ourText to use a specific event listener

ourText.addEventListener("mouseover", onMouseOver);
ourText.addEventListener("mouseout", onMouseOut);
ourButton.addEventListener("click", onClick);
theTextInput.addEventListener("blur", changeText); //blur is when the textfield loses focus; user clicks or tabs out of it
theTextInput.addEventListener("change", changeText); //change is when user hits enter
theImgDiv.addEventListener("click", makeBigImage);
theBigImage.addEventListener("click", hideBigImage);
theBigImage.innerHTML = "";
document.addEventListener("keyup", onKeyUp);

// We've now told ourText that it should use an event listener named onMouseOver whenever the mouseover event occurs--Table 21-2, pg. 614

// Step 3: Write the event listener

function onKeyUp(event) {
    hideBigImage();
    console.log("key released is " + event.code);
}

function hideBigImage() {
    theBigImage.classList.add("dontshow"); //tell theBigImage that it's part of the dontshow class
    theBigImage.innerHTML = "";
}

function makeBigImage() {
    // make a new img element to add to our section element
    if (theBigImage.innerHTML == "") {
        bigimage = document.createElement("img");
        bigimage.src = "2_of_clubs.png";
        theBigImage.appendChild(bigimage); //add the img element to the section
        theBigImage.classList.remove("dontshow"); //tell the section that it's no longer part of the dontshow class
    }
}

function expandImage() {
    if (theImgDiv.style.position == "") {// if the div has its original value of position
        theImgDiv.style.position = "absolute";
        theImgDiv.style.top = "300";
        theImgDiv.style.left = "300";
        theImage.style.width = "auto";
        theImage.src = "2_of_diamonds.png";
    } // auto means what this width property would do if there was not a stylesheet
    else { // make it small again
        theImgDiv.style.position = "";
        theImage.style.width = "100";
    }
}

function changeText() {
    // get the text that the user entered
    newtext = theTextInput.value;
    // use that text to change text on the web page
    ourText.innerHTML = newtext;
    theTextInput.value = "";
}

function onClick() {
    if (cardShown == false) {
        theImgDiv.style.display = "block";
        ourText.innerHTML = "I clicked the button";
        cardShown = true;
    } else {
        theImgDiv.style.display = "none";
        ourText.innerHTML = "<em>Stopped showing the card</em>"
        cardShown = false;
    }
    
}

function onMouseOut() {
    // If we want to return to the default property value, use "" 
    ourText.style.color = "";
    ourText.style.fontSize = "";
}

function onMouseOver() {
    ourText.style.color = "green";
    ourText.style.fontSize = "1.5em";
}