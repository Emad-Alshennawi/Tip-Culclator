// hide the result value before the calculation
document.getElementById("finalCalc").style.display = "none";
document.getElementById("results").style.display = "none";

// the main calculation function
function calculateTip() {
    const billAmount = document.getElementById("billNumber").value;
    const theQuality = document.getElementById("Quality").value;
    const peapleNum = document.getElementById("peapleNumber").value;

    // the validation input in the 3 fildes
    if( isNaN(billAmount) || theQuality == 0 ){
        document.getElementById("finalCalc").innerHTML = "this feilds accepts number only";
    };

    if( isNaN(peapleNum) || peapleNum <= 0 ){  
        document.getElementById("finalCalc").innerHTML = "this feilds accepts number only";

    }else{
        peapleNum == 1;
    
        document.getElementById("finalCalc").style.display = "block";

        document.getElementById("results").style.display = "block";  
    }

    //the mathimatical function
    let total = (billAmount * theQuality) /           peapleNum / 100;

    document.getElementById("results").innerHTML = total + "<sup>$</sup>";
};

// show the result value 
document.getElementById("total").onclick = function() {
    calculateTip();
  };