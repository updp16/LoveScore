$("button").click(function(){
    myFunction();
});


function myFunction() {
    var you = document.getElementById("myText1").value;
    var other = document.getElementById("myText2").value;
    var n = Math.floor(Math.random()*100)+1;
    if (other===""){
        var displayText = you+", love score of you & your ghost👻 is "+n+"%.";
    }
    else{
        var displayText = you+", love score of you & "+other+" is "+n+"%.";
    }
    $(".output").html(displayText).hide();
    $(".output").fadeIn(2500);
    
};






/////////////////Time Greeting///////////////////
var d = new Date();
var time = d.getHours();
console.log(time);

if (time < 12) {
    $(".greeting").html("<b>Good morning!</b>");
  
}
if (time > 12) {
    $(".greeting").html("<b>Good afternoon!</b>");
 
}
if (time == 12) {
    $(".greeting").html("<b>Go eat lunch!</b>");
}

