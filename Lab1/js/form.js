window.addEventListener("load",function(){

   this.document.getElementById("myform").addEventListener("submit",function(e){
       e.preventDefault();

      
    var cust = new CustomerMessage();
    cust.name =this["name"].value;
    cust.email = this["email"].value;
    cust.subject = this["subject"].value;
    cust.message = this["message"].value;
     JsonData = JSON.stringify(cust);
     SendData(JsonData);

    

   })

});

//ecma Script 6

class CustomerMessage{
    constructor(name,email,subject, message){
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    };


}
//ecma Script 6
//image this is kind of api's 
async function SendData(jsonData)
{
    
    let  item = await fetch("../js/application.json",{
       method:'POST',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:jsonData

       
    });
    return await item.json();



}