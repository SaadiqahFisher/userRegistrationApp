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
document.getElementById("register-tab-button").addEventListener("click", function () {
    userTabs[0].style.display = "block";
    registerTab[0].style.display = "none";
    userTabs[1].style.display = "block";
    registerTab[1].style.display = "none";
})

// pswd

// Newly created span -NewUsers elements

newUsers.append(usernameSpan);
newUsers.append(firstNameSpan);
newUsers.append(lastNameSpan);
newUsers.append(emailSpan);
newUsers.append(passwordSpan);

// Return function
// return newUsers;

// User list function
function populateUserList(users) {
    for (i = 0; i < users.length; i++) {
        const userlist = document.getElementById("user-list");
        const user = users[i];
        const li = createUserElement(user);
        userlist.append(li);


    }

    userView.addEventListener("click", function () {
        const viewUsers = document.querySelector("users");
        if (viewUsers.style.display === "none" || viewUsers.style.display === "")
            viewUsers.style.display = "block";
    } else {
        viewUsers.style.display = "none";
    });

}

// register btn
userRegister.addEventListener("click", function (event) {
    const register = document.querySelector("register");
    register.style.display = "block";
});

// EventListener Submit Btn
formFields.addEventListener("submit", function (event) {
    event.preventDefault();
})

// input data - function
const firstName = document.getElementById("firstname"), value;
const lastName = document.getElementById("lastName"), value;
const username = document.getElementById("username"), value;
const email = document.getElementById("email"), value;
const password = document.getElementById("password"), value;

createUser(firstName, lastName, username, email, password);
populateUserList(users);

// function tw0
function createUserElement(usersparam) {
    for (let i = 0; i < usersparam.length; i++) {
        let createUser =

            <ul id="user-list">
                <li class="entry">
                    <span>$usersparamUsername</span>
                    <span>$Name</span>
                    <span>$Last Name</span>
                    <span>$Email Address</span>
                    <span>$Password</span>
                </li>

            </ul>

    }
}

// clear form
document.getElementById("firstname", value = "");
document.getElementById("lastname", value = "");
document.getElementById("username", value = "");
document.getElementById("email", value = "");
document.getElementById("password", value = "");


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