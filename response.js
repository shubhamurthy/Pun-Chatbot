//dictionary of puns
var pundict = {horse: ["What did the horse say when it hadn't eaten for a while? 'I'm so hungry I could eat a human.'","I can't give you a pun today, I'm feeling too horse.", "What do you call the horse next door? Your neighbour.", "This is a silly suggestion. Quit horsing around.", "This is a silly suggestion. Quit foaling around.", "What do you call a slow horse? A stall-ion."],
               pig: ["What a boaring suggestion. You could do better.", "What does a french pig say when it's confused? 'Porkquoi?'", "What do tourist pigs like to do? Take pigtures."],
               llama: ["Do you want to go on a picnic today? Alpaca lunch! :]"],
               toad: ["This suggestion is toadally cool, bro.",
                      "I read a book about amphibians today. It was ribbiting."],
               otter: ["This is your suggestion? Get otter here!",
                       "If otters had their own country what would be their capital city? Otterwa."],
               cow: ["How much livestock is in your farm? I don't know I've lost cownt.", "What does a scared cow do? It cowers.", "What did the cow say when you told it a bad joke? 'I am not amoosed.'", "What did the cow say when things didn't go its way? 'I am udderly disappointed.'"],
               linguist: ["What is a linguist's favourite way to communicate? Using their phones.", "Why was the linguist hired to do cold calls? They had great phone-ethics.",
                             "What did the linguist dress up as for Halloween? A corpus.", "What do you call a hungry linguist? Nom Chompsky.", "What is the field of linguistics' greatest sin? Tax.", "What is a historical linguist's favourite food? PIE"],
               music: ["What do you call a pleasantly agreeable song? A mellowdy", "How do you get hired in the music industry? You need to have a solid pitch."],
               bug: ["Stop bugging me with these boring suggestions.",
                     "What do you call a bug detective? An insector."],
               mango: ["Did you say mango? Man, go away!"],
               berry: ["Do you like smoothies? I find them berry nice.","What should you do if your strawberry plant dies? Berry it."],
               cheese: ["Cheese puns are difficult. I can never think of one that is gouda-nough.", "What do you call a cheesy retelling of Cinderella? Mozzarella.", "What do you call a cheesy pun but in French? Camembour.", "You cheddar not suggest a cheese pun again."],
               train: ["How do conductors learn to do their job? They train."],
               grass: ["How can you thank your Spanish-speaking gardener? Grassias!"],
               lemon: ["What does a lemon call when it's in a tight squeeze? Lemon-Aid."],
               bread: ["I was bready to tell you a funny joke but then I forgot it."],
               floor: ["I was bewildered when I walked into my apartment to discover someone stole my carpet. You could say I was floored."],
               box: ["What did the garbage can say to the blue box the day after garbage collection? 'Where have you bin?'"],
               planet: ["Why are aliens so good at carrying out an invasion? They planet."],
               coffee: ["What is a coffee's favourite scripting language? JavaScript.", "Why did the sick person make a hot caffeinated beverage? Because they were feeling coughy."],
               code: ["What do you call a snowy cipher? A cold code!"],
               spider: ["What is a popular occupation for spiders? Web development."],
               management: ["What do you say to a stressed-out Management student? BCom."],
               cat: ["What do you call a cat searching for a good outfit? Purrsuit.",
                    "Why didn't the cat like its laptop? It had no mouse."],
               dog: ["What does every musically-inclined dog need to own? A subwoofer", "What do you get when you cross a bovine with a canine? A bulldog."],
               chair:["What do you call the president of a chair factory? A chairperson."],
               store:["What do you call a weird market? A bizarre bazaar!"]
              }
//greeting arrays (could have made this an object but oh well)
var greet_key = ["hi", "hello", "hey"]
var greet_resp = ["Are you?", "Don't you mean heaven-o?", "I'm not a cow. I don't eat hay!"]

//take input from input box
function takeinput(id){
var t=document.getElementById(id).value
return t}

//convert input to a lowercase, punctuation-free array of words
function convertinput(i){
  var lower=i.toLowerCase()
  var punctuation=lower.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"")
  var words=punctuation.split(" ")
  return words}

//return greeting response based on input
function matchgreet(words){
    for (var k = 0; k<words.length; k++){
      for (var j = 0; j<greet_key.length; j++){
        if(words[k]==greet_key[j]){
          return greet_resp[j]
        }}
  }}

//old version of joke matcher (only matches exact word)
function matchjoke(words){
  for (var n = 0; n<words.length; n++){
    if(pundict.hasOwnProperty(words[n])){
      var rand = Math.floor(Math.random()*pundict[words[n]].length)
      return pundict[words[n]][rand]}
  }}

//new version of joke matcher - returns a joke based on the first string it finds that contains a key
function matchjoke2(words){
  for (var n = 0; n<words.length; n++){
    for (var m=0; m<Object.keys(pundict).length; m++){     var key=Object.keys(pundict)[m]
      var trigger= new RegExp(key)
      if(trigger.test(words[n])){
        var rand = Math.floor(Math.random()*pundict[key].length)
        return pundict[key][rand]}}
  }}

//return random joke (future version: avoid taking jokes that require the key as context)
function randkey(obj){
  var rand = Math.floor(Math.random()*obj.length)
  return rand}

function randpun(){
  var getkey=randkey(Object.keys(pundict));
  return pundict[Object.keys(pundict)[getkey]][Math.floor(Math.random()*pundict[Object.keys(pundict)[getkey]].length)]
}

//craft response
function response(id){
  var words=convertinput(takeinput(id));
  var output="I respond: ";
  var joke=matchjoke2(words);
  var greeting=matchgreet(words);
  var random=randpun()
  if (joke) {
    output+=joke}
  else if (greeting){
    output+=greeting}
  else{
    output+="I can't think of a pun for what you said, but here's a joke about something else: "+random};
  return output}

//show response on webpage
function addtext(text){
  var para=document.createElement("p");
  var node=document.createTextNode("You said: "+text+". "+response('ib'));
  para.appendChild(node);
  var element = document.getElementById("convo");
  var child = document.getElementById('ib');
  element.insertBefore(para,child);
}