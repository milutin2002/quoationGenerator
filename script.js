//Dom eleemnti
const bookButton=document.getElementById('bookR');
const latinButton=document.getElementById('latinR');
const generateButton=document.getElementById('GeneraeQuotes');
const numQoutes=document.getElementById('numQuotes');
const article=document.getElementById('QuotesRes');
const exitButton=document.getElementById("exitButton");
//citatiti
let bookbeg=['Classic -','Sleep is good','Books are quitest and most constant of friends','Many people','The library is inhabited by spirits','If you don’t like to read','One glance at a book','When I have a little money','Fill your house with stacks of books','I find television very educating'];
let bookmid=['you haven’t found the right book','perhaps someone dead for 1,000 years','I buy books','If you do not like it, ignore it','not because they tell us that dragons exist','in sad times and happy times, for books are people','and slightly exhausted at the end','every time somebody turns on the set','I adore everything about them'];
let bookend=['and don’t read.','and books are better.','and the most patient of teachers','feel better at the mere sight of a book.','and to read is to voyage through time.','I buy food and clothes.','but because they tell us that dragons can be beaten.','I go into the other room and read a book.','but what he rereads.'];
let book=['Classic′ – a book which people praise and don’t read','Sleep is good, he said, and books are better','Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers','Many people, myself among them, feel better at the mere sight of a book','The library is inhabited by spirits that come out of the pages at night','If you don’t like to read, you haven’t found the right book.','One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time','When I have a little money, I buy books; and if I have any left, I buy food and clothes','Fill your house with stacks of books, in all the crannies and all the nooks','That’s the thing about books. They let you travel without moving your feet'];
let latin=['Sapere aude','Ad astra per aspera','Carpe vinum','Alea iacta est','Acta non verba','Audentes fortuna iuvat','Natura non constristatur','Ad meliora','Creo quia absurdum est','In absentia lucis, Tenebrae vincunt'];
//boje
let colors=['black','#78c4d4','#8f4f4f','#f2b4b4'];
function generateColor(){
  return colors[Math.floor(Math.random()*colors.length)];
}
//generisanje citata
function generateQuote(Islatin){
  if(Islatin){
    return latin[Math.floor(Math.random()*latin.length)];
  }
  else{
    return bookbeg[Math.floor(Math.random()*bookbeg.length)]+","+bookmid[Math.floor(Math.random()*bookmid.length)]+","+bookend[Math.floor(Math.random()*bookend.length)];
  }
}
//stavljanjnje elemenata u article
function addQuotes(quotes,Islatin){
  let result=[];
  let color=generateColor();
  for (var i = 0; i < numQuotes.value; i++) {
    let child=document.createElement('p');
    child.classList.add('Quoete');
    newQuote=generateQuote(Islatin);
    child.innerHTML="<p>“"+newQuote+"”</p>";
    child.style.color=color;
    const index=quotes.indexOf(child.textContent);
    quotes.splice(index,1);
    result.push(child.textContent);
    article.appendChild(child);
  }
  return quotes.concat(result);
}
//brisanje prethodnih citata
function removeChildren(){
  let node=article.firstChild;
  while(node){
    article.removeChild(node);
    node=article.firstChild;
  }
}
//omogucavanje dugmeta da bira citate
generateButton.addEventListener('click',function($event){
  $event.preventDefault();
  removeChildren();
  if (bookButton.checked) {
    book=addQuotes(book,false);
  }
  else if(latinButton.checked){
    latin=addQuotes(latin,true);
  }
  else{
    alert("You didn't choose type of quotes");
  }
});
