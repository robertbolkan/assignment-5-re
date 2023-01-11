


fetch('https://handlers.education.launchcode.org/static/planets.json')
.then(response => response.json())
.then(data => {
  

  let randomNumber = Math.floor(Math.random() * 6);
  const planetName = data[randomNumber].name
  const planetDiameter = data[randomNumber].diameter
  const planetStar = data[randomNumber].star
  const planetDistance = data[randomNumber].distance
  const planetMoons = data[randomNumber].moons
  const planetImage = data[randomNumber].image
  
  document.getElementById("name").innerText = `Name: ${planetName}.`
  document.getElementById("diameter").innerText = `Diameter: ${planetDiameter}.`
  document.getElementById("star").innerText = `Star: ${planetStar}.`
  document.getElementById("distance").innerText = `Distance: ${planetDistance}.`
  document.getElementById("moons").innerText = `Number of moons: ${planetMoons}.`
  document.getElementById("image").src = planetImage
  
 })
 .catch(error => console.error(error));
 
 

 
 
 
 
 
 //set up a window load handler
window.addEventListener("load", function () {

// set up a submit handler for the form.
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {

 event.preventDefault();
   // cancel submission using event.preventDefault()
   let pilotInput = document.querySelector("input[name=pilotName]");
   let pilot = pilotInput.value;

   let copilotInput = document.querySelector("input[name=copilotName]");
   let copilot = copilotInput.value;
   let fuelInput = document.querySelector("input[name=fuelLevel]");
   let fuelLevel = Number(fuelInput.value);

   let cargoInput = document.querySelector("input[name=cargoMass]");
   let cargoLevel = Number(cargoInput.value);

   let readyToLaunch = false;


   
   //validate that all inputs 
if (pilot === "" || copilot === "" || fuelLevel==="" || cargoLevel==="" ||fuelLevel===0 || cargoLevel===0){
 document.getElementById("errorCode").innerText = "Please fill every entry."
 document.getElementById("errorCode").style.visibility= "visible"
 document.getElementById("launchStatus").style.color= "red";
 readyToLaunch = false;

} 

else if (isNaN(pilot) === false || isNaN(copilot)  === false || isNaN(Number((fuelLevel))) === true || isNaN(Number((cargoLevel))) === true ){
 
 document.getElementById("errorCode").innerText = "Please enter correct data type.";
 document.getElementById("errorCode").style.visibility= "visible";
 document.getElementById("launchStatus").style.color= "red";
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
 document.getElementById("pilotStatus").innerText= `Pilot ${pilot} Ready`;
 document.getElementById("copilotStatus").innerText= `Copilot ${copilot} Ready`;
}

})

});

