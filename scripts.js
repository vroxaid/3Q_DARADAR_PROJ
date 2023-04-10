function loginPage(){
    var username, password, error;
    username = document.getElementById('username').value;
    password = document.getElementById("password").value;
    var ifWrongValue = true;
    if(username=="" && password==""){
        error = "Incomplete Details. Username and Password Required.";
    }else if(username=="" && password!=""){
        error = "Incomplete Details. Username Required.";
    }else if(username!="" && password==""){
        error = "Incomplete Details. Password Required.";
    }else if(username!="" && password!=""){
        error = "Redirecting..."
        window.open("Na_Daradar_2qproj/index.html");
    }
    document.getElementById("username").value ="";
    document.getElementById("password").value ="";
    document.getElementById('error').innerHTML=error;
    document.getElementById('error').style="color:red";
}
