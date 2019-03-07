


$("button").click(function(){//when this button is clicked, this function will occur//
    var land=$(".land").val();//declaring the variable "land" and givng it the val if the class "land"//
    var name=$(".name").val();//declaring the variable "name" and givng it the val if the class "name"//
    var week=$(".week").val();//declaring the variable "week" and givng it the val if the class "week"//
    var week=parseInt(week)*45;//turning the variable "week" into a number that would multiply by 45 and storing it in the value//
    $("h1").text(name+" by 2020 you will have landed at "+land+" and won "+week+" games.");//giving the h1 a text with the change of "land","week", and "name"//
});
