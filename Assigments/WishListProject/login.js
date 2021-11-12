let email = document.querySelector("#Email").value;
let pwd = document.querySelector("#Password").value;
let wishlistusers = [];
let errorele = "";
let loginUser = [];

document.querySelector("#submit").disabled = true; 

function validateData()
{
    email = document.querySelector("#Email").value;  
    let pattern2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,8})$/;
    let emailvalid = false;
    if(pattern2.test(email))
    {
        document.querySelector("#Email").classList.remove("is-invalid");
        document.querySelector("#Email").classList.add("is-valid");
        emailvalid = true;
    }
    else
    {
        document.querySelector("#Email").classList.remove("is-valid");
        document.querySelector("#Email").classList.add("is-invalid");
        emailvalid = false;
    }

    pwd = document.querySelector("#Password").value;
    let pattern3 = /^[a-z\d$@_&]{6,20}$/i;
    let pwdvalid = false;
    if(pwd != "")
    {
        if(pattern3.test(pwd))
        {
            document.querySelector("#Password").classList.remove("is-invalid");
            document.querySelector("#Password").classList.add("is-valid");
            pwdvalid = true;
        }
        else
        {
            document.querySelector("#Password").classList.remove("is-valid");
            document.querySelector("#Password").classList.add("is-invalid");
            pwdvalid = false;
        }
    }
    if(emailvalid && pwdvalid)
    {
        document.querySelector("#submit").disabled = false; 
    }
}

function confirmData()
{
    let inputlist = document.querySelectorAll("input");
    let confirmed = true;
    
    for(let i = 0 ; i < inputlist.length ; i++)
    {
        if(inputlist[i].classList[4] != "is-valid")
        {
            errorele = inputlist[i].id;
            confirmed = false;
            return confirmed;
        }
    }
    return confirmed;
}

function checkLoginCredentials()
{
    let loginfailed = true;
    if(!confirmData())
    {
        let ele = document.querySelector("#error");
        str = `<div class = "container">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Plzz enter valid details in "${errorele}" field
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                </div>`
        ele.innerHTML = str;
        document.getElementById(errorele).focus();
        document.querySelector("#Password").value = "";
        document.querySelector("#submit").disabled = true; 
    }
    else
    {
         const users = localStorage.getItem("users");
         if(users)
         {
             wishlistusers = JSON.parse(users);
         }
         
        for(let i=0 ; i<wishlistusers.length ; i++)
        {
            if(wishlistusers[i].email == email )
            {
                if(wishlistusers[i].password == pwd)
                {
                    let logindetails = { name : wishlistusers[i].name , email : wishlistusers[i].email };
                    loginUser.push(logindetails);
                    localStorage.setItem("loggedUser" , JSON.stringify(loginUser));
                    let ele = document.querySelector("#error");
                    str = `<div class = "container">
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                        Login Successfull
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        </div>`
                    ele.innerHTML = str
                    location.href = "wishlist.html";
                    loginfailed = false;
                    break;
                }
                else
                {
                    let ele = document.querySelector("#error");
                    str = `<div class = "container">
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Invalid PassWord 
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        </div>`
                        ele.innerHTML = str
                        loginfailed = false;
            
                        document.querySelector("#Password").classList.remove("is-valid");
                        document.querySelector("#Password").classList.add("is-invalid");
                        document.querySelector("#Password").focus();
                        document.querySelector("#Password").value = "";
                        document.querySelector("#submit").disabled = true;
                        break; 
                }
            }
        }
        if(loginfailed)
        {
            let ele = document.querySelector("#error");
            str = `<div class = "container">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Invalid Email Id 
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    </div>`
            ele.innerHTML = str
            document.querySelector("#Email").classList.remove("is-valid");
            document.querySelector("#Email").classList.add("is-invalid");
            document.querySelector("#PassWord").classList.remove("is-valid");
            document.querySelector("#Password").classList.add("is-invalid");
            document.querySelector("#Email").focus();
            document.querySelector("#Password").value = "";
            document.querySelector("#submit").disabled = true; 
        }
    }
}