// Step 0: What do we want to do?
// Change the color of the text when we move over it; change it back when we move off of it

// Step 1: Get the element we want to listen to and affect and store it away for use
ourText = document.getElementById("text");
ourButton = document.getElementById("mybutton");
theTextInput = document.getElementById("myinput");

// Each page is called "document"--we want to ask document to do something. That something is get the HTML node with the id "text"
// Then, we'll give that element the name "ourText"

// Step 2: We want to tell ourText that we when a mouse moves over it, it should change its color. We do this by telling ourText to use a specific event listener

ourText.addEventListener("mouseover", onMouseOver);
ourText.addEventListener("mouseout", onMouseOut);
ourButton.addEventListener("click", onClick);
theTextInput.addEventListener("blur", changeText); //blur is when the textfield loses focus; user clicks or tabs out of it
theTextInput.addEventListener("change", changeText); //change is when user hits enter

// We've now told ourText that it should use an event listener named onMouseOver whenever the mouseover event occurs--Table 21-2, pg. 614

// Step 3: Write the event listener

function changeText() {
    // get the text that the user entered
    newtext = theTextInput.value;
    // use that text to change text on the web page
    ourText.innerHTML = newtext;
}

function onClick() {
  ourText.innerHTML = "I clicked the button";
}

function onMouseOut() {
  // If we want to return to the default property value, use "" 
  ourText.style.color ="";
  ourText.style.fontSize = "";
}

function onMouseOver() {
  ourText.style.color = "green"; 
  ourText.style.fontSize = "1.5em";
}