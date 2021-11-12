
function calculate()
{
    let p = document.getElementById("loanAmt").value;
    let r = document.getElementById("intrst").value;
    let n = document.getElementById("months").value;
    console.log("p", p);
    console.log("r", r);
    console.log("n", n);
    let rate = r/12/100;
    
    let t = Math.pow((rate+1),n);
    console.log("t", t);
    let res = Math.round(((p * rate * t) / (t-1)));
    console.log("res" , res);
    
    document.getElementById("result").value = res;
}

function resetCalc()
{
    document.getElementById("loanAmt").value= "";
    document.getElementById("intrst").value = "";
    document.getElementById("months").value = "";
    document.getElementById("result").value = "";
}