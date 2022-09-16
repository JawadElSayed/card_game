
const card1 = document.getElementById("1");
const card2 = document.getElementById("2");
const card3 = document.getElementById("3");
const card4 = document.getElementById("4");
const card5 = document.getElementById("5");
const card6 = document.getElementById("6");
const cards = document.querySelectorAll('.card');


[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
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
