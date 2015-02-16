//

var perms = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
var rgb = 'rgb';

function permuteColor(color, permutation) {
  var p = perms[permutation % perms.length];

  return color.substr(2 * p[0], 2) +
    color.substr(2 * p[1], 2) +
    color.substr(2 * p[2], 2);
};

function invertOneColor(color) {
  return toPaddedString(255 - parseInt(color, 16), 16, 2);
};

function invertColor(color, inversion) {
  var r = color.substr(0, 2),
      g = color.substr(2, 2),
      b = color.substr(4, 2);

  if (inversion & 1)
    r = invertOneColor(r);

  if (inversion & 2)
    g = invertOneColor(g);

  if (inversion & 4)
    b = invertOneColor(b);

  return r + g + b;
};

function colorName(permutation, inversion) {
  var p = perms[permutation % perms.length];
  var name = rgb[p[0]] + rgb[p[1]] + rgb[p[2]];

  if (inversion & 1)
    name = name.replace('r', 'R');

  if (inversion & 2)
    name = name.replace('g', 'G');

  if (inversion & 4)
    name = name.replace('b', 'B');

  return name;
};
