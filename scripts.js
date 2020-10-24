/* Add your JavaScript to this file */
window.onload = function(){
  let button = Array.from(document.getElementsByClassName("btn"))[1];
  let p = document.getElementById("news-p");
  let form = document.getElementById("email-form");

  button.addEventListener("click", event=>{
    event.preventDefault();
    let val = document.getElementById("email");
    console.log(val.value);
    if(val.value==""){
      val.placeholder="Enter valid email address";
    } else{
      let nval = val.value.italics().fontcolor("#8fe5eb");
      p.remove();
      form.remove();
      let dev = Array.from(document.getElementsByClassName("message"))[0];
      let h2 = document.createElement("h2");
      h2.innerHTML="Thank You! Your email address "
      +nval+" has been added to our mailing list!";
      dev.appendChild(h2);
    }
  })
};
