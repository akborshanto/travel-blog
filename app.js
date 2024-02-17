const addBtn = document.getElementsByClassName("add-btn");
// console.log(addBtn)

let count = 0;
for (let btn of addBtn) {
  btn.addEventListener("click", function (e) {
    count++;
    const placeName = e.target.parentNode.childNodes[1].innerText;
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    /* selected-place-container */
    const selectedPlaceContainer = document.getElementById(
      "selected-place-container"
    );
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = placeName;
    const p2 = document.createElement("p");
    p2.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    selectedPlaceContainer.appendChild(li);
    /* TotalCost */
    totalCost("total-cost", parseInt(price));
    /* grandTotal */
    grandTotalCost("grand-total", parseInt(price));
    /* counting */
    setElementText("cart-count", count);
  });
}

/* utitlity */
function setElementText(id, value) {
  const element = (document.getElementById(id).innerText = value);
}

/* totalCost */
function totalCost(id, value) {
  let totalCost = document.getElementById(id).innerText;
  let convertedTotalCost = parseInt(totalCost);
  let sum = convertedTotalCost + parseInt(value);

  /* setTottal-cost */
  setElementText("total-cost", sum);
}
/* grandTotalCost */
function grandTotalCost(category) {
  console.log(category)
  const totalCost = document.getElementById("total-cost").innerText;
  const convertedGrandTotal = parseInt(totalCost);
  //const sum2 = convertedGrandTotal + parseInt(value);
const convertedTotalCost=parseInt(totalCost)
  /* setGrandTotal */
/* condition */



if(category === "bus"){

  setElementText("grand-total", convertedTotalCost + 100);

}else if( category === "train"){
  setElementText("grand-total", convertedTotalCost - 200);

}else if( category === "flight"){
  setElementText("grand-total", convertedTotalCost + 500);

}else{
  setElementText("grand-total", convertedTotalCost );

}


}
