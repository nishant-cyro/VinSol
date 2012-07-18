
rno = 2;

function toEdit(save)
{
    var row = document.getElementById("r"+save.name);
    var name = document.createElement('input');
    name.id = 'r' + save.name + 'c0';
    name.type = 'text';
    name.value = row.cells[0].innerHTML;
    row.cells[0].innerHTML = '';
    row.cells[0].appendChild(name);
 

    var email = document.createElement('input');
    email.id = 'r' + save.name + 'c1';
    email.type = 'text';
    email.value = row.cells[1].innerHTML;
    row.cells[1].innerHTML = '';
    row.cells[1].appendChild(email);
  

    var save1 = document.createElement('input');
    save1.type = 'button';
    save1.id = save.name;
    save1.value = 'Save';
    save1.setAttribute('onclick', 'changeRow(this)');
    row.cells[2].innerHTML = '';
    row.cells[2].appendChild(save1);

}

function toDelete(del)
{
    var element=document.getElementById("r"+del.name);
    element.parentNode.removeChild(element);
}



function changeRow(save) {
    var row = document.getElementById("r"+save.id);
    row.cells[0].innerHTML = document.getElementById("r"+save.id+"c0").value;
    row.cells[1].innerHTML = document.getElementById("r"+save.id+"c1").value;
    var edit = document.createElement('a');
    edit.href = '#edit';
    edit.innerHTML = 'Edit';
    edit.name =save.id;
    edit.setAttribute('onclick', 'toEdit(this)');
    var del = document.createElement('a');
    del.href = '#edit';
    del.name =save.id;
    del.innerHTML = 'Delete';
    del.setAttribute('onclick', 'toDelete(this)');
    row.cells[2].innerHTML = '';   
    row.cells[2].appendChild(edit);
    row.cells[2].appendChild(del);
}

function insertRow() {

    var table=document.getElementById('myTable');
    var row=table.insertRow(table.rows.length);
    row.id = "r" + rno;
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    
    var name = document.createElement('input');
    name.id = 'r' + rno + 'c0';
    name.type = 'text';
    row.cells[0].appendChild(name);
 

    var email = document.createElement('input');
    email.id = 'r' + rno + 'c1';
    email.type = 'text';
    row.cells[1].appendChild(email);
  

    var save1 = document.createElement('input');
    save1.type = 'button';
    save1.id = rno;
    save1.value = 'Save';
    save1.setAttribute('onclick', 'changeRow(this)');
    row.cells[2].appendChild(save1);

     rno = rno + 1;
}
