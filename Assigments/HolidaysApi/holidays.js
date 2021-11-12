let baseurl = "https://calendarific.com/api/v2/holidays?";
let key = "f432fab3d7ec94da9f8fabbd29739ca50366b2ff";

let holidays = [];
let year = "";

const countries = [
    {
        'name' : 'India',
        'code' : 'in'
    },
    {
        'name' : 'USA',
        'code' : 'us'
    },
    {
        'name' : 'United Kingdom',
        'code' : 'gb'
    },
    {
        'name' : 'Pakistan',
        'code' : 'pk'
    },

]


    getCountry();
    getHolidaysList();

function getHolidaysList()
{
    let url = "";
    let country = document.querySelector("#selectedcountry").value;
    year = document.querySelector("#year").value;
    if(year == "")
    {
         url = `${baseurl}&api_key=${key}&country=${country}&year=2021`;
    }
    else{
        country = document.querySelector("#selectedcountry").value;
        console.log("country" , country);

         url = `${baseurl}&api_key=${key}&country=${country}&year=${year}`;
    }

    fetch(url).then(response => response.json()).then(result => {
	
        holidays = result["response"]["holidays"];
    
        viewHolidays(holidays);
    });

   
}

function getCountry()
{
    const countryele = document.querySelector("#country");
    console.log("countryele" , countryele);
    let selected = `<select class="container-md form-select form-select-md mb-3" aria-label=".form-select-lg example" id="selectedcountry" onchange="getHolidaysList()">`;

    countries.forEach( element => {
        console.log("elemt.code", element.code);
        selected += `<option value="${element['code']}">${element['name']}</option>`;
    });
    selected += `</select>`;
    countryele.innerHTML = selected;
}

function viewHolidays(holidays)
{
    const ele = document.getElementById("holidays");

    let str = `<div class="row align-items-start">`;

    holidays.forEach(element => {
        str += `<div class="col-md-3">
            <div class="card" style="width: 18rem;">
                 <div class="card-body">
                    <h3 class="card-title">"${element["name"]}"</h3>
                    <p class="card-text">"${element["description"]}<br><br>Holiday On : "${element["date"]["iso"]}"</p>
                 </div></div></div>`
    });
    str += `</div>`
    ele.innerHTML = str;
}

function validateYear()
{
    let pattern = new RegExp("/^[1][9][8-9][0-9]$|^[2][0][0-1][0-9]$|^[2][0][0-2][0-3]");
    let value = document.querySelector("#year").value;
        console.log("value" , value);
        let res = pattern.test(value);
        console.log("result of test ",res);
    if(pattern.test(value))
    {
        getHolidaysList();
    }
    else
    {
        alert("Invalid Year");
    }
}