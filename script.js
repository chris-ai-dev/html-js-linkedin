const showGreeting = () => {
    let nameInput = document.getElementById("input-search")
    let greetingOutput = document.getElementById("output-search")
    if (nameInput && greetingOutput ) {
        greetingOutput.innerHTML = "WELCOME TO JS AND HTML " + nameInput.value.toUpperCase() + " help of the DOM!"
    }
}