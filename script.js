let hh =document.getElementsByClassName("hh")[0];
let mm =document.getElementsByClassName("mm")[0];
let sec =document.getElementsByClassName("sec")[0];


let updateTime =()=>{
    let currentTime =new Date();
    hh.innerHTML =currentTime.getHours() + '\t\t:';
    mm.innerHTML =currentTime.getMinutes() + '\t\t:';
    sec.innerHTML =currentTime.getSeconds();
    // sec.innerHTML =sec.innerHTML+currentTime;
}
 setInterval(updateTime,1000);
