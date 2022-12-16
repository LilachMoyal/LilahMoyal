/*-----The User Location - FindPlayers Page-----*/

function onSubmit(data) {
  debugger;
  console.log(data);
}
  function MyLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              function (position) {
                  document.getElementById('lat').value = position.coords.latitude;
                  document.getElementById('lon').value = position.coords.longitude;
                  console.log('dmivin: ', position.coords);
              },
              function (error) {
                  console.log('dmivin: error', error);
              },
          );
      }
  }

/*-----Edit Button - MyProfile Page-----*/
function EditFunction(){
    document.getElementById("Edit").disabled = true;
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("Email").disabled = false;
    document.getElementById("Uname").disabled = false;
    document.getElementById("Gender").disabled = false;
    document.getElementById("Academic").disabled = false;
    document.getElementById("City").disabled = false;
    document.getElementById("AboutMe").disabled = false;
    document.getElementById("FinishEdit").disabled = false;
  }
  
/*-----Finish Button - MyProfile Page-----*/  
  function Save() {
    document.getElementById("Edit").disabled = false;
    document.getElementById("fname").disabled = true;
    document.getElementById("lname").disabled = true;
    document.getElementById("Email").disabled = true;
    document.getElementById("Uname").disabled = true;
    document.getElementById("Gender").disabled = true;
    document.getElementById("Academic").disabled = true;
    document.getElementById("City").disabled = true;
    document.getElementById("AboutMe").disabled = true;
    document.getElementById("FinishEdit").disabled = true;
  }

  /*---- Schedule the Lessons with query string-----*/
  function checkQueryString() {
    
    // Get the query string from the current URL
    const queryString = window.location.search;
  
    // Create a URLSearchParams object from the query string
    const params = new URLSearchParams(queryString);
  
      // Check if the "noa" parameter has a value of "1"
    if (params.has("lesson") && params.get("lesson") === "Monday") {
  document.getElementById("Monday").style.display = "block";
    } else if (params.has("lesson") && params.get("lesson") === "Wednesday") {
  document.getElementById("Wednesday").style.display = "block";
    } else if (params.has("lesson") && params.get("lesson") === "Thursday") {
  document.getElementById("Thursday").style.display = "block";
    }
  }


  