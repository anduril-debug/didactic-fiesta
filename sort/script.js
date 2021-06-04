
main();
clickBox()


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

}


function clickBox(){
  console.log("HERE")
  boxes = document.getElementsByClassName('single-box')
  for (var i = 1; i <= 768; i++) {
    var box = boxes[i]
    box.onclick = function(e){
      console.log(e.target)
      var boxColor = e.target.style.backgroundColor

    }
  }


  }
