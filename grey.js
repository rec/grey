var counter = 0;
var INTERVAL = 1000 / 7.83;
var MAX = 32768;
var ZEROES = '000000';
var SIZE = 5;
var BITS = ['000', '001', '010', '011', '100', '101', '110', '111'];

function toPaddedString(s, base, length) {
  return (ZEROES + s.toString(base)).slice(-length);
};

function to_grey(i) {
  return ((i >> 1) ^ i).toString(8);
};

function set_element(name, string, color) {
  var element = document.getElementById(name);
  element.innerHTML = string;
  element.style.color = color;
};

function increment() {
  var grey = to_grey(counter);
  var g = toPaddedString(grey, 8, 5);
  var b = '';
  for (var i in g)
    b += BITS[parseInt(g[i])] + ' ';

  var color = '#' + toPaddedString(2 * grey, 16, 6);

  set_element('digits', g, color);
  set_element('digits2', b, color);

  counter += 1;
  if (counter >= MAX)
    counter = 0;
};
