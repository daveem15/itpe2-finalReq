function saveData(){
    let email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{
        return v.email==email && v.password==password
    })) {
        alert("Login Successfull")
        let current_user=user_records.filter((v)=>{
            return v.email==email && v.password==password 
        })[0]

        localStorage.setItem("email", current_user.email);
        localStorage.setItem("email", current_user.password);
        window.location.href="main.html";
    }
    else{
        alert("Wrong Email or Password");
    }
}