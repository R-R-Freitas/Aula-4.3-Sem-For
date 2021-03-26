let queenColumnPosition = 4;
let queenRowPosition = 4;

let opponentColumnPosition = 1;
let opponentRowPosition = 7;

let successfulAttack = false;

if ((queenColumnPosition === opponentColumnPosition) || (queenRowPosition === opponentRowPosition)){
  successfulAttack = true;
}

if ((queenColumnPosition - queenRowPosition) === (opponentColumnPosition - opponentRowPosition)) {
	successfulAttack = true;
}

if ((queenColumnPosition + queenRowPosition) === (opponentColumnPosition + opponentRowPosition)){
	successfulAttack = true;
}

if (successfulAttack === true) {
	console.log ('O ataque foi bem sucedido!');
}

if (successfulAttack === false) {
	console.log ('O ataque foi mal sucedido!')
}
