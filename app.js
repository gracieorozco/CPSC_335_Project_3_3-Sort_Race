// Table Creation
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
  for (var i = 0; i < 20; i++) {
    var row = createRow(sort_initial, i);
    var td = createData(sort_name + i);
    td.setAttribute('style', 'border:1px solid;padding:15px')
    row.appendChild(td);
    div.appendChild(row);
  }
  return div;
}

function main() {
  var div = createTable('merge_sort_data', 'm');
  document.getElementById('merge_sort_col').appendChild(div);
  div = createTable('quick_sort_data', 'q');
  document.getElementById('quick_sort_col').appendChild(div);
  div = createTable('insertion_sort_data', 'i');
  document.getElementById('insertion_sort_col').appendChild(div);
}
