
let bdy = document.querySelector('#body');
    bdy.style.background = "#f00 !important";
    bdy.style.visibility = "hidden";

    // onload action
    window.onload = function(){
        let ok = confirm("Are You Sure to visit This site???")
        if(ok == true){
            let verify = String(prompt("Provide the keyword to visit this site"));
                verify = verify.toLowerCase();
            if(verify == "local"){
                bdy.style.visibility = "visible";
            }
            else{
                window.location = "pages/404.html"
            }
        }else{
            window.location = "pages/404.html"
        }
};


