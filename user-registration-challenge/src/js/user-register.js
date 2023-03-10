/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

    // Get reference to all elements in register tab
    const registerTab = document.getElementsByClassName("register");
    console.log(registerTab);
    let registerTab1 = registerTab[0];
    let registerTab2 = registerTab[1];

    // Get reference to all elements in userList tab
    const userTabs = document.getElementsByClassName("users");
    console.log(userTabs);
    let userTab1 = registerTab[0];
    let userTab = registerTab[1];

    // Switch to user tab
    document.getElementById("register-tab-button").addEventListener("click",function(){
        userTabs[0].style.display = "block";
        registerTab[0].style.display = "none";
        userTabs[1].style.display = "block";
        registerTab[1].style.display = "none";
    })

    // Swith User list tab
    usersTabButton.addEventListener("click",function(){
        userTabs.style.display = "block";
        registerTab.style.display = "none";
    })


/* --- Nav references --- */

    // code here...


/* --- Form field references --- */

    // code here...


/* --- Table list reference --- */

    // code here...



/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

    // code here...



/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */