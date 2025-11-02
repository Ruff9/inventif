(function() {
  randomColor();
}());

function randomColor() {
  var colorList = [
    '#DD0A39',
    '#FD3000',
    '#678F8D',
    '#D86090',
    '#828EEC',
    '#F9A602',
    '#3CB371'
  ];

  var randomColor = colorList[Math.floor(Math.random() * colorList.length)];

  document.documentElement.style.setProperty(`--primary-color`, randomColor);
}
