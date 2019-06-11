'use strict';

var WIDTH_CLOUD = 420;
var HEIGHT_CLOUD = 270;
var WIDTH_BAR = 40;
var HEIGHT_BAR = 150;
var GAP_BAR = 50;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLOR_TEXT = '#000000';
var BAR_Y = 100;
var NAME_Y = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, WIDTH_CLOUD, HEIGHT_CLOUD);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = COLOR_TEXT;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', CLOUD_X + (GAP * 2), 40);
  ctx.fillText('Список результатов:', CLOUD_X + (GAP * 2), 65);
  
  var colorsBar = ['rgba(0, 0, 255, 0.8)', 'rgba(0, 0, 255, 0.6)', 'rgba(0, 0, 255, 0.3)', 'rgba(0, 0, 255, 1)'];
  
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = COLOR_TEXT;
    ctx.fillText(names[i], CLOUD_X + WIDTH_BAR + (WIDTH_BAR + GAP_BAR) * i, NAME_Y);
    
    if (names[i] === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
    ctx.fillStyle = colorsBar[i];
  };
    
    var heightDynamic = HEIGHT_BAR * times[i] / maxTime;
    ctx.fillRect(CLOUD_X + WIDTH_BAR + (WIDTH_BAR + GAP_BAR) * i, BAR_Y + (HEIGHT_BAR - heightDynamic), WIDTH_BAR, heightDynamic);
  }
};
