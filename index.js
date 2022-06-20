var outPut = document.getElementById("output");
function button(num){
    outPut.value += num;
}

function Clear(){
    outPut.value = "";
}

function Delete(){
    outPut.value = outPut.value.slice(0 , -1)
}

function Calculate(){
  try {
    outPut.value = eval(outPut.value);
  } catch (error) {
    alert("Invalid")
  }
}


