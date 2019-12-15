// Control
function main() {
  var input = ["0", "B", "A", "3", "2", "8", "4", "7", "6", "5", "1", "9"];
  document.getElementById("merge_sort_col").appendChild(createTableRow("merge", "m", "Input: " + input));
  var m = mergeSort(input);
  document.getElementById("merge_sort_col").appendChild(createTableRow("merge", "m", "Result: " + m));

  input = ["0", "B", "A", "3", "2", "8", "4", "7", "6", "5", "1", "9"];
  document.getElementById("quick_sort_col").appendChild(createTableRow("quick", "q", "Input: " + input));
  var q = quickSort(input, 0, input.length - 1);
  document.getElementById("quick_sort_col").appendChild(createTableRow("quick", "q", "Result: " + q));

  input = ["0", "B", "A", "3", "2", "8", "4", "7", "6", "5", "1", "9"];
  document.getElementById("insertion_sort_col").appendChild(createTableRow("insert", "i", "Input: " + input));
  var i = insertionSort(input);
  document.getElementById("insertion_sort_col").appendChild(createTableRow("insert", "i", "Result: " + i));

  document.getElementById("button").setAttribute("onClick", "pressedAgain()");
}

// Table Creation
function createRow(sort_initial) {
  const tr = document.createElement("tr");
  tr.setAttribute("id", sort_initial);
  return tr;
}

function createData(content) {
  const td = document.createElement("td");
  td.textContent = content;
  return td;
}

function createTableRow(sort_name, sort_initial, content) {
  var div = document.createElement("div")
  div.setAttribute("id", sort_name);
  var row = createRow(sort_initial);
  var td = createData(content);
  td.setAttribute("style", "border:1px solid;padding:15px")
  row.appendChild(td);
  div.appendChild(row);
  return div;
}

function pressedAgain() {
  alert("You have pressed this button already. Please refresh the page to retry.");
}

// Algorithms
function mergeSort(input){
  var size = input.length;
  if (size < 2) {
   return input;
  }
  var half = Math.floor(size / 2);
  var left_array = new Array();
  var right_array = new Array();
  for (var i = 0; i < half; i++) {
   left_array.push(input[i]);
  }
  for (var i = half; i < size; i++) {
   right_array.push(input[i]);
  }
  return merge(mergeSort(left_array),mergeSort(right_array));
}

function merge(left_array, right_array){
  var result = new Array();
  var lSize = left_array.length;
  var rSize = right_array.length;
  var l = 0;
  var r = 0;
  var index = 0;
  while(l < lSize && r < rSize){
    if(left_array[l] < right_array[r]){
     result.push(left_array[l]);
     l++;
    }
    else {
     result.push(right_array[r]);
     r++;
    }
  }
  document.getElementById("merge_sort_col").appendChild(createTableRow("merge", "m", left_array));
  document.getElementById("merge_sort_col").appendChild(createTableRow("merge", "m", right_array));
  for (var i = l; i < lSize; i++) {
    result.push(left_array[i]);
    index++;
  }
  for (var i = r; i < rSize; i++) {
    result.push(right_array[i]);
  }
  return result;
}

function quickSort(input, left, right) {
  document.getElementById("quick_sort_col").appendChild(createTableRow("quick", "q", input));
  var index = pivot(input, left, right);
  if (left < index - 1) {
    quickSort(input, left, index - 1);
  }
  if (index < right) {
    quickSort(input, index, right);
  }
  return input;
}

function pivot(input, left, right) {
  var l = left;
  var r = right;
  var p = input[Math.floor((right + left) / 2)];
  while (l <= r) {
    while (input[r] > p) {
      r--;
    }
    while (input[l] < p) {
      l++;
    }
    if (l <= r) {
      var temp = input[l];
      input[l] = input[r];
      input[r] = temp;
      r--;
      l++;
    }
  }
  return l;
}

function insertionSort(input){
  for (var i = 0; i < input.length; i++) {
    var index = input[i];
    document.getElementById("insertion_sort_col").appendChild(createTableRow("insert", "i", input));
    for (var j = i - 1; input[j] > index; j--) {
      input[j + 1] = input[j];
    }
    input[j + 1] = index;
  }
  return input;
}
