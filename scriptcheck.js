var container=document.getElementById("list-container");
var middleIcon=document.getElementById("middle-side-icon");
var middleText=document.getElementById("middle-side-text");
var middleDate=document.getElementById("date");
console.log(middleDate);
var count = 0;
var list=[
  {text:'My day', icon:'<span class="material-symbols-outlined">sunny</span>',id:'my day'},
  {text:'Important', icon:'<span class="material-symbols-outlined">star</span>',id:'important'},
  {text:'Planned',icon:'<span class="material-symbols-outlined">calendar_month</span>',id:'planned'},
  {text:'Assigned to me',icon:'<span class="material-symbols-outlined">person</span>',id:'assigned'},
  {text:'Tasks',icon:'<span class="material-symbols-outlined"> house</span>',id:'tasks'}
] 

function init(){
  addlist();
  renderfunction();
  date();
  // select();
}

function date(){
  const current =new Date();
  const options = { weekday: 'long',month: 'short', day: 'numeric' };
  const date=document.getElementById("date");
  date.innerHTML=(current.toLocaleDateString('en-us', options));
}

function renderfunction(){
    for(let i=0;i<list.length;i++){
        var listcontainer=document.createElement('div');
        listcontainer.classList.add("list");
        const icon=document.createElement('div');
        icon.classList.add("icon");
        const text=document.createElement('div');
        text.classList.add("text");
        icon.innerHTML=list[i].icon;
        text.innerHTML=list[i].text;
        listcontainer.appendChild(icon);
        listcontainer.appendChild(text);
        listcontainer.setAttribute("id",list[i].id);
        listcontainer.addEventListener("click", selectcategory);
        container.appendChild(listcontainer);
    }
  }


function selectcategory() {
  var id=this.id;
  for(let i=0;i<list.length;i++){
    if(id==list[i].id){
      middleIcon.innerHTML=list[i].icon;
      middleText.innerHTML=list[i].text;
    }
  }
}

 function addlist(){
  document.getElementById("text").addEventListener("keydown", added);
 } 

 function added(){
     if(event.key=="Enter"){
      const text=document.getElementById("text").value;
      const icon='<span class="material-symbols-outlined"> list</span>';
      const newlist=document.getElementById("list-container");
      var id=count++;
      newlist.innerHTML="";
      list.push({text:text,icon:icon,id:id});
      renderfunction();
     }
 } 
init();


