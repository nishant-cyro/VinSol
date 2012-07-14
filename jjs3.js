
rno = 2;

function toEdit(save)
{
  var row = document.getElementById("r"+save.name);
  row.cells[0].innerHTML = '<input type = "text" id = "r' + save.name + 'c0" value ="' + row.cells[0].innerHTML + '" />';
  row.cells[1].innerHTML = '<input type = "text" id = "r' + save.name + 'c1" value ="' + row.cells[1].innerHTML + '" />';
  row.cells[2].innerHTML = '<input type = "button" id = "' + save.name + '" value = "Save" onclick = "insertRow(this)" />'; 
}

function toDelete(del)
{
  var element=document.getElementById("r"+del.name);
  element.parentNode.removeChild(element);
}



function changeRow(save)
{
  var row = document.getElementById("r"+save.id);
  row.cells[0].innerHTML = document.getElementById("r"+save.id+"c0").value;
  row.cells[1].innerHTML = document.getElementById("r"+save.id+"c1").value;
  row.cells[2].innerHTML = '<a href="#edit" onclick="toEdit(this)" name="' + save.id + '" >Edit</a> / <a href = "#delete" name="' + save.id + '" onclick="toDelete(this)">Delete</a>';
}

function insertRow()
{
  var table=document.getElementById("myTable");
  var row=table.insertRow(table.rows.length);
  row.id = "r" + rno;
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  cell1.innerHTML='<input type = "text" id = "r' + rno + 'c0" />';
  cell2.innerHTML='<input type = "text" id = "r' + rno + 'c1" />';
  cell3.innerHTML='<input type = "button" id = "' + rno + '" value = "Save" onclick = "changeRow(this)"/>';
  rno = rno + 1;
}
