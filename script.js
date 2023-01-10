// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/

//set up a window load handler
window.addEventListener("load", function () {

  // set up a submit handler for the form.
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
   console.log("test1 prevented default")
   event.preventDefault();
     // cancel submission using event.preventDefault()
     let pilotInput = document.querySelector("input[name=pilotName]");
     let pilot = pilotInput.value;
     // Since the copilot input in our form doesn't have an id, you either use a querySelector or
     // you could add an id attribute yourself to the input so you can use getElementById
     let copilotInput = document.querySelector("input[name=copilotName]");
     let copilot = copilotInput.value;
     let fuelInput = document.querySelector("input[name=fuelLevel]");
     let fuelLevel = Number(fuelInput.value);

     let cargoInput = document.querySelector("input[name=cargoMass]");
     let cargoLevel = Number(cargoInput.value);


     console.log(typeof pilot)
     console.log(typeof copilot)
     console.log(typeof cargoLevel)
     console.log(typeof fuelLevel)
     console.log(isNaN(pilot))
     console.log(isNaN(copilot))
     console.log(isNaN(fuelLevel))
     console.log(isNaN(cargoLevel))

     let readyToLaunch = false;
     // Alongside selecting all of the inputs from the form, we also want to select the faultyItems div
     // and pass into the formSubmission function
     // let list = document.getElementById("faultyItems");
     
     //validate that all inputs have data in them
if (pilot === "" || copilot === "" || fuelLevel==="" || cargoLevel==="" ||fuelLevel===0 || cargoLevel===0){
   document.getElementById("errorCode").innerText = "Please fill every entry."
   document.getElementById("errorCode").style.visibility= "visible"
   readyToLaunch = false;
  
} 

else if (isNaN(pilot) === false || isNaN(copilot)  === false || isNaN(Number((fuelLevel))) === true || isNaN(Number((cargoLevel))) === true ){
   
   document.getElementById("errorCode").innerText = "Please enter correct data type.";
   document.getElementById("errorCode").style.visibility= "visible";
   readyToLaunch = false;
}
else {
   document.getElementById("itemStatus").style.visibility= "visible";
   document.getElementById("errorCode").style.visibility= "hidden";
   readyToLaunch= true
}
if (fuelLevel< 10000){
   document.getElementById("fuelStatus").innerText= "Not enough fuel for journey";
   document.getElementById("launchStatus").style.color= "red";
   document.getElementById("launchStatus").innerText= "Shuttle not ready for launch";
   readyToLaunch = false;
}

if (cargoLevel> 10000){
   document.getElementById("cargoStatus").innerText= "Too much mass for the shuttle to take off for journey";
   document.getElementById("launchStatus").style.color= "red";
   document.getElementById("launchStatus").innerText= "Shuttle not ready for launch";
   readyToLaunch = false;

} else if (readyToLaunch=== true) {
   document.getElementById("launchStatus").style.color= "green";
   document.getElementById("launchStatus").innerText= "Shuttle ready for launch";
   document.getElementById("cargoStatus").innerText= "Cargo check: Passed";
   document.getElementById("fuelStatus").innerText= "Fuel check: Passed";
}
     //check fuel level and cargo mass, and report launch status

   //   formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  })

});
