function changeBackgroundColor(button) {
    // Reset all buttons to default background and text color
    const buttons = document.querySelectorAll('.inner-buttons');
    buttons.forEach(btn => {
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
    });

    // Change background and text color of clicked button based on ID
    switch(button.id) {
        case 'redbtn':
            button.style.backgroundColor = 'red';
            button.style.color = 'white';
            break;
        case 'bluebtn':
            button.style.backgroundColor = 'blue';
            button.style.color = 'white';
            break;
        case 'greendbtn':
            button.style.backgroundColor = 'green';
            button.style.color = 'white';
            break;
        case 'pinkbtn':
            button.style.backgroundColor = 'pink';
            button.style.color = 'black';
            break;
    }
}
document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing page
  
  const name = document.getElementById('nameInput').value.trim();
  const greeting = document.getElementById('greeting');

  if(name) {
    greeting.textContent = `Hello ${name}`;
  } else {
    greeting.textContent = 'Hello';
  }
});
