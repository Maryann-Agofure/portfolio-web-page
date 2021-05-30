const navigation = document.querySelector('.flex-container')
    let newNavLink = document.createElement('a');
    newNavLink.setAttribute('class', 'navigation')
    newNavLink.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>'
    navigation.appendChild(newNavLink);
    
    



async function Typewriter(sentence, eleRef, typespeed = 100){
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
Typewriter('A frontend developer and content strategist', '#text-type' )

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  $( document ).ready(async function() {
    await Typewriter('A frontend developer and content strategist', "#text-type");
    await waitForMs(2000);
    deleteSentence("#text-type");
  });
  deleteSentence("#text-type");
