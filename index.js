var check = function() {
    if(document.getElementById("ans-pass").value == 
    document.getElementById("ans-c-pass").value){
        document.getElementById("p").innerHTML="";
        reset_form()
        
    }

    else{
        document.getElementById("p").innerHTML="Passwords donot Match,<br> please try again";
        reset_form()

    }
}

var reset_form = function(){
    document.getElementById("login").reset();
}