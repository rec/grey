var counter = 0;
var INTERVAL = 1000 / 7.83;
var MAX = 32768;
var ZEROES = '000000';
var SIZE = 5;
var BITS = ['000', '001', '010', '011', '100', '101', '110', '111'];

// From // http://stackoverflow.com/a/14349616/43839
function chunkString(str, len) {
  var _size = Math.ceil(str.length/len),
      _ret  = new Array(_size),
      _offset
  ;

  for (var _i=0; _i<_size; _i++) {
    _offset = _i * len;
    _ret[_i] = str.substring(_offset, _offset + len);
  }

  return _ret;
};

function toPaddedString(s, base, length) {
  return (ZEROES + s.toString(base)).slice(-length);
};

function set_element(name, string, color) {
  var element = document.getElementById(name);
  element.innerHTML = string;
  element.style.color = color;
};

function Grey() {
  this.count = 0;
  this.color = new Guan(256, 3);
  this.digits8 = new Guan(8, 5);
  this.digits2 = new Guan(2, 15);

  this.display = function() {
    var color = '#' + this.getColor();
    var d2 = this.digits2.toString();
    set_element('digits2', chunkString(d2, 3).join(' '), color);
    set_element('digits8', this.digits8.toString(), color);
  };

  this.display();
};

Grey.prototype.increment = function() {
  this.count += 1;
  if (this.count >= 2 * MAX)
    this.count = 0;

  if (!(this.count % 2)) {
    this.digits2.increment();
    this.digits8.increment();
  }
  this.color.increment();
  this.display();
};

Grey.prototype.getColor = function() {
  var result = [];
  for (var i = 0; i < 3; ++i)
    result.push(toPaddedString(this.color.code[i], 16, 2));
  return result.join('');
};

//
