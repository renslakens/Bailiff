// Drawing the board
var rows = 5;
var cols= 5;
var table = document.getElementById('board');
for (var r = 0; r<rows; r++){
  var row = table.insertRow(-1);
  for (var c = 0; c<cols; c++){
    var cell = row.insertCell(-1);
    cell.setAttribute('id', '12345'.charAt(c) + (rows-r));
    cell.setAttribute('class', 'cell');
  }
}

// Implementing pieces on the board


// 'New Game' button function
function newGame() {
		document.getElementyById("new-game").style.color = "red"
}

//
