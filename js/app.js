console.log('app.js loaded');
$(document).ready(function() {
var pl = 'X';
$('.game-board').on('click', '.square', '.content', function(){
  console.log(pl);
  var val = $(this).children('.content').text();
  if(val === xOrO()){
    console.log('try again');
  }
  else {
    $(this).children('.content').text(pl);
  }
  pl = switchXOrO(pl);

});
});
var p1 = {
  val: 'X',
  color: '#ff0000',
  row: [],
  col: []
},
    p2 = {
      val: 'O',
      color: '#0517bc',
      row: [],
      col: []
    },
    player = 'X';
function clearBoard (){
  $('.content').empty();
}

function xOrO(square){
  return square === 'X' || 'O' ;

}
function switchXOrO (x){
  return x === 'X' ? 'O' : 'X';
}
function getVals(player){
  //check if space is available
  if(!isAvailable()){
    console.log('try again');
  }
  else {
    $(this).children('.content').html(player.val);
  }
}


// var movesMade = {
//   p1 : {
//     row: [1, 2, 3],
//     col: [1, 2, 3]
//   }
//   p2 : {
//     row:[2],
//     col: [2]
//   }
// }
//
// var winnableOutcomes = {
//   rows: [1, 2, 3],
//   col: [1, 2, 3],
//
// }
//
//
// / create winnable outcomes object
//
// / remove each winnable outcome per player based on opponents movesM
