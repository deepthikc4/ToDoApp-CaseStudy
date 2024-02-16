
var myDiv = document.getElementById('tablecontainer');

function ajaxcall()
{
 // Create a table
var table = document.createElement("table");
var tbody = document.createElement('tbody');


// Create header row
var headerRow = table.insertRow(0);
var headerId = headerRow.insertCell(0);
var headerTitle = headerRow.insertCell(1);
var headerStatus = headerRow.insertCell(2);
headerId.innerHTML = "<b>No</b>";
headerTitle.innerHTML = "<b>Task</b>";
headerStatus.innerHTML = "<b>Status</b>";
   
    // create XHR Request
    var xhttp=new XMLHttpRequest();
    // Wait fr the response
    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4 &&this.status==200)
        {
    
    
    var data=JSON.parse(this.responseText);
    for(let i=0;i<data.length;i++)


    {   
     
    var row = table.insertRow(i + 1);
    var cellId = row.insertCell(0);
    var cellTitle = row.insertCell(1);
    var cellStatus = row.insertCell(2);

    
    cellId.innerHTML = data[i].id;
    cellTitle.innerHTML =data[i].title;

    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class", "allcheckboxes");
    checkbox.id=data[i].id;
    // checkbox.checked = data[i].completed;
    checkbox.disabled = data[i].completed; 
    cellStatus.appendChild(checkbox);  
    
    }
   

    table.appendChild(tbody);
    document.body.appendChild(table);
    //  document.myDiv.appendChild(table);
  
    
    

    // // Append the table to the div
    // myDiv.appendChild(table);
    
  
        }
    }
    
   
   
      // initiate the request

      xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
      // send the request
      xhttp.send();
  
  }window.onload =ajaxcall;

  
  
  var counter=0;
  function display()
  {
    
alert("Congrats. 5 Tasks have been Successfully Completed")

   
  }

  
  function checkcompleted(display)
  {
    var eventToClick = document.getElementsByClassName('allcheckboxes');

    return new Promise((resolve, reject) => {
        

        setTimeout(function(){
       
      
    
            if (eventToClick.length > 0) {
              console.log(eventToClick);
              for (var i = 0; i < eventToClick.length; i++) {
              //   console.log(eventToClick[i]);
                eventToClick[i].addEventListener('click', function() {
                  if (this.checked) {
                  //   console.log("Checkbox is checked..");
                    counter++;
                  } else {
                    counter--;
                    console.log("Checkbox is not checked..");
                  }
                  if (counter == 5) {
                    console.log('5 check boxex clicked');
                    // display();
                    resolve();
                    }
                    // else{
                    //     reject("error");
                    // }
                  console.log(counter)
                }); 
            }  } 
    
        },2000);
    })
   
}
checkcompleted()

.then(display)
// .catch(function(e)
// {
//     console.log(e);
// })

// checkcompleted(display);
  





    





