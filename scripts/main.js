// Create a new list item when clicking on the "Add" button
const CreateTodo =()=> { //creates the arrow
  const myli = document.createElement("li");//creates an item
  let inputValue = document.querySelector("#myInput").value; //to select a particular item
  const myUl= document.querySelector("#myUL")//to select a particular item
  const myText = document.createTextNode(inputValue);//to create a  text
  myli.appendChild(myText);//to add an item
  if (inputValue === '') { //a statement to validate if input is empty
                        
    alert("You must write something!");
  } else { //stament showing what to put incase something is written in the checkbox
    myUl.appendChild(myli);// place the created li into the ul
    //document.getElementById("myUL").appendChild(li);
  }
  // document.getElementById("#myInput").value = "";
  
  const myspan = document.createElement("button");//create a span element
  const myxbtn = document.createTextNode("\u00D7");//create an x button
  myspan.className = "close";//give a class of close to the span created
  myspan.appendChild(myxbtn)//put the span inside the list created 'x' (\u0007) inside the 
                    //span created on line 18
  myli.appendChild(myspan);//put the span inside the li created on line 4

  const closeBtnArray = document.querySelectorAll('.close')
  console.log(closeBtnArray)
  console.log(closeBtnArray[0])

  for(let i = 0; i < closeBtnArray.length; i++){

    console.log(closeBtnArray[i])
     function removeTodo (){

      this.parentElement.style.display ='none';
      //closeBtnArray[i]
      console.log(this.parentElement)
    }
    closeBtnArray[i].onclick = removeTodo



  }

};








































// // Create a "close" button and append it to each list item
// //let joanTodo = document.getElementsByTagName("LI");
// //let i;
// for (let i = 0; i < joanTodo.length; i++) { //enables the word plus the length
//   //of the element
//   const span = document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   joanTodo[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// const close = document.getElementsByClassName(".close");
// let i;
// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     const div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// const list = document.querySelector('ul'); //select an item 
// list.addEventListener('click', function(ev) {//attaches an event handler to an element 
//   //without overwriting existing event handlers.
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);