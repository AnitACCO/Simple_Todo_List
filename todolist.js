var globalindx;
var list = []
list = JSON.parse(localStorage.getItem('list'));
updateDom();

function blankCheck(){
    var item = document.getElementById("list_item").value.trim()
    if(item != ''){
        document.getElementById("add").disabled = false;
        document.getElementById("update").disabled = false;
    }
    else{
        document.getElementById("add").disabled = true;
        document.getElementById("update").disabled = true;
    }
}

function addToList(){
    var item = document.getElementById("list_item").value.trim()
    if(item != ''){
        list.push(item);
        console.log(list)    
        updateDom()
    }
    else{
        alert("Cannot take blank")
    }
} 

function deleteItem(id){
    list.splice(id,1)
    updateDom();
}

function updateDom(){
    str = '<table>'
    for (let i = 0;i< list.length;i++) {
        str += `<tr><td class="listtext"><li>${list[i]}</li></td><td class="listbutton"><button onclick = "editItem(${i})">Edit</button><button onclick="deleteItem(${i})">Delete</button>`    
        if(i != 0){
            str += `<button onclick = swapUp(${i})>Up</button>` 
        }
        if(i<list.length-1){
            str += `<button onclick = swapDown(${i})>Down</button>`
            
        }
        str += '</td></tr>'
    }
    str += "</table>"
    document.getElementById('Display_List').innerHTML = str
    document.getElementById('list_item').value = ''
    document.getElementById('update').style.display = 'none'
    document.getElementById('add').style.display = 'inline'
    localStorage.setItem('list', JSON.stringify(list));
}


function editItem(id){
    document.getElementById('update').style.display = 'inline'
    document.getElementById('add').style.display = 'none'
    document.getElementById('list_item').value = list[id]
    globalindx = id
}

function updateItem(){
    var item = document.getElementById("list_item").value.trim()
    if(item.trim() != ''){
        list[globalindx] = item;
        updateDom()
        
    }
    else{
        alert("Cannot take blank")
    }
}

function swapUp(id){
    let temp = list[id]
    list[id] = list[id-1]
    list[id-1] = temp
    console.log(list)
    updateDom()

}


function swapDown(id){
    var temp = list[id]
    list[id] = list[id+1]
    list[id+1] = temp
    console.log(list)

    updateDom()
}

