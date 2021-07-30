/* the font icon list JS */
let dropdownList = document.querySelector(".container .dropdown-list");
let listIcon = document.querySelector(".container .font-icons .fa-bars");
let h2Show  = document.querySelector(".container h2");
listIcon.addEventListener("click",function(){
   
    if(dropdownList.style.display ==="block"){
        dropdownList.style.display ="none"
        h2Show.style.zIndex = 0;
    }
    else{
        dropdownList.style.display ="block";
        h2Show.style.zIndex = -1;
    }
})
/* the end of that*/

/* the JS part for dishes part */

let btns = document.querySelectorAll(".container .dishes button");

for(let i =0 ; i <btns.length ; i++){
    btns[i].addEventListener("click",function(){
        //remove the class 
        for(let j =0 ; j<btns.length ; j++){
            document.body.classList.remove(`design${j}`);
        }
        document.body.classList.add(`design${i}`);
    })
}


/*the JS part for services */


/*the first section divs */
let categoryShow1 = document.querySelectorAll(".services .content-dishes .fish div");

/*the second section divs */
let categoryShow2 = document.querySelectorAll(".services .content-dishes .grill div");

/*the third section divs */
let categoryShow3  = document.querySelectorAll(".services .content-dishes .fried div");

/*the forth category divs */
let categoryShow4 = document.querySelectorAll(".services .content-dishes .salad div");

/*the fifth category divs */
let categoryShow5 = document.querySelectorAll(".services .content-dishes .dessert div");

/*the categorybutton*/
let categoryButtons = document.querySelectorAll(".category div p");

/* the section*/
let categorySection = document.querySelectorAll(".services .content-dishes section");
/*make array for all divs */

let arrcategory = [categoryShow1,categoryShow2,categoryShow3,categoryShow4,categoryShow5];



//make the show of the se tions 

for(let w  = 0 ; w <arrcategory.length ; w++){

    if(w==0){
        categorySection[w].style.display = "grid";

        for(let x =0 ; x <arrcategory[w].length ; x++){
            arrcategory[w][x].style.display = "block";
            categoryButtons[w].style.textDecoration = "underLine solid gold";
        }
    }
        else {
            categorySection[w].style.display = "none";
        }
    
}

for(let o = 0 ; o<categoryButtons.length ; o++){
    categoryButtons[o].addEventListener("click",function(){

        /*make a an  nderline line */
        categoryButtons[o].style.textDecoration = "underLine solid gold";
        
        for(let s =0 ; s <categoryButtons.length ; s++){
            if(s != o){
                categoryButtons[s].style.textDecoration = "none";
            }
        }




        for(let r = 0 ; r<arrcategory.length ; r++){
             
            if(r != o){
                categorySection[r].style.display = "none";
            }
        }

    for(let y =0 ; y<arrcategory[o].length ; y++){
        arrcategory[o][y].style.display ="block";
    }
    categorySection[o].style.display = "grid";
})
}

/*end the JS part for services */







 