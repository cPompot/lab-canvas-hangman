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
      this.context.lineWidth = 3;
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
  //const draw = ['hanger'];

  

  drawHangman(errorsLeft) {
//        switch(draw){
 //       case 'hanger':
          this.context.strokeStyle = 'blue';
          this.context.lineWidth = 3;
          this.context.beginPath();
          this.context.beginPath();
          this.context.moveTo(300, 500);
          this.context.lineTo(20, 500);
          this.context.moveTo(40, 500);
          this.context.lineTo(25, 5);
          this.context.lineTo(100, 5);
          this.context.lineTo(100, 25);
          this.context.stroke();
   //       break;
     //     case 'head': 
          this.context.lineWidth = 5;
          this.context.beginPath();
          this.context.arc(100, 50, 25, 0, Math.PI*2, true);
          this.context.closePath();
          this.context.stroke();
       //  break;
  }
    // ... your code goes here



  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}

