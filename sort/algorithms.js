
async function bubbleSort(){


    let swap_count = 0
    const sortBtn = document.getElementById("sort-btn")
    const randBtn = document.getElementById("random-fill-btn")
    sortBtn.setAttribute("disabled",true)
    randBtn.setAttribute("disabled",true)


    for (let i = 1; i < 32; i++){
      for(var j = 1; j < 32-i+1; j++){


          let firstCol = document.querySelectorAll(`[x = "${j}"]`)
          firstCol.forEach((item) => {
            if(item.classList.length == 2){
              item.classList.add("sort-checked")
            }
          });



          let secCol = document.querySelectorAll(`[x = "${j+1}"]`)

          const firstColQuantity = parseInt(firstCol[firstCol.length - 1].innerHTML)
          const secColQuantity = parseInt(secCol[secCol.length - 1].innerHTML)

          await sleep(1)

          firstCol.forEach((item) => {
              item.classList.remove("sort-checked")
          });

          if (firstColQuantity > secColQuantity){
            doSwap(j, j+1)
            swap_count++
          }
        }
      }


      let swap_span = document.createElement("SPAN")
      swap_span.innerHTML = `Swapped ${swap_count} time`
      let info_field = document.getElementById("info-field")
      info_field.innerHTML = ""
      info_field.appendChild(swap_span)

      sortBtn.removeAttribute("disabled")
      randBtn.removeAttribute("disabled")


  }




// for stop code execution
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
