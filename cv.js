// Get the elements we want to affect or access
ucdiv = document.getElementById("uctext");
reeddiv = document.getElementById("reedtext");
ucmapdiv = document.getElementById("uc");
ucmapframe = document.getElementById("ucmapframe");

// Add a mouseover listener to the text div
if (ucdiv) { // if the element "uctext" exists, then ucdiv will not be null, and if (ucdiv) basically return true
    ucdiv.addEventListener("mouseover", collegeOver); // this line will only run if ucdiv exists (is not null)
}
reeddiv.addEventListener("mouseover", reedCollegeOver);
//ucdiv.addEventListener("click", collegeOver);

function collegeOver() {
    ucmapdiv.style.visibility = "visible";
    ucmapframe.style.opacity = 1;
}

function reedCollegeOver() { //You can't have the same name for two different functions in JavaScript
    //stuff I want to do
}