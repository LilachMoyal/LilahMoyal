/*----Switch Pictures - index Page-----*/

/*----Rehearsals----*/
setInterval(function() {

// Set the initial image
var imgElement = document.getElementById("slide1");
imgElement.src = "Images/Rehearsals1.png";

    // Get the current image's src attribute
    var currentSrc = imgElement.getAttribute("src");
    
    // Determine the next image to show based on the current image
    var newSrc;
    if (currentSrc === "Images/Rehearsals1.png") {
    newSrc = "Images/Rehearsals2.png";
    } else if (currentSrc === "Images/Rehearsals2.png") {
    newSrc = "Images/Rehearsals3.png";
    } else {
    newSrc = "Images/Rehearsals1.png";
    }
    
    // Update the src attribute with the new image
    imgElement.src = newSrc;
}, 2500); // Change the image every 2.5 seconds


/*----Find band----*/
setInterval(function() {
    
// Set the initial image
var imgElement1 = document.getElementById("slide2");
imgElement1.src = "Images/FindBand1.png";

    // Get the current image's src attribute
    var currentSrc1 = imgElement1.getAttribute("src");
    
    // Determine the next image to show based on the current image
    var newSrc1;
    if (currentSrc1 === "Images/FindBand1.png") {
    newSrc1 = "Images/FindBand2.png";
    } else if (currentSrc1 === "Images/FindBand2.png") {
    newSrc1 = "Images/FindBand3.png";
    } else {
    newSrc1 = "Images/FindBand1.png";
    }
    
    // Update the src attribute with the new image
    imgElement1.src = newSrc1;
}, 2500); // Change the image every 2.5 seconds



// Set the initial image
var imgElement3 = document.getElementById("slide3");
imgElement3.src = "Images/MusicLessons1.png";

/*----Music Lessons----*/
setInterval(function() {
    // Get the current image's src attribute
    var currentSrc2 = imgElement3.getAttribute("src");
    
    // Determine the next image to show based on the current image
    var newSrc3;
    if (currentSrc2 === "Images/MusicLessons1.png") {
    newSrc3 = "Images/MusicLessons2.png";
    } else if (currentSrc2 === "Images/MusicLessons2.png") {
    newSrc3 = "Images/MusicLessons3.png";
    } else {
    newSrc3 = "Images/MusicLessons1.png";
    }
    
    // Update the src attribute with the new image
    imgElement3.src = newSrc3;
}, 2500); // Change the image every 2.5 seconds


