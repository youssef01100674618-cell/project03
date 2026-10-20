let array = [
    {name : "Youssef" , age  : 21 , city : "Cairo"} ,
    {name : "Ali" , age  : 18 , city : "Giza"} ,
    {name : "Mohamed" , age  : 23 , city : "Monofia"} ,
    {name : "omar" , age  : 30 , city : "Ismalia"} ,
    {name : "Osama" , age  : 41 , city : "Alexandria"} ,
    {name : "Ali" , age  : 15 , city : "MarsaMatroh"} ,
    {name : "Youssef" , age  : 20 , city : "Auxor"} ,
    {name : "Sameh" , age  : 33 , city : "Cairo"} ,
    {name : "Mohamed" , age  : 15 , city : "Giza"} ,
    {name : "Ahmed" , age  : 30 , city : "ismalia"} ,
    {name : "Osama" , age  : 20 , city : "MarsaMatroh"} ,
]
let currentArray = array ;
function print(element) {
    document.querySelector("table").innerHTML+= `<tr> <td> ${element.name} </td> <td> ${element.age} </td> <td> ${element.city} </td></tr>`;
}
function action(event) {
    let newArray = [] ;
    if( event.target.value.trim() == ""){
         newArray = array
    }
    else{
         newArray = array.filter(obj => { return( obj.name.toLowerCase().includes(event.target.value.trim().toLowerCase()) || obj.city.toLowerCase().includes(event.target.value.trim().toLowerCase()) || obj.age === Number(event.target.value.trim().toLowerCase())) })
        
    }
     document.querySelector("table").innerHTML = "<tr id=\"hdr\"><td>name</td><td>age</td><td>city</td>";
    currentArray = newArray 
    currentArray.forEach(ob =>{print(ob)})
}



function sortByName(event) {
    event.preventDefault();
    currentArray.sort((a, b) => a.name.localeCompare(b.name));
    document.querySelector("#myTable").innerHTML = "<tr id=\"hdr\"><td>name</td><td>age</td><td>city</td></tr>";
    currentArray.forEach(ob => print(ob));
}

function sortByAge(event) {
    event.preventDefault();
    currentArray.sort((a, b) => a.age - b.age);
    document.querySelector("#myTable").innerHTML = "<tr id=\"hdr\"><td>name</td><td>age</td><td>city</td></tr>";
    currentArray.forEach(ob => print(ob));
}

function sortByCity(event) {
    event.preventDefault();
    currentArray.sort((a, b) => a.city.localeCompare(b.city));
    document.querySelector("#myTable").innerHTML = "<tr id=\"hdr\"><td>name</td><td>age</td><td>city</td></tr>";
    currentArray.forEach(ob => print(ob));
}

document.querySelector("#sortByName").addEventListener("click", sortByName);
document.querySelector("#sortByAge").addEventListener("click", sortByAge);
document.querySelector("#sortByCity").addEventListener("click", sortByCity);
array.forEach( e => {print(e,array)})



const searchField = document.querySelector("#searchField");
searchField.addEventListener("input" , event => {action(event)})

