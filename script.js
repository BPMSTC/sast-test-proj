// Simple Javascript to add a click event to a button (optional)
// You can replace this with any Javascript functionality you want to demonstrate

const button = document.createElement('button');
button.textContent = 'Click Me!';
button.addEventListener('click', () => {
  alert('This button was added with Javascript!');
});

document.body.appendChild(button);
