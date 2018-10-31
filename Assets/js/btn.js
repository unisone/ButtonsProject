var addButton = document.querySelector("#create");
var removeButton = document.getElementById("delete");
var resetButton = document.getElementById("reset");

addButton.addEventListener("click",function(){
	buttonSelect();
});






function buttonSelect() {
  for(var i = 0; i < 40; i++){
    var option = document.createElement("button");
    option.innerHTML = [i];
    document.body.appendChild(option);
  }
}


