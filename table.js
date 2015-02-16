function makeTable(columns, rows, spacing, width, height) {
  var table = document.createElement('table');
  table.style.borderSpacing = spacing || 10;
  for (var row = 0; row < rows; ++row) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var column = 0; column < columns; ++column) {
      var td = document.createElement('td');
      tr.appendChild(td);
      td.style.width = width || 20;
      td.style.height = height || width || 20;
    }
  }
  return table;
};

function makeColorTable() {
  var table = makeTable(8, 6, 8, 32);
  for (var permutation = 0; permutation < 6; ++permutation) {
    var row = table.rows[permutation];
    for (var inversion = 0; inversion < 8; ++inversion) {
      var cell = row.cells[inversion];
      cell.innerHTML = colorName(permutation, inversion);
    }
  }
  return table;
};
