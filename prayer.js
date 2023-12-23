if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("/serviceworker.js")
        .then((res) => {
          console.log("service worker registered");
          Notification.requestPermission().then((res) => {
            if (Notification.permission == "granted") {
              console.log("Granted Permission");
              return;
            }
            console.log(res);
          });
        })
        .catch((err) => console.log("service worker not registered", err));
    });
    navigator.serviceWorker.ready.then((notification) => {
      var options = {
        body: "This is body message Body",
        icon: "/assets/icons/icon-48x48.png",
      };
      notification.showNotification("This is Namaz Prayer App", options);
    });
  }
  
  