if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceworker.js")
        .then(res =>{
            console.log("service worker registered")
            Notification.requestPermission().then(res =>{
                if(Notification.permission == 'granted'){
                    console.log("Granted Permission")
                    return
                }
                console.log(res)
            })
        }) 
        .catch(err => console.log("service worker not registered", err))
    })
    navigator.serviceWorker.ready.then((notification) => {
        var options = {
            body: 'This is body message Body',
            icon: '/assets/icons/icon-48x48.png'
        };
        notification.showNotification('This is Namaz Prayer App', options);
    })


}






let login = () => {
    event.preventDefault();
    var email = document.getElementById("emailAdd").value;
    var password = document.getElementById("password").value;
    var storeData =  JSON.parse(localStorage.getItem("userDataArray"));
    console.log(storeData)
    if (!storeData || storeData.length === 0){
        swal.fire({
            icon: 'error',
            title: 'user email not found.'
        })
        setTimeout(() =>{
            window.location.href = "./index.html";
        }, 2000);
        return;
    }

var userFound = false;
    for (var i = 0; i < storeData.length; i++){
        if(storeData[i].email === email && storeData[i].password === password){
            userFound = true;
            swal.fire({
                icon: 'success',
                title: `${storeData[i].email} successfully logged in`,
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(()=>{
                window.location.href = "./prayertime.html";
            }, 1000);
            break;
        }
}
if (!userFound){
        swal.fire({
            icon: 'error',
            title: 'Invalid Email or Password',
        });

}   
};