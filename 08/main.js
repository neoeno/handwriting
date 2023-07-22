// Your exercise is to build up the program below to write
// 'hello world' in your handwriting.

// If you want to save yourself time, and you're feeling
// confident, try to look for opportunities to use functions
// with parameters and looping. For example, you might want
// to implement a `drawDownLine` function, or even some of
// the common curves that show up in your handwriting.

function moveUpMany(n) {
  for (let i = 0; i < n; i++) {
    moveUp();
  }
}

function markLetterH() {
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveUp();
  moveUp();
  moveUp();
  moveRight();
  markDot();
  moveRight();
  markDot();
  moveRight();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();

  moveUpMany(6);
  moveRight();
  moveRight();
}

function markLetterE() {
  moveDown();
  moveDown();
  moveDown();
  moveDown();
  moveRight();
  markDot();
  moveRight();
  markDot();
  moveRight();
  moveUp();
  markDot();
  moveRight();
  moveUp();
  markDot();
  moveUp();
  markDot();
  moveUp();
  moveLeft();
  markDot();
  moveLeft();
  markDot();
  moveLeft();
  moveDown();
  markDot();
  moveLeft();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  moveRight();
  markDot();
  moveDown();
  moveRight();
  markDot();
  moveRight();
  markDot();
  moveRight();
  moveUp();
  markDot();

  moveUpMany(5);
  moveRight();
  moveRight();
}

function markLetterL() {
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  moveRight();
  markDot();
  moveRight();
  markDot();
  moveRight();
  moveUp();
  markDot();

  moveUpMany(5);
  moveRight();
  moveRight();
}

function markLetterO() {
  moveDown();
  moveDown();
  moveDown();
  moveRight();
  moveRight();
  markDot();
  moveLeft();
  markDot();
  moveLeft();
  moveDown();
  markDot();
  moveDown();
  markDot();
  moveDown();
  moveRight();
  markDot();
  moveRight();
  markDot();
  moveUp();
  moveRight();
  markDot();
  moveUp();
  markDot();
  moveLeft();
  markDot();

  moveUpMany(4);
  moveRight();
  moveRight();
  moveRight();
}

markLetterH();
markLetterE();
markLetterL();
markLetterL();
markLetterO();
