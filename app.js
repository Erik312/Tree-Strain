
const display = document.getElementById('displaydata');


function check(){

	alert("loading");
	var userinput = document.getElementById("user").value;
	fetch(`https://strainapi.evanbusse.com/qGm5or2/strains/search/name/${userinput}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
    	for(let i=0; i < response.length; i++){
      let newEl = document.createElement("div");
      newEl.innerHTML = "<strong>Strain Name: </strong>" + response[i].name;
      let newEl2 = document.createElement("li")
      newEl2.innerHTML = "<strong>Type: </strong>" + response[i].race;
      newEl.appendChild(newEl2);
      let newEl3 = document.createElement("li")
      newEl3.innerHTML = "<strong>Description: </strong>" + response[i].desc;
      newEl.appendChild(newEl3);
      display.appendChild(newEl);
      console.log(response);
  }
	});
}

function clearOut(){
	location.reload();
};

