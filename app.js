$(function () {
  var $main = $("#main")
    , width = Math.ceil($(document).width() / 10) * 10
    , height = Math.ceil($(document).height() / 10) * 10
    , numCols = width / 10
    , numRows = height / 10
    , numTiles = numCols * numRows
    , tiles = [];
  $main.css('width', width);
  $main.css('height', height);

  for (var i = 0; i < numTiles; i++) {
    var $tile = $('<div>').addClass("tile");
    $main.append($tile);
    tiles.push($tile);
  }

  function paintItBlack() {
    tiles[Math.floor(Math.random()*tiles.length)].css('background', 'black');
    requestAnimationFrame(paintItBlack);
  }

  requestAnimationFrame(paintItBlack);
});