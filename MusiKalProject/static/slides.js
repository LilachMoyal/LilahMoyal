/*----Switch Pictures - index Page-----*/

/*----Rehearsals----*/
setInterval(function() {

// Set the initial image
var imgElement = document.getElementById("slide1");
imgElement.src = "../static/Images/Rehearsals1.png";

    // Get the current image's src attribute
    var currentSrc = imgElement.getAttribute("src");
    
    // Determine the next image to show based on the current image
    var newSrc;
    if (currentSrc === "../static/Images/Rehearsals1.png") {
    newSrc = "../static/Images/Rehearsals2.png";
    } else if (currentSrc === "../static/Images/Rehearsals2.png") {
    newSrc = "../static/Images/Rehearsals3.png";
    } else {
    newSrc = "../static/Images/Rehearsals1.png";
    }
    
    // Update the src attribute with the new image
    imgElement.src = newSrc;
}, 2500); // Change the image every 5 seconds (5000 milliseconds)


/*----Find band----*/
setInterval(function() {
    
// Set the initial image
var imgElement1 = document.getElementById("slide2");
imgElement1.src = "../static/Images/FindBand1.png";

    // Get the current image's src attribute
    var currentSrc = imgElement1.getAttribute("src");
    
    // Determine the next image to show based on the current image
    var newSrc1;
    if (currentSrc === "../static/Images/FindBand1.png") {
    newSrc1 = "../static/Images/FindBand2.png";
    } else if (currentSrc === "../static/Images/FindBand2.png") {
    newSrc1 = "../static/Images/FindBand3.png";
    } else {
    newSrc1 = "../static/Images/FindBand1.png";
    }
    
    // Update the src attribute with the new image
    imgElement1.src = newSrc1;
}, 2500); // Change the image every 5 seconds (5000 milliseconds)



// Set the initial image
var imgElement3 = document.getElementById("slide3");
imgElement3.src = "../static/Images/MusicLessons1.png";

/*----Music Lessons----*/
setInterval(function() {
    // Get the current image's src attribute
    var currentSrc = imgElement3.getAttribute("src");
    
    // Determine the next image to show based on the current image
    var newSrc3;
    if (currentSrc === "../static/Images/MusicLessons1.png") {
    newSrc3 = "../static/Images/MusicLessons2.png";
    } else if (currentSrc === "../static/Images/MusicLessons2.png") {
    newSrc3 = "../static/Images/MusicLessons3.png";
    } else {
    newSrc3 = "../static/Images/MusicLessons1.png";
    }
    
    // Update the src attribute with the new image
    imgElement3.src = newSrc3;
}, 2500); // Change the image every 5 seconds (5000 milliseconds)


