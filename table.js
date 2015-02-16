function makeTable(columns, rows) {
  var table = document.createElement('table');
  table.style.borderSpacing = 10;
  for (var row = 0; row < rows; ++row) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var column = 0; column < columns; ++column) {
      var td = document.createElement('td');
      tr.appendChild(td);
      td.style.backgroundColor = 'red';
      td.style.width = 20;
      td.style.height = 20;
      td.style.margin = 10;
      td.style.margin_top = 10;
    }
  }
  return table;
};
