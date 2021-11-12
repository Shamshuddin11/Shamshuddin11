window.onload = displayItems;

let curuser = [];
let items = [];

let loginuser = localStorage.getItem("loggedUser");


displaylogin();


function displaylogin()
{
    let ele = document.querySelector("#username");
    
    if(loginuser)
    {
        curuser = JSON.parse(loginuser);
    }
    ele.innerHTML = `&nbsp  Hi,&nbsp${curuser[0].name}`;
}

function storeWishListItems()
{
    let item = document.querySelector("#itemName").value;
    let discrpt = document.querySelector("#description").value;

    let todoitems = {};
    

        todoitems['itemName'] = item ;
        todoitems['description'] = discrpt; 
        console.log("todoItems new" , todoitems);
        addToLocaleStorage(todoitems);
        displayItems();
}

function addToLocaleStorage(todoitems)
{
    
        items.push(todoitems);
        
        localStorage.setItem(curuser[0].email , JSON.stringify(items));
}
        
function displayItems()
{
    let str = "";
    
    let res = localStorage.getItem(curuser[0].email);

    if(res)
    {
        items = JSON.parse(res);
    }
    let elebody = document.querySelector("#data");
    items.forEach(element =>{
        str +=  `<tr>
                <td>${element["itemName"]}</td>
                <td>${element["description"]}</td>
                <td><a onClick="onEdit(this)"><i class="fas fa-edit"></i></a></td>
                <td><a onClick="onDelete(this)"><i class="fas fa-trash"></i></td>
                </tr>`
    });
    elebody.innerHTML = str;
}

function reset()
{
    document.querySelector("#itemName").value = "";
    document.querySelector("#description").value = "";

}

function onEdit(td)
{
    row = td.parentElement.parentElement;
    let itemname = row.cells[0].innerHTML;
    document.querySelector("#itemName").value = row.cells[0].innerHTML;
    document.querySelector("#description").value = row.cells[1].innerHTML;
    document.querySelector('#add').value = "Edit";
    let res = localStorage.getItem(curuser[0].email);
    items = JSON.parse(res);
    console.log("items" , items);
    let data;
    items.forEach(ele =>{
        if(ele.itemName == itemname)
        {
            data = ele;
        }
    })
    
    let index = items.indexOf(data);

    items.splice(index , 1);
    
    localStorage.setItem(curuser[0].email , JSON.stringify(items));
    
}

function onDelete(td)
{
    row = td.parentElement.parentElement;
    let itemname = row.cells[0].innerHTML;
    
    let res = localStorage.getItem(curuser[0].email);
    items = JSON.parse(res);
    
    let data;
    items.forEach(ele =>{
        if(ele.itemName == itemname)
        {
            data = ele;
        }
    })
    
    let index = items.indexOf(data);

    items.splice(index , 1);
    
    localStorage.setItem(curuser[0].email , JSON.stringify(items));
    displayItems();
}

function loggingout()
{
    localStorage.removeItem("loggedUser");
    location.href = "index.html";
}