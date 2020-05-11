body = document.getElementById("maincontent");

// store the URL for the file we want to get info from
requestURL  = 'https://rmwhitnell.github.io/CTIS230assignments/dyes.json';
request = new XMLHttpRequest();  // build something that can go out and request files from the web
request.open('GET', requestURL); // build the GET request

request.responseType ='json';
request.send();  //send the GET request, but it takes some time to get back

// wait for the request to complete
request.onload = function() { // stop until the request is done
    myDyes = request.response; //this is the data, so let's store it in a variable
    console.log(myDyes);
    makeBody(myDyes);
}

function makeBody(jsonStuff) {
    theDyes =jsonStuff['dyes']; //Get the JSON object named dyes; 
    // Build the DOM
    for (i = 0; i < theDyes.length; i++) { //do the same thing for every dye in the list
        dyeDiv = document.createElement('div');
        dyenameH1 = document.createElement('h1');
        dyeImage = document.createElement('img');

        dyenameH1.innerHTML = theDyes[i].name;
        dyeImage.src = theDyes[i].bottleimage;
        dyeImage.alt = theDyes[i].alt;

        dyeDiv.appendChild(dyenameH1);
        dyeDiv.appendChild(dyeImage);

        body.appendChild(dyeDiv);
    }
}