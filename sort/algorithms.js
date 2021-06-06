
function bubbleSort(){
    for (let i = 1; i < 32; i++){

  
      let firstCol = document.querySelectorAll(`[x = "${i}"]`)
      let secCol = document.querySelectorAll(`[x = "${i+1}"]`)
  
      const firstColQuantity = parseInt(firstCol[firstCol.length - 1].innerHTML)
      const secColQuantity = parseInt(secCol[secCol.length - 1].innerHTML)
      
      if (firstColQuantity > secColQuantity){
        doSwap(i, i+1)
      }
  
  
    }
  }
  
  

