function checkWin() {
    let winOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let currentOrder = Array.from(document.getElementById("board").children).map(tile => tile.src.split("/").pop().split(".")[0]);
  
    if (currentOrder.join("") === winOrder.join("")) {
        displayPromotionalCode();
    }
    else {
      alert("not correct!");
    }
  }
  
  function displayPromotionalCode() {
    let promoCode = generatePromoCode(); 
    alert("Congratulations! You win! Your promotional code is: " + promoCode);
  }
  
  function generatePromoCode() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}
  
  var rows = 3;
  var columns = 3;
  
  var currTile;
  var otherTile;
  
  var turns = 0;
  var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "9", "8"];
  
  window.onload = function () {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
          let tile = document.createElement("img");
          tile.id = r.toString() + "-" + c.toString();
          tile.src = "images/" + imgOrder.shift() + ".jpg";
          //Drag functionality
  
          tile.addEventListener("dragstart", dragStart);
          tile.addEventListener("dragover", dragOver);
          tile.addEventListener("dragenter", dragEnter);
          tile.addEventListener("dragleave", dragLeave);
          tile.addEventListener("drop", dragDrop);
          tile.addEventListener("dragend", dragEnd);
  
  
          document.getElementById("board").append(tile);
  
  
  
  
        }
      }
  }

  function dragStart() {
    currTile = this; //this refers to the img tile being dragged
  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
  function dragEnter(e) {
    e.preventDefault();
  }
  
  function dragLeave() {
  
  }
  
  function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
  }
  
  function dragEnd() {
    if (!otherTile.src.includes("9.jpg")) {
        return;
    }
  
    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);
  
    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);
  
    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;
  
    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;
  
    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
  
    if (isAdjacent) {

        let currImg = currTile.src;
        let otherImg = otherTile.src;
  
        currTile.src = otherImg;
        otherTile.src = currImg;
  
        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
  
  
  }