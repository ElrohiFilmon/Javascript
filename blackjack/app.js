const cards=[1,2,3,4,5,6,7,8,9,10,10,10,10];

let randnum= (num)=>{return Math.floor(Math.random()*num)};
let randnum2= (num)=>{return Math.floor(Math.random()*num)};

var userCard = [];
var sums =0;
var own;
function game(ch){
		const card = document.getElementById("cards");
    const sum = document.getElementById("sum");
  	const pr = document.getElementById("prompt");
    const crmny = document.getElementById("crmny");
    const mny = parseFloat(document.getElementById("entr").value);
    switch(ch){
  		case 'n':
        crmny.textContent = "";
        pr.textContent = " "
        sum.textContent = " ";
    		userCard.push(cards[randnum(12)]);
    		userCard.push(cards[randnum2(12)]);
        card.textContent = userCard.join(",");
        break;
      case 'h':	
      	userCard.push(cards[randnum(12)]);
        card.textContent = userCard.join(",")
        break;
      case 's':
      	for(let i of userCard){
        	sums += i;
    		}  	
        card.textContent = " ";
        if(sums==21){
        	pr.textContent = "Black Jack!";
        	sum.textContent = sums;	
          own = mny + (mny * 0.25);
          crmny.textContent = own;
        }else if(sums<21){
        	pr.textContent = "let's check the dealer.";
          pr.textContent = "You Win!";
          sum.textContent = sums;
          own = mny + (mny * 0.25);
          crmny.textContent = own;
        }else{
          pr.textContent = "You Lose! Care for another game?";
          own = mny - (mny * 0.25);
          crmny.textContent = own;
          
        }
        userCard=[];
        sums=0;
  	    break;
  }
	
}