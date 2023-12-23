if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceworker.js")
        .then(res =>{
            console.log("service worker registered")
            Notification.requestPermission().then(res =>{
                if(Notification.permission == 'granted'){
                    console.log("Granted Permission")
                    return;
                }
                console.log(res)
            })
        }) 
        .catch(err => console.log("service worker not registered", err))
    })
    navigator.serviceWorker.ready.then((Notification) => {
        var options = {
            body: 'This is reminder message',
            icon: '/assets/icons/icon-48x48.png'
        };
        Notification.showNotification('This is Namaz Prayer App', options);
    })
}

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register("/serviceworker.js");
//  }



var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function rigistered() {
  event.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("emailAdd").value;
  let password = document.getElementById("password").value;


  console.log(firstName , lastName , email ,password)
if(firstName === ""){
    swal.fire({
        icon: "error",
        title: "Form input field should not be empty",
        text: "Plz enter your first name",
    })
}else if(lastName === ""){
    swal.fire({
        icon: "error",
        title: "Form input field should not be empty",
        text: "Plz enter your last name",
    })
}else if(email === ""){
    swal.fire({
        icon: "error",
        title: "Form input field should not be empty",
        text: "Plz enter your email address",
    })
}else if(password === ""){
    swal.fire({
        icon: "error",
        title: "Form input field should not be empty",
        text: "Plz enter your password"
    })
}else{
    swal.fire({
        icon: "success",
        title: `${firstName}${lastName} Registration Successfully `,
        showConfirmButton: false,
        timer: 2000,
    })
    let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    }
    let arrData = JSON.parse(localStorage.getItem("userDataArray")) || [];
    arrData.push(userData);
    localStorage.setItem("userDataArray" , JSON.stringify(arrData));
    setTimeout(() =>{
      window.location = "./prayertime.html"
    },1000)

}

}
let signUp = document.getElementById("signUp");
signUp.addEventListener("click", rigistered);

 






