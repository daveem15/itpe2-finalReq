function saveData() {
    let name, email, password, cpassword, gender, address;
   name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    cpassword=document.getElementById("cpassword").value;
    address = document.getElementById("address").value;
    gender=document.getElementsByName("gender").value;
    
 
    let user_records=new Array();
            user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
            if(user_records.some((v)=>{
                return v.email==email
            })){
                alert("Already has an account!");
            }
            else{
                user_records.push({
                    "name":name,
                    "email":email,
                    "password":password,
                    "cpassword": cpassword,
                    "address": address,
                    "gender":gender,
                })
                localStorage.setItem("users",JSON.stringify(user_records));
            }
        }


   