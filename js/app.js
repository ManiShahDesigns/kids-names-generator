// DOM selectors
const girl = document.querySelector('.girl');
const boy = document.querySelector('.boy');
let names = document.querySelector('.generated-name');
const cute = document.querySelector('.cute-message');

// Random Messages
const messages = ["Cute!🤗", "Lovely!😍", "Beautiful!😘", "Awesome!😇", "Wonderful!😉"];

// Fetch request
const request = new MyFetchRequest;

// Create random numbers to use with the JSON data ids
function randomId(){
  return Math.floor(Math.random() * 1000);
} 

// Create random numbers to use with the messages
function randomMsgIndex() {
  return Math.round(Math.random() * (messages.length - 1) );
}

// Cute message function
function messageFunction(){
  cute.style.display = 'block';
  cute.style.animation = 'fadein 0.5s';
  cute.innerHTML = messages[randomMsgIndex()];
}

// Get girls names 
function girlsNames(randomId){
  request.get('./json/girl.json')
  .then(data => 
    names.innerHTML =
    `${data.names[randomId]}`
    )
  .catch(err => console.log(err));
};

// Get boys names 
function boysNames(randomId){
  request.get('./json/boy.json')
  .then(data => 
    names.innerHTML =
    `${data.names[randomId]}`
    )
  .catch(err => console.log(err));
};

// Girl button event listener
girl.addEventListener('click', function(e){
  girlsNames(randomId());
  messageFunction();
  e.preventDefault();
});

// Boy button event listener
boy.addEventListener('click', function(e){
  boysNames(randomId());
  messageFunction();
  e.preventDefault();
});
