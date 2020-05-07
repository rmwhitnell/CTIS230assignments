// Get the elements we want to affect or access
ucdiv = document.getElementById("uctext");
ucmapdiv = document.getElementById("uc");
ucmapframe = document.getElementById("ucmapframe");

// Add a mouseover listener to the text div
ucdiv.addEventListener("mouseover", collegeOver);
//ucdiv.addEventListener("click", collegeOver);

function collegeOver() {
    ucmapdiv.style.visibility = "visible";
    ucmapframe.style.opacity = 1;
}