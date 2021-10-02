class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    const myCanvas = document.getElementById('hangman');
    //this.context.clearRect(0, 0, 1200, 800); //Canvas (width, height)
    this.context.clearRect(0, 0, myCanvas.width, myCanvas.height);
    this.drawLines();
   // ... your code goes here
  }

  drawLines() {
    //souligner les lettres
    for (let i = 0; i < hangman.secretWord.length; i++)
    {
      this.context.beginPath();
      this.context.strokeStyle = 'black';
      this.context.lineWidth = 5;
      this.context.moveTo(100,100); // 1.need to write :moveTo first! default pen (0,0)
      this.context.lineTo(300,100);
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes herew
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  //Bonus
  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}

