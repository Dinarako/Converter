function ageConvert() {
    //document.getElementById("yourText").style.backgroundColor = "pink";    
    var dogAge = document.getElementById("yourText").value;
    humanAge=(dogAge-2)*4+21;
    document.getElementById("demo").innerHTML = "Your Dog is " + humanAge + " years old in Human Age.";
  
  }
  ageConvert();
  
  function myFunction () {
    document.getElementById("demo").innerHTML = "";
  }
  myFunction();