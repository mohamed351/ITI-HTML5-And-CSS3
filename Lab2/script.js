var progressArr =[];
var HoldArr =[];
var reviewArr = [];
var doneArr = [];
window.addEventListener("load",function(){

    InitalLocalStorage();
   
    DragAndDropOver();
    var button = document.getElementById("add");
    var docElement = document.getElementById("txt-element");
    this.console.log(button);
    button.addEventListener("click",function(){

        CreateElementInProgress(docElement.value);
        docElement.value ="";
        FillArrays();
    });

});
var hello ;
function CreateElementInProgress(txt)
{
    var element = document.createElement("div");
    element.classList.add("task-element");
    element.draggable=true;
    element.id ="ele";

    element.ondragstart = function(a){
       
       hello = this;
     
        a.dataTransfer.setData("text",a.target.outerHTML);
       
       
    }
    element.ondrop = function(a){
        a.preventDefault();
    
    }
    
    element.innerText = txt;
    progress.append(element);
    

}
function CreateElementInHold(txt){
    var element = document.createElement("div");
    element.classList.add("task-element");
    element.draggable=true;
    element.id ="ele";
    element.style.backgroundColor ="#333";
    element.style.color ="#fff";
    element.ondragstart = function(a){
       
       hello = this;
     
        a.dataTransfer.setData("text",a.target.outerHTML);
       
       
    }
    element.ondrop = function(a){
        a.preventDefault();
    
    }
    
    element.innerText = txt;
    onhold.append(element);
}


function CreateElementInReview(txt){
    var element = document.createElement("div");
    element.classList.add("task-element");
    element.draggable=true;
    element.id ="ele";
    element.style.backgroundColor ="#2980b9";
    element.style.color ="#fff";
    element.ondragstart = function(a){
       
       hello = this;
     
        a.dataTransfer.setData("text",a.target.outerHTML);
       
       
    }
    element.ondrop = function(a){
        a.preventDefault();
    
    }
    
    element.innerText = txt;
    Review.append(element);
}


function CreateElementInDone(txt){
    var element = document.createElement("div");
    element.classList.add("task-element");
    element.draggable=true;
    element.id ="ele";
    element.style.backgroundColor ="#27ae60";
    element.style.color ="#fff";
    element.ondragstart = function(a){
       
       hello = this;
     
        a.dataTransfer.setData("text",a.target.outerHTML);
       
       
    }
    element.ondrop = function(a){
        a.preventDefault();
    
    }
    
    element.innerText = txt;
    Done.append(element);
}


function DragAndDropOver()
{
    let elements = document.querySelectorAll(".block-element");
    for(i of elements){
        
     
        i.ondrop= function(a){
          if(a.target.id != "ele"){

            if(a.target.id == "onhold"){
                hello.style.backgroundColor ="#333";
                hello.style.color ="#fff";
            }
            else if(a.target.id == "progress"){
                hello.style.backgroundColor ="#fff";
                hello.style.color ="#000";
            }
            else if (a.target.id == "Review"){
                hello.style.backgroundColor ="#2980b9";
                hello.style.color ="#fff";
            }
            else if (a.target.id == "Done"){
                hello.style.backgroundColor ="#27ae60";
                hello.style.color ="#fff";
            }
            a.preventDefault();
            var data = a.dataTransfer.getData("text");
            a.toElement.append(hello);
            FillArrays();
            a.stopPropagation();
          }
         
        }

        i.ondragover = function(a){
            a.preventDefault();
            a.stopPropagation();
        }
       
    }
}

function InitalLocalStorage()
{
    if(localStorage.getItem("onprogress") ==null)
    {
        localStorage.setItem("onprogress",JSON.stringify([]));

    }
    else
    {
      let element =  JSON.parse(localStorage.getItem("onprogress"));
      for(i of element){
          CreateElementInProgress(i);
      }
      
    }
   if(localStorage.getItem("onhold") ==null){
        localStorage.setItem("onhold",JSON.stringify([]));
    }
    else
    {
      let element =  JSON.parse(localStorage.getItem("onhold"));
      for(i of element){
        CreateElementInHold(i);
      }
      
    }
   if(localStorage.getItem("Review") ==null){
        localStorage.setItem("Review",JSON.stringify([]));
    }
    else
    {
        let element =  JSON.parse(localStorage.getItem("Review"));
      for(i of element){
        CreateElementInReview(i);
      }
    }
     if(localStorage.getItem("Done") ==null){
        localStorage.setItem("Done",JSON.stringify([]));
    }
    else
    {
        let element =  JSON.parse(localStorage.getItem("Done"));
        for(i of element){
            CreateElementInDone(i);
        }
    }
    



    

}
function FillArrays(){
 
    localStorage.setItem("onprogress","");
    localStorage.setItem("onhold","");
    localStorage.setItem("Review","");
    localStorage.setItem("Done","");
    progressArr = [];
    HoldArr =[];
    reviewArr = [];
    doneArr = [];

    if(localStorage.getItem("onprogress") != null){
        
     var element=   document.getElementById("progress").querySelectorAll(".task-element")
     for( i of element){
        progressArr.push(i.innerText);
     }
    
     localStorage.setItem("onprogress",JSON.stringify(progressArr));
        
    }


    if(localStorage.getItem("onhold") != null){
        
        var element=   document.getElementById("onhold").querySelectorAll(".task-element")
        for( i of element){
            HoldArr.push(i.innerText);
         }
        
         localStorage.setItem("onhold",JSON.stringify(HoldArr));
    }


    if(localStorage.getItem("Review") != null){
        var element=   document.getElementById("Review").querySelectorAll(".task-element")
        for( i of element){
            reviewArr.push(i.innerText);
         }

        
         localStorage.setItem("Review",JSON.stringify(reviewArr));
        
    }


    if(localStorage.getItem("Done") != null){
        var element=   document.getElementById("Done").querySelectorAll(".task-element")
        for( i of element){
            doneArr.push(i.innerText);
         }
        
         localStorage.setItem("Done",JSON.stringify(doneArr));
    }



}


