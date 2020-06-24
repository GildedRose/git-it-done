var getUserRepos = function(user) {
    //format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

var userFormE1 = document.querySelector("#user-form");
var nameInputE1 = document.querySelector("#username")

// executed on form submission browser event
var formSumbitHandler = function(event) {
    event.preventDefault();
    //get value from input element
    var username = nameInputE1.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputE1.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);
};

userFormE1.addEventListener("submit", formSumbitHandler);

