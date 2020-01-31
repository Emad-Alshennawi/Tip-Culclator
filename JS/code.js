// hide the result value before the calculation
document.getElementById("finalCalc").style.display = "none";
document.getElementById("results").style.display = "none";

// the main calculation function
function calculateTip() {
    const billAmount = document.getElementById("billNumber").value;
    const theQuality = document.getElementById("Quality").value;
    const peapleNum = document.getElementById("peapleNumber").value;

    // the validation input in the 3 fildes
    if( billAmount === "" || theQuality == 0 ){
        alert("this is wrong....  please check your values");
    };

    if( peapleNum <= 0 ){  

        alert("the Minimum number in the peaple are share with is '1' ");
        
        document.getElementById("finalCalc").style.display = "none";

        document.getElementById("results").style.display = "none";

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