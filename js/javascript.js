
const cards = document.querySelectorAll('.card');
let open_cards = document.querySelectorAll(".is_flipped");
const card_back = document.querySelectorAll('.card_back > img');
let select1 = "";
let select2 = "";


[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is_flipped');
    open_cards = document.querySelectorAll(".is_flipped");
    if (select1 == ""){
        select1 = card;
    }
    else{
        select2 = card;
    }
    console.log(cards[html_cards[0]]);

    if (open_cards.length > 1){
        setTimeout(function() {
            for (const x of cards)
            x.classList.remove('is_flipped');
            select1 = select2 = "";
        }, 2000);
    }

    if (open_cards.length > 2){
            for (const x of cards)
            x.classList.remove('is_flipped');
            select1 = select2 = "";
    }  

    if (select1 == cards[html_cards[0]] || select1 == cards[html_cards[1]]){
        if ((select2 == cards[html_cards[0]] || select2 == cards[html_cards[1]]) && select2 != select1){
            setTimeout(function() {
                select1.remove(); 
                select2.remove();
                select1 = select2 = "";
            }, 1000);
        }
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