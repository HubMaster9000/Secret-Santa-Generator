//Add Players and Emails into Arrays from Input fields
angularApp.factory('sort', ['$http', function ($http) {


//Randomly assign players to their secret santa
var players = $scope.players;

function getMatched(player){
  player.secretSanta = getRandomPlayer();
  if(player.secretSanta === player || player.secretSanta.assigned === true){
    player.secretSanta = getRandomPlayer();
  }
  player.secretSanta.assigned = true;
};

function getRandomPlayer(){
  return players[Math.floor(Math.random()*players.length)];
};

function allMatch(){
  for(var i=0; i<players.length; i++){
    getMatched(players[i]);

  }
};


function createPairs(){
  allMatch();
}

  function sendEmail() {
    players.forEach(function (player) {
       $http.post('http://localhost/mail.php', player);
    });
  }

  return {
    createPairs : createPairs,
    sendEmail : sendEmail
 }
}]);
