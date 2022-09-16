
const card1 = document.getElementById("1");
const card2 = document.getElementById("2");
const card3 = document.getElementById("3");
const card4 = document.getElementById("4");
const card5 = document.getElementById("5");
const card6 = document.getElementById("6");
const cards = document.querySelectorAll('.card');
let open_cards = document.querySelectorAll(".is_flipped");
const card_back = document.querySelectorAll('.card_back > img');


[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is_flipped');
    open_cards = document.querySelectorAll(".is_flipped");
    console.log(open_cards.length)
    if (open_cards.length > 1){
        setTimeout(function() {
            for (const x of cards)
            x.classList.remove('is_flipped');
        }, 2000);
    }
    if (open_cards.length > 2){
            for (const x of cards)
            x.classList.remove('is_flipped');
    }  
  });
});

// random number function
const randomNum = (max, used) => {
    let newNum = Math.floor(Math.random() * max + 1);
   
    if(used.includes(newNum)){
        return randomNum(max,used);
    }
    return newNum;
}

// fill cards
let html_cards = [];
let css_cards = [];
let js_cards = [];
let usedNums = [];
for(let i=0 ; i < 6 ;i++){

    let randNum = randomNum(6, usedNums);
    usedNums.push(randNum);
    if (i < 2){
        card_back[randNum-1].src = "./images/html_logo.png";
        html_cards.push(randNum-1);
    }
    else if (i < 4){
        card_back[randNum-1].src = "./images/css_logo.png";
        css_cards.push(randNum-1);
    }
    else {
        card_back[randNum-1].src = "./images/js_logo.png";
        css_cards.push(randNum-1);
    }
 }