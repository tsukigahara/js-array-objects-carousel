//CAROUSEL SCRIPT

// create array of all image elements
const images = [ 
    {   
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 
    {   
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    {   
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    {   
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    {   
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    }
];

console.log(images);

function createImg(array, position){
    var itemHTML = document.createElement("img");
    itemHTML.classList.add("d-block");
    itemHTML.classList.add("mycarousel_item");
    itemHTML.setAttribute("src", array[position].image);
    itemHTML.setAttribute("id", "itemID-"+position);
    return itemHTML;
}

//default value 0 for determinate array position 
var position = 0;

var contentHTML = document.querySelector(".mycarousel_content");
contentHTML.append(createImg(images, position));

function Down (){

    console.log(position);

    if (position < images.length){

        var contentHTML = document.querySelector(".mycarousel_content");
        contentHTML.innerHTML = "";
        position++;
        //by default is false. this checks if we are going further than position 4 (if true, we are on last image)
        if (position > images.length - 1){
            //resets position to 0 (first image)
            position = 0;
        }

        contentHTML.append(createImg(images, position));

        //DEBUG
        if(position == 0){
            console.log(position+" first image");
        }
        if(position == 4){
            console.log(position+" last image");
        }
    }
    //by default this shoud be 1
    console.log(position);
}

function Up (){
    //by default position should be 0
    console.log(position);
    //by defalut if (0 < 5)
    if (position < images.length){

        var contentHTML = document.querySelector(".mycarousel_content");
        contentHTML.innerHTML = "";

        //position decrement for previous image
        position--;

        //by default is true. this checks if we are going in negative like position -1 
        if (position < 0){
            // set position to last image instead of going in negative
            position = images.length - 1;
        }

        contentHTML.append(createImg(images, position));

        //DEBUG
        if(position == 0){
            console.log(position+" first image");
        }
        if(position == 4){
            console.log(position+" last image");
        }
    }
    //by default this shoud be 4
    console.log(position);
}