
function createRow(sort_initial, number) {
  const tr = document.createElement('tr');
  tr.setAttribute('id', sort_initial + number);
  return tr;
}

function createData(text_input) {
  const td = document.createElement('td');
  td.textContent = text_input;
  return td;
}

function createTable(sort_name, sort_initial) {
  var div = document.createElement('div')
  div.setAttribute('id', sort_name);
  var row = createRow(sort_initial, 1);
  for (var i = 1; i < 10; i++) {
    row = createRow(sort_initial, i);
    for (var j = 0; j < 3; j++) {
      var td = createData(sort_name + j);
      td.setAttribute('style', 'padding:15px')
      row.appendChild(td);
    }
    div.appendChild(row);
  }
  return div;
}

function test() {
  var div = createTable('merge_sort_data', 'm');
  document.getElementById('merge_sort_col').appendChild(div);
  div = createTable('quick_sort_data', 'q');
  document.getElementById('quick_sort_col').appendChild(div);
  div = createTable('insertion_sort_data', 'i');
  document.getElementById('insertion_sort_col').appendChild(div);
}
