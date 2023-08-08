function myFunction(){

   alert("Hello CSMJU");
   console.log("Hello Monday");
   console.log(document.getElementById("header1").innerText);

   document.getElementById("header1").innerHTML ="Chang...";
   document.getElementById("header1").style.color="#ff0000";

   var x=8;
   var y=20;
   var z=3;
    
   document.getElementById("header2").innerHTML = ((x+y+z)/3 ).toFixed(2);
   
}

let = likecount=0;


function likeFunction(){
    likecount ++;
    document.getElementById("result").textContent=likecount 
    document.getElementById("result").style.fontSize= likecount +"px";
}

function loveFunction(){
    likecount = likecount+10;
    document.getElementById("result").textContent=likecount ;
    document.getElementById("result").style.fontSize= likecount+"px";
   
}

function sadFunction(){
    likecount = likecount-10;
    document.getElementById("result").textContent=likecount ;
    document.getElementById("result").style.fontSize= likecount+"px";

   
}