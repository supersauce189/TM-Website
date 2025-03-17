const morningButton = document.getElementById('morning');
const afternoonButton = document.getElementById('afternoon');
const info = document.getElementById('info');
const sessionName = document.getElementById('sessionName');
const coach = document.getElementById('coach');
const time = document.getElementById('time');
const lunch = document.getElementById('lunch');

console.log("HI");
console.log("Width: " + screen.width);
console.log("Height: " + screen.height);

morningButton.addEventListener('click', () => {
    morningButton.classList.add('morning_active');
    afternoonButton.classList.remove('afternoon_active');
    info.style.backgroundColor = "#eeaf26";
    coach.textContent = "Raymond Townsend";
    time.textContent = "9:00am - 1:00pm";
    lunch.style.display = "block";
})

afternoonButton.addEventListener('click', () => {
    afternoonButton.classList.add('afternoon_active');
    morningButton.classList.remove('morning_active');
    info.style.backgroundColor = "rgb(233, 104, 58)";
    coach.textContent = "Dashawn Freeman";
    time.textContent = "1:00pm - 5:00pm";
    lunch.style.display = "none";
})

