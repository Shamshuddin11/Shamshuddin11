let invalidele = "";
let wishlistusers = localStorage.getItem("users") ?JSON.parse(localStorage.getItem("users")):[];
let count = 0;

document.querySelector("#submit").disabled = true;
function areYouSure()
{
    let sure = confirm("Are You Sure You want to abort the Sign up");

    return sure;
}

function validateData()
{
    
    let name = document.querySelector("#Name").value;
    let namevalid = false;
    let pattern1 = /^[ A-Za-z0-9 ]{4,25}$/;
    
    if(pattern1.test(name))
    {
        document.querySelector("#Name").classList.remove("is-invalid");
        document.querySelector("#Name").classList.add("is-valid");
        namevalid = true;
    }
    else
    {
        document.querySelector("#Name").classList.remove("is-valid");
        document.querySelector("#Name").classList.add("is-invalid");
        namevalid = false;
    }

    let Dob = new Date(document.querySelector("#Date-Of-Birth").value);
    let year = Dob.getFullYear();;
    let dobvalid = false;
    let curyear = new Date().getFullYear();

    if(Dob != "Invalid Date")
    {
        document.querySelector("#Date-Of-Birth").classList.add("is-invalid");


        if((curyear-year)<10)
        {
            document.querySelector("#Date-Of-Birth").classList.remove("is-valid");
            document.querySelector("#Date-Of-Birth").classList.add("is-invalid");
            dobvalid = false;
        }
        else
        {
            document.querySelector("#Date-Of-Birth").classList.remove("is-invalid");
            document.querySelector("#Date-Of-Birth").classList.add("is-valid");
            dobvalid = true;
        }
        
    }

    let email = document.querySelector("#Email").value;
    let pattern2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,8})$/;
    let emailvalid = false;
    if(email != "")
    {
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
    }

    let pwd = document.querySelector("#Password").value;
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
    let cpwd = document.querySelector("#Confirm-password").value;
    let cpwdvalid = false;
        if(cpwd != "")
        {
            if(cpwd == pwd)
            {
                document.querySelector("#Confirm-password").classList.remove("is-invalid");
                document.querySelector("#Confirm-password").classList.add("is-valid");
                cpwdvalid = true;
            }
            else
            {
                document.querySelector("#Confirm-password").classList.remove("is-valid");
                document.querySelector("#Confirm-password").classList.add("is-invalid");
                cpwdvalid = false;
            }
        }
       if(namevalid && dobvalid && emailvalid && pwdvalid && cpwdvalid)
       {
        document.querySelector("#submit").disabled = false;;
       }
}

function confirmation()
{
    let inputlist = document.querySelectorAll("input");
    let confirmed = false;
    for(let i=0 ; i < inputlist.length ; i++)
    {
        if(inputlist[i].classList[3] != "is-valid")
        {
            invalidele = inputlist[i].id;
            confirmed = true; 
            break;
        }
    }
    return confirmed;
}



function storeData()
{
    if(confirmation())
    {
        let ele = document.querySelector("#error");
        str = `<div class = "container">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Plzz enter valid details in "${invalidele}" field
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                </div>`
        ele.innerHTML = str;
        document.getElementById(invalidele).focus();
    }
    else
    {
        let formData = {};
        let present = false;
        formData["name"] = document.getElementById("Name").value;
        formData["email"] = document.getElementById("Email").value;
        formData["dob"] = document.getElementById("Date-Of-Birth").value;
        formData["password"] = document.getElementById("Password").value;

        wishlistusers.forEach(ele => {
            if(ele.email == formData.email)
            {
                let ele = document.querySelector("#error");
                str = `<div class = "container">
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        This E-Mail Id already exists, either login with same mail id or use other mail id to sign up
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        </div>`
                ele.innerHTML = str;
                document.querySelector("#Email").classList.remove("is-valid");
                document.querySelector("#Email").classList.add("is-invalid");
                document.getElementById("Email").focus();
                present = true;
            }
        })
        if(!present)
        {
            wishlistusers.push(formData);

            localStorage.setItem("users" , JSON.stringify(wishlistusers));
        
            let ele = document.querySelector("#error");
            str = `<div class = "container">
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    You Have Logged In SucessFully
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    </div>`
            ele.innerHTML = str;

            location.href = "index.html";
        }
    }
    
}