var userArray = [
	{
		username: "codify",
		password: "academy"
	},
	{	
		username: "uttam",
		password: "dhamala"
	},
	{
		username: "mero",
		password: "maya"
	},
	{
		username: "tapai",
		password: "baadar"
	}]
function getInfo() {
	var usernameInput = document.getElementById("login-name").value
	var passwordInput = document.getElementById("login-pass").value

	for (var i = 0; i < userArray.length; i++) {
		if(userArray[i].username == usernameInput && userArray[i].password == passwordInput) {
			alert("You are Logged In!!")
			return
		}

	}
	alert("Log in failed")
}
function register() {
	var usernameInput = document.getElementById("login-name").value
	var passwordInput = document.getElementById("login-pass").value 
	var newUser = {
		username: usernameInput,
		password: passwordInput
	}
	
	for (var i = 0; i < userArray.length; i++) {
		if(userArray[i].username == usernameInput) {
			alert("Username already exists!!")
			return
		}
		
	}
	alert("You are registered.")
	userArray.push(newUser)
	console.log(userArray)

}
