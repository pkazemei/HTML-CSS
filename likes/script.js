var count9=9;
var countElement9=document.querySelector("#count9");

var count12=12;
var countElement12=document.querySelector("#count12");

var count9two=9;
var countElement9two=document.querySelector("#count9two");


function like1(){
    count9++
    countElement9.innerText=count9 + " like(s)"
    console.log(count9);
}

function like2(){
    count12++
    countElement12.innerText=count12 + " like(s)"
    console.log(count12);
}

function like3(){
    count9two++
    countElement9two.innerText=count9two + " like(s)"
    console.log(count9two);
}