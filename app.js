// let todo = [];
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
// add task
// step 1
// btn.addEventListener("click",function(){
//     console.log("clicked");
// });
// step 2
// btn.addEventListener("click",function(){
//  console.log(inp.value);             // for adding task
// })
//step 3: jon text ko add krenge usse likhne ke baad ko code ke text ko zero ke liye
// btn.addEventListener("click",function(){
//  console.log(inp.value);             // jab hum task ko add krde uske baad 
//                                       // vo likha hua na dikhai de text pe ye console pe hoga web pe nhi
//   input.val="";
// })
// step 4: web me text or input ko add krne ke liye jo tum likhoge uske liye 
// btn.addEventListener("click",function(){
//     let item = document.createElement("li");
//     item.innerText=inp.value;
//     ul.appendChild(item);
//  console.log(inp.value);   
//  inp.value="";          
// })
// step 5: delete button kon task ke sath hi bhjna kunki vo nhi aa rahna tha 
// btn.addEventListener("click",function(){
//     let item = document.createElement("li");
//     item.innerText=inp.value;
//   //new add
//     let delbtn=document.createElement("button");
//     delbtn.innertext="delete";
//     delbtn.classList.add("delete");
    
//     item.appendChild(delbtn);
//     ul.appendChild(item);
//  console.log(inp.value);   
//  inp.value="";          
// })




// main code for to do app
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value='';

});
ul.addEventListener("click", function(event){
    if(event.target.nodeName==="BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});



 // bekar code faltu ka code
// let req= prompt("please enter your request");
// while (true){
//     if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req=="list"){
//         console.log("------------ ");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("------------")
//     }
//     else if(req=="add"){
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
// }