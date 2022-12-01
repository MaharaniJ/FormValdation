function submitButton(){

    var firstname = document.getElementById('first-name').value;
    var lastname  = document.getElementById('last-name').value;
    var address   = document.getElementById('address').value;
    var pincode   = document.getElementById('pincode').value;
    var state     = document.getElementById('state').value;
    var country   = document.getElementById('country').value;
 
    var gender
    if(document.getElementById('male').checked){
        gender ='male'
    } else if(document.getElementById('female').checked)
    {
        gender = 'female'
    }

 // check for list of checked checkboxes 
    let checkboxes = document.querySelectorAll('input[name="foodItems"]:checked');

    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    
    if(values.length<2)
     {
      alert("Please select atleast 2 Items")
      td6.innerHTML="";
     }
    
 let table = document.getElementById("formTable");
   
 // Create row element
 let row = document.createElement("tr")

 // Create cell content
 let c1 = document.createElement("td")
 let c2 = document.createElement("td")
 let c3 = document.createElement("td")
 let c4 = document.createElement("td")
 let c5 = document.createElement("td")
 let c6 = document.createElement("td")
 let c7 = document.createElement("td")
 let c8 = document.createElement("td")

 // Insert data to cells
 c1.innerHTML = firstname
 c2.innerHTML = lastname
 c3.innerHTML = address
 c4.innerHTML = pincode
 c5.innerHTML = gender
 c6.innerHTML = values   //Food choices
 c7.innerHTML = state
 c8.innerHTML = country
 
 // Append cells to row
 row.appendChild(c1);
 row.appendChild(c2);
 row.appendChild(c3);
 row.appendChild(c4);
 row.appendChild(c5);
 row.appendChild(c6);
 row.appendChild(c7);
 row.appendChild(c8);

 // Append row to table body
 table.appendChild(row)

 formclear();
}

//clear the input fields after appending record in the table
function formclear(){

   firstname.value="";
   lastname.value="";
   address.value="";
   pincode.value="" ;
   male.value="";
   female.value="";
   state.value="";
   country.value="";

 $( "input" ).prop( "checked", false );
}
