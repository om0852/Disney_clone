//sidebar icon code
let sidebar_icon = document.getElementsByClassName("sidebar-icon")[0];
let sidebar_icon_container = document.getElementsByClassName('sidebar-icon-container')[0];
sidebar_icon.addEventListener("click",()=>{
    sidebar_icon_container.classList.toggle("sidebar-icon-container-overflow")[0];
    sidebar_icon_container.classList.toggle("sidebar-icon-containers")
});
//header code
let sublink_container = document.getElementsByClassName("sublink-container")[0];
let sublink_container1 = document.getElementsByClassName("sublink-container1")[0];
let sublink_container0 = document.getElementsByClassName("sublink-container0")[0];
let sliderimg = document.getElementsByClassName("sliderimg")[0];

const fsublink_container = ()=>{
    sublink_container.classList.add("sublink-container-hover")[0];
    
}
const frsublink_container = ()=>{
    sublink_container.classList.remove("sublink-container-hover");
}
const fsublink_container0 = ()=>{
    sublink_container0.classList.add("sublink-container-hover")[0];
    
}
const frsublink_container0 = ()=>{
    sublink_container0.classList.remove("sublink-container-hover");
}
const fsublink_container1 = ()=>{
    sublink_container1.classList.add("sublink-container-hover")[0];
    
}
const frsublink_container1 = ()=>{
    sublink_container1.classList.remove("sublink-container-hover");
}
//slider code
let sidearrow = document.querySelectorAll(".sidearrow"); 
let movie_title = document.getElementsByClassName("movie-title")[0];
let movie_language = document.getElementsByClassName("movie-language")[0];
const things = ['Shoorver', 'More Than Friend','Crimie justice'];
const discreption = ['High on patriotism, Shoorveer is a fictional show that brings together some of the best candidates from all three forces — Airforce, Army, and Navy — under one umbrella to force a group of Elite Task Force called the Hawks','Ten years ago, Kyung Woo Yeon (Shin Ye-eun) was as innocent and carefree as any eighteen year old might b','Criminal Justice: Adhura Sach has everything going for it. It is the third instalment of a popular franchise, starring a popular name who happens to be a great actor. It has stellar supporting cast and a genre that works on OTT unlike any other.']
let x_axis=0;
function slider(){
    sliderimg.style.transform=`translateX(-${x_axis*130}vh)`;
    movie_title.innerHTML= things[x_axis];
    movie_language.innerHTML = discreption[x_axis];
    x_axis++;
    if(x_axis==3){
        x_axis=0;
    }
    
}
setInterval(slider,5000);
sidearrow[1].addEventListener("click",()=>{
    sliderimg.style.transform=`translateX(-${x_axis*130}vh)`;
    
    movie_title.innerHTML= things[x_axis];
    movie_language.innerHTML = discreption[x_axis];
    x_axis++;
    if(x_axis==3){
        x_axis=0;
    }
});
sidearrow[0].addEventListener("click",()=>{
    sliderimg.style.transform=`translateX(+${x_axis*130}vh)`;
    movie_title.innerHTML= things[x_axis];
    movie_language.innerHTML = discreption[x_axis];
    x_axis--;
    if(x_axis==0){
        x_axis=3;
    }
});
//movie category slider
// let movie_sidearrow = document.querySelectorAll(".sidearrow"); 
// let lists = document.getElementsByClassName("list");
//  let x =0;
// movie_sidearrow[0].addEventListener("click",()=>{
//     x++;
//     lists.style.transform=`translateX(-${x*220}px)`;
// });
