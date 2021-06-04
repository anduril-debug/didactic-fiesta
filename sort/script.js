
main();
clickBox()

// creating main table
function main(){

  var id = 0;

  for (var i = 1; i <= 32; i++) {
    for (var j = 1; j <= 24; j++) {
      var box = document.createElement("DIV")
      box.classList.add("single-box")
      box.setAttribute("style",`grid-row : ${j}; grid-column : ${i}`)
      box.setAttribute("id",`${id}`)
      box.setAttribute("X",`${i}`)
      box.setAttribute("Y",`${j}`)
      document.getElementById('container').appendChild(box)
      id++
    }
  }
  createQuantityRow()
  return false;
}

// click on individual box ---not finished---
function clickBox(){
  boxes = document.getElementsByClassName('single-box')
  for (var i = 1; i <= 768; i++) {
    var box = boxes[i]
    box.onclick = function(e){
      console.log(e.target)
      const x = e.target.getAttribute("X")
      const y = e.target.getAttribute("Y")

      let entireCol = document.querySelectorAll(`[x = "${x}"]`)


      //quantity box color
      entireCol[entireCol.length - 1].style.backgroundColor = "wheat"

      for (let i = 0; i <= y; i++){
        entireCol[i].classList.remove("clicked")
      }

      for (let i = y-1; i < 24; i++){
        entireCol[i].classList.add("clicked")
      }
    
    

          
      const redBoxCount = 25 - parseInt(y)
      updateQuantity(redBoxCount,x)

    }
  }




  return false;
}

// creating quantity rows
function createQuantityRow(){

  for (var i = 1; i <= 32; i++){
    var quantity = document.createElement("SPAN")
    quantity.setAttribute("class","col-quantity")
    quantity.setAttribute("style",`grid-row: 25; grid-column: ${i};`)
    quantity.setAttribute("col-total", "0")
    quantity.setAttribute("X", `${i}`)
    quantity.innerHTML = quantity.getAttribute("col-total")
    document.getElementById('container').appendChild(quantity)
  

  }
  
  return false;
}


//Updating quantity row counts
function updateQuantity(redBoxCount,colNumber){
  console.log(`${redBoxCount} witeli ujra, ${colNumber} columnze`)
  
  let quantityBox = document.querySelectorAll(`[x = "${colNumber}"]`)
  quantityBox = quantityBox[quantityBox.length - 1]

  quantityBox.innerHTML = redBoxCount;

  return false 
}