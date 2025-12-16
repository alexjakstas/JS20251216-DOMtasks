// 1. Change Heading Text
// Task:

// Select the <h1> element by its id.
// When the button is clicked, change the heading text to: New amazing title.
 const heading1 = document.querySelector("#main-title");

const changeHeading = () => {
  const heading1 = document.querySelector("#main-title");
  heading1.innerHTML =  "New amazing title."
};
 
const button = document.querySelector("#change-title-btn");
button.addEventListener("click", changeHeading);