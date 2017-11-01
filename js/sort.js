//Add Players and Emails into Arrays from Input fields
var playerNames = []
var playerEmails = []

function addNames (){
    playerNames.push(document.getElementsByClassName("player_name"));
}

function addEmails (){
    playerEmails.push(document.getElementsByClassName("player_email"));
}

//Randomly assign players to their secret santa
var players = [];

function Player(name, email) {

  this.name = name;
  this.secretSanta = [];
  this.assigned = false;
}

var playerJoin = function(name, email) {
  name = new Player(name, email);
  players.push(name);
};

var getMatched = function(player){
  player.secretSanta = getRandomPlayer();
  if(player.secretSanta === player || player.secretSanta.assigned === true){
    player.secretSanta = getRandomPlayer();
  }
  player.secretSanta.assigned = true;
};

var getRandomPlayer = function(){
  return players[Math.floor(Math.random()*players.length)];
};

var allMatch = function(){
  for(var i=0; i<players.length; i++){
    getMatched(players[i]);
    
  }
};

function addPlayers(){
    for (var i=0; i< playerNames.length; i++){
        playerJoin(playerNames[i], playerEmails[i]);
    }
}


function createPairs(){
  addNames();
  addEmails();
  addPlayers();
  allMatch();
}

$(document).ready(function sendData(){
  $.ajax({
    type: "POST",
    url: "mail.php",
    datatype: 'JSON',
    data: {arr: JSON.stringify(players)},
      success: function(data){
        console.log("success:",data);
      },
      failure: function(errMsg) {
        console.error("error:",errMsg);
      }
     });
});

