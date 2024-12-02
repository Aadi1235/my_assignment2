function greetUser() {
    const name = document.getElementById("name").value;
    const greetingElement = document.getElementById("greeting");
    const errorElement = document.getElementById("error-message");



    greetingElement.style.opacity = 0;
    errorElement.style.display = "none";

    if (name.trim() === "") {
      errorElement.style.display = "block"; 
    } else {
     
      greetingElement.textContent = `Hello, ${name}! Welcome to the website.`;
      greetingElement.style.opacity = 1;
    }
  }