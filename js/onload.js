
    let user = document.querySelector("#user");let alertMessage = document.querySelector(".bosx"); alertMessage.style.visibility = "hidden"; 
    window.onload = function(){let ok = confirm("Are You Sure to visit This site???");if(ok == true){let getUserName = prompt("Please Provide Your Name:");if((getUserName != '')){ user.textContent = getUserName.toUpperCase(); alertMessage.style.visibility = "visible";}else{window.location="pages/404.html";}}else{window.location="pages/404.html";}
};

