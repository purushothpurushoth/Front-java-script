var container = document.getElementById("list-container");
var middlecontainer = document.getElementById("addtask-container");
var middleIcon = document.getElementById("middle-side-icon");
var middleText = document.getElementById("middle-side-text");
var middleDate = document.getElementById("date");
var taskId=0;
console.log(middleDate);
var count = 0;
var list = [
  { text: 'My day', icon: '<span class="material-symbols-outlined">sunny</span>', id: 'my day' },
  { text: 'Important', icon: '<span class="material-symbols-outlined">star</span>', id: 'important' },
  { text: 'Planned', icon: '<span class="material-symbols-outlined">calendar_month</span>', id: 'planned' },
  { text: 'Assigned to me', icon: '<span class="material-symbols-outlined">person</span>', id: 'assigned' },
  { text: 'Tasks', icon: '<span class="material-symbols-outlined"> house</span>', id: 'tasks' }
]
var tasks = []

var selectedcategory = list[0];

function init() {
  addlist();
  renderfunction();
  date();
  catergoryfunction();
  addtask();
   menu();
}

function date() {
  const current = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const date = document.getElementById("date");
  date.innerHTML = (current.toLocaleDateString('en-us', options));
}

function renderfunction() {
  for (let i = 0; i < list.length; i++) {
    var listcontainer = document.createElement('div');
    listcontainer.classList.add("list");
    const icon = document.createElement('div');
    icon.classList.add("icon");
    const text = document.createElement('div');
    text.classList.add("text");
    icon.innerHTML = list[i].icon;
    text.innerHTML = list[i].text;
    listcontainer.appendChild(icon);
    listcontainer.appendChild(text);
    listcontainer.setAttribute("id", list[i].id);
    listcontainer.addEventListener("click", selectcategory);
    container.appendChild(listcontainer);
  }
}

function catergoryfunction() {
  for (var i = 0; i < tasks.length; i++) {
    if(selectedcategory.id==tasks[i].catId){
    var taskcontainer = document.createElement('div');
    taskcontainer.classList.add("text-container");
    var radiobutton = document.createElement('div');
    radiobutton.classList.add("radio-button");
    var taskheading = document.createElement('div');
    taskheading.classList.add("tasks-heading");
    radiobutton.innerHTML = tasks[i].name;
    taskheading.innerHTML = tasks[i].icon;
    taskcontainer.appendChild(taskheading);
    taskcontainer.appendChild(radiobutton);
    middlecontainer.appendChild(taskcontainer);
    }
  }
}


function selectcategory() {
  var id = this.id;
  for (let i = 0; i < list.length; i++) {
    if (id == list[i].id) {
      middleIcon.innerHTML = list[i].icon;
      middleText.innerHTML = list[i].text;
      selectedcategory = list[i];
      middlecontainer.innerHTML = "";
      catergoryfunction();
    }
  }
}

function addlist() {
  document.getElementById("text").addEventListener("keydown", added);
}

function added() {
  if (event.key == "Enter") {
    const text = document.getElementById("text").value;
    const icon = '<span class="material-symbols-outlined"> list</span>';
    const newlist = document.getElementById("list-container");
    var id = count++;
    newlist.innerHTML = "";
    list.push({ text: text, icon: icon, id: id });
    renderfunction();
  }
}

function addtask() {
  document.getElementById("taskadding").addEventListener("keydown", addingtask);
}

function addingtask() {
  if (event.key == "Enter") {
    var text = document.getElementById("taskadding");
    let name = text.value;
    var middlecontainer = document.getElementById("addtask-container");
    middlecontainer.innerHTML = "";
    tasks.push({catId:selectedcategory.id ,name: name,icon:'<span class="material-symbols-outlined">radio_button_unchecked</span>',id:taskId++});
    catergoryfunction();
  }
}

function menu(){
  document.getElementById("menu-button").addEventListener("click",menubutton);
}
function menubutton(){
      var display = document.getElementById("left-side");
      middleIcon.innerHTML='<span class="material-symbols-outlined">menu</span>';
      var middlesidecontainer=document.getElementById("middle-side");
      middlesidecontainer.classList.remove("middle-side");
      middlesidecontainer.classList.add("show-middle-side");
      display.classList.remove("left-side");
      display.classList.add("hidden-left-side");
}
function showdisplay(){
  document.getElementById().addEventListener("click",display);
}
function display(){

}

init();


