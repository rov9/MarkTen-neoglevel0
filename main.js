const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];



checkButton.addEventListener("click",function validateBillAndCashAmount()
{
    hideMessage();
    var bill=Number(billAmount.value);
    var cash=Number(cashGiven.value);
    if(bill>0 && cash>0)
    {
        if (cash > bill) {
            var amountToBeReturned = cash - bill;
            calculateChange(amountToBeReturned);
    }
    else if(cash < bill){
        showMessage("Wash all plates?");
    }
    else
    {
      showMessage("Thanks,No changes to return!");
    }
    
  } else {
    showMessage("Invalid Amount!");
  }
});

function calculateChange(amountToBeReturned)
{
for(let i=0;i<availableNotes.length;i++){
    var numberOfNotes= Math.trunc(amountToBeReturned/availableNotes[i]);
    var amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText=numberOfNotes;
}
}
function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
  }
    