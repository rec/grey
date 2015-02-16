// Javascript implementation of
// http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.119.1344&rep=rep1&type=pdf

function Guan(radix, digits) {
  this.radix = radix;
  this.digits = digits;
  this.code = new Array(digits + 1);
  this.direction = new Array(digits + 1);

  this.clear = function() {
    for (var i = 0; i <= this.digits; ++i) {
      this.code[i] = 0;
      this.direction[i] = 1;
    }
  };

  this.clear();
};

Guan.prototype.increment = function() {
  var found = false;
  for (var i = 0; !found && i < this.digits; ++i) {
    var next = this.code[i] + this.direction[i];
    found = (next < this.radix && next >= 0);
    if (found)
      this.code[i] = next;
    else
      this.direction[i] *= -1;
  }
  if (!found)
    this.clear();
};

Guan.prototype.toString = function() {
  var out = [];
  for (var i = this.digits; i--; )
    out.push(this.code[i].toString());
  return out.join('');
};

//
