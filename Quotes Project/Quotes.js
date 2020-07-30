let btn1 = document.getElementById('btn1'),
btn2 = document.getElementById('btn2'),
bottom=document.getElementById('bottom');

btn1.onclick= ()=>{
    fetch("http://quotes.stormconsultancy.co.uk/random.json").then(response=>response.json()).then(data=>{
        document.getElementById('quote').innerHTML=`${data.quote}<br>by ${data.author}`});
}


btn2.onclick= ()=>{
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random").then(response=>response.json()).then(data=>document.getElementById('quote').innerHTML=data.message);
}

bottom.onmouseover= ()=>{
    document.getElementById('bottom').innerText='';
    document.getElementById('truth').innerHTML=`I thank LetsUpgrade all the effort they put in to educate and share knowledge to all. Special thanks to Prasad Sir for inspiring and teaching JS and Lets Keep Upgrading. To be Honest I used google for CSS`;
}

bottom.onmouseout= ()=>{
    document.getElementById('truth').innerText='';
    document.getElementById('bottom').innerHTML=`Bring your mouse over here to reveal truth.......`;
}