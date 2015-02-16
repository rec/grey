var INTERVAL = 1000 / 7.83;
var MAX = 32768;
var MAX_MULT = 10;
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

function set_element(name, string) {
  var element = document.getElementById(name);
  element.innerHTML = string;
};

function Grey(table, increment) {
  this.count = 0;
  this.color = new Guan(256, 3);
  this.digits8 = new Guan(8, 5);
  this.digits2 = new Guan(2, 15);
  this.table = table;
  this._increment = increment || 1;

  this.display = function() {
    var d2 = this.digits2.toString();
    set_element('digits2', chunkString(d2, 3).join(' '));
    set_element('digits8', this.digits8.toString());
    table.setColor(this.getColor());
  };

  this.display();
};

Grey.prototype.increment = function() {
  for (var i = 0; i < this._increment; ++i) {
    this.count++;
    if (this.count >= 2 * MAX)
      this.count = 0;
    if (!(this.count % 2)) {
      this.digits2.increment();
      this.digits8.increment();
    }
    this.color.increment();
  }
  this.display();
};

Grey.prototype.getColor = function() {
  var result = [];
  for (var i = 0; i < 3; ++i)
    result.push(toPaddedString(this.color.code[i], 16, 2));
  return result.join('');
};

function runGrey(table) {
  var mult = 1.0;
  var search = window.location.search;
  if (search.length)
    mult = parseFloat(search.substr(1));

  var increment = 1.0;
  if (mult > MAX_MULT) {
    increment = Math.ceil(mult / MAX_MULT);
    mult = MAX_MULT;
  }

  var grey = new Grey(table, increment);
  setInterval(function() { grey.increment(); }, INTERVAL / (mult * 2.0));
};

//
