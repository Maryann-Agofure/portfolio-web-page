/*const navigation = document.querySelector('.flex-container')
    let newNavLink = document.createElement('a');
    newNavLink.setAttribute('class', 'navigation')
    newNavLink.innerHTML = 'Menu'
    navigation.appendChild(newNavLink);
    function showMenu(){
        if(screen.width > '700px'){
            newNavLink.style.display = none;
        }
    }*/
    const navBar = document.getElementsByClassName('nav--bar');
function toggleNav (w) {
    let newBar = document.createElement('h3')
    newBar.innerHTML = 'Menu'
    document.appendChild('newBar')
    if (w <= '300px'){
navBar.innerHTML.display = none;
    }
}

const TypeWriter = function(txtElement, words, wait= 3000){
this.txtElement = txtElement; //the word thats in the span tag currently
this.words = words; // the word thats in an array that's displayed
this.wait = parseInt(wait, 10) //wait time
this.txt = '' //the text at the start
this.wordsIndex = 0;
this.type()
this.isDeleting = false;
}


//Type method 
TypeWriter.prototype.type = function(){
//get current index of word
const currText = this.wordsIndex % this.words.length;

//Get full text
const fullText = this.words[currText]

console.log('fullText')

    
    //check if its deleting
    if(this.isDeleting){
        this.txt =fullText.substring(0, this.words.length - 1)

    }else{
        this.txt =fullText.substring(0, this.words.length + 1)
    }

    //insert text into span element to display
    this.txtElement.innerHTML = `<span class = 'txt'>${this.txt}</span>`

    let typeSpeed = 500;

    if(this.isDeleting){
        typeSpeed /= 2 
    }
//check if text is complete
    if(!this.isDeleting && this.txt === fullText){
        typeSpeed = this.wait
//i
        //set delete to true if text is complete
        this.isDeleting = true
    }else if(!this.isDeleting && this.txt === ''){

        this.isDeleting = false;
this.wordsIndex++;
//pause before typing
typeSpeed = 600
    }
    setTimeout(()=> this.type(), typeSpeed)

}

//initialize content to load 
document.addEventListener('DOMContentLoaded', init);

//init init 
function init (){
    const txtElement = document.querySelector('#text-type');
    const wait = txtElement.getAttribute('data-wait');
    const words = JSON.parse(txtElement.getAttribute('data-words'))
}

//initialize typewriter

//new TypeWriter(txtElement, words, wait) 

/*function init (){
    const txtElement = document.querySelector('.text-type');
    const wait = txtElement.getAttribute('data-wait');
    const words = JSON.parse(txtElement.getAttribute('data-words'))
}

class TypeWriter{
    constructor(txtElement, words, wait= 4000){
        this.txtElement = txtElement; //the word thats in the span tag currently
this.words = words; // the word thats in an array that's displayed
this.wait = parseInt(wait, 10) //wait time
this.txt = '' //the text at the start
this.wordsIndex = 0;
this.type()
this.isDeleting = false;
    }
    

    type =() => {
        //get current index of word
const currText = this.wordsIndex % this.words.length;

//Get full text
const fullText = this.words[currText]



    
    //check if its deleting
    if(this.isDeleting){
        this.txt =fullText.substring(0, this.words.length - 1)

    }else{
        this.txt =fullText.substring(0, this.words.length + 1)
    }

    //insert text into span element to display
    this.txtElement.innerHTML = `<span class = 'txt'>${this.txt}</span>`

    let typeSpeed = 500;

    if(this.isDeleting){
        typeSpeed /= 2 
    }
//check if text is complete
    if(!this.isDeleting && this.txt === fullText){
        typeSpeed = this.wait
//i
        //set delete to true if text is complete
        this.isDeleting = true
    }else if(!this.isDeleting && this.txt === ''){

        this.isDeleting = false;
this.wordsIndex++;
//pause before typing
typeSpeed = 600
    }
    setTimeout(()=> this.type(), typeSpeed)

    }
}
//initialize content to load 
document.addEventListener('DOMContentLoaded', init);

//init init 
*/

/*async function Typewriter(sentence, eleRef, typespeed = 300){
    const letters = sentence.split("");
    let i = 0
    while(i < letters.length){
        await waitForMs(typespeed);
        $(eleRef).append(letters[i]);
        i++
    } 

        return;
    
}
function waitForMs(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

Typewriter('Frontend developer and content writer', '#text-type' )*/