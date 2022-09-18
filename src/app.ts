import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
    /*
let temp = document.getElementById('project-input');
document.body.appendChild(temp.content);
 
let temp1 = document.getElementById('single-project');
document.body.appendChild(temp1.content);
 
let temp2 = document.getElementById('project-list');
document.body.appendChild(temp2.content);
 
let form = document.getElementById('form');
 
let dataArray = [];
 
 
form.addEventListener('submit', (e) => {
 
e.preventDefault();
 
let data = {
title: String = document.getElementById("title"),
description: String = document.getElementById('description'),
people: Number = document.getElementById('people')
}
 
 
 
if (data.title.value === '' || data.title == null) {
alert('Title required');
return;
 
}
if (data.description.value === '' || data.description.value == null) {
alert('Description required');
return;
 
}
if (data.description.value === 0 || data.description.value == null) {
alert('Peoples number required');
return;
 
}
else {
dataArray.push(data.title.value);
dataArray.push(data.description.value);
dataArray.push(data.people.value);
 
dataArray.forEach(element => {
 
    let content = document.createTextNode(element);
    var li = document.createElement("li");
    li.innerHTML = element;
 
    document.getElementById('list').append(li);
 
});
dataArray = [];
}
 
 
document.querySelector('form').reset();
 
})
*/