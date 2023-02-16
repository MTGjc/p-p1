let words;
let vowels = ['a', 'i', 'e', 'o', 'u', 'r']; // so we can check if a char is a vowel

let currIdx = 0;

function setup(){
  createCanvas(512, 512);
  words = loadStrings("o1.txt");
  words1 = loadStrings("o2.txt");
  words2 = loadStrings("trigger.txt");
  words3 = loadStrings("g1.txt");
}

function draw(){
  background(255);
  
  translate(width/4, width/5);
  textAlign(CENTER);
  textSize(20);
  stroke(120);
  strokeWeight(0.8);
  
  text(words2[currIdx],120,  height -318);
  // visualizeWord(words[currIdx]);
  if(frameCount % (words2[currIdx].length*40+140) == 0){
    currIdx++;
  }
  if(currIdx >= words2.length ){
    currIdx = 0;
  }
  
  poemGen(words1)
}

function poemGen(wrd){
  translate(width/2, width/2);
  textAlign(CENTER);
  textSize(12);
  stroke(0);
  strokeWeight(1);
  
  text(words[currIdx], 128,  height - 188);
  // visualizeWord(words[currIdx]);
  if(frameCount % (wrd[currIdx].length*9+80) == 0){
    currIdx++;
  }
  if(currIdx >= words.length ){
    currIdx = 0;
  }
}
  

function visualizeWord(word){

  let r = word.length * 16;
  fill(0);
  noStroke();
  ellipse(128,128, r, r);

  strokeWeight(6);
  for(let i = 0 ; i < word.length;i++){
    let c = word.charAt(i);

    // change colour for vowel
    if(isVowel(c)){
      stroke(255,0,0);
    }else{
      stroke(127);
    }

    // draw line, based on ascii representation
    let n = unchar(c);
    n = round(map(n , 97, 122, 8, 128));
    line(128 - n, 64 + i * 8 , 128 + n , 64 + i * 8);
  }

}

// this returns true/false depending on if word is a vowel
function isVowel(c) {
  if (vowels.includes(c)) {
    return true;
  }else {
    return false;
  }
}