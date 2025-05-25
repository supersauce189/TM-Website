const morningButton = document.getElementById('morning');
const afternoonButton = document.getElementById('afternoon');
const competitiveGroupButton = document.getElementById("competitiveGroup")
const info = document.getElementById('info');
const sessionName = document.getElementById('sessionName');
const coach = document.getElementById('coach');
const dates = document.getElementById("dates");
const time = document.getElementById('time');
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const cost1 = document.getElementById("cost1");
const cost2 = document.getElementById("cost2");
const lunch = document.getElementById('lunch');
const requirement = document.getElementById("requirement");

morningButton.addEventListener('click', () => {
    morningButton.classList.add('morning_active');
    afternoonButton.classList.remove("afternoon_active");
    competitiveGroupButton.classList.remove("competitiveGroup_active");
    info.style.backgroundColor = "#eeaf26";
    coach.textContent = "Raymond Townsend";
    time.textContent = "9:00am - 1:00pm";
    location1.innerHTML = `June 9–13 at <a href="https://www.google.com/maps?q=1380+Rosalia+Ave,+Sunnyvale,+CA+94087" target="_blank">Peterson Middle School</a>`;
    location2.innerHTML = `June 16–20, June 23–27, July 7–11, July 14–18 at <a href="https://www.google.com/maps?q=1886+Fallbrook+Ave+%231800,+San+Jose,+CA+95130" target="_blank">Moreland Middle School</a>`;
    location3.innerHTML = `June 30 – July 3 (4 days), July 21–25, July 28 – Aug 1 at <a href="https://www.google.com/maps?q=Georgina+P.+Blach+Intermediate+School" target="_blank">Blach Junior High</a>`;
    location3.style.display = "block";
    location4.innerHTML = `Aug 4–8 at <a href="https://www.google.com/maps?q=Egan+Junior+High+School" target="_blank">Egan Junior High School</a>`;
    cost2.style.display = "none";
    lunch.style.display = "block";
    requirement.style.display = "none";
})

afternoonButton.addEventListener('click', () => {
    morningButton.classList.remove('morning_active');
    afternoonButton.classList.add("afternoon_active");
    competitiveGroupButton.classList.remove("competitiveGroup_active");
    sessionName.textContent = "Afternoon Session";
    info.style.backgroundColor = "rgb(233, 104, 58)";
    coach.textContent = "Dashawn Freeman";
    time.textContent = "1:00pm - 5:00pm";
    location1.innerHTML = `June 9–13 at <a href="https://www.google.com/maps?q=1380+Rosalia+Ave,+Sunnyvale,+CA+94087" target="_blank">Peterson Middle School</a>`;
    location2.innerHTML = `June 16–20, June 23–27, July 7–11, July 14–18 at <a href="https://www.google.com/maps?q=1886+Fallbrook+Ave+%231800,+San+Jose,+CA+95130" target="_blank">Moreland Middle School</a>`;
    location3.innerHTML = `June 30 – July 3 (4 days), July 21–25, July 28 – Aug 1 at <a href="https://www.google.com/maps?q=Georgina+P.+Blach+Intermediate+School" target="_blank">Blach Junior High</a>`;
    location3.style.display = "block";
    location4.innerHTML = `Aug 4–8 at <a href="https://www.google.com/maps?q=Egan+Junior+High+School" target="_blank">Egan Junior High School</a>`;
    location3.style.display = "block";
    cost2.style.display = "none";
    lunch.style.display = "none";
    requirement.style.display = "none";
})

competitiveGroupButton.addEventListener('click', () => {
    morningButton.classList.remove('morning_active');
    afternoonButton.classList.remove("afternoon_active");
    competitiveGroupButton.classList.add("competitiveGroup_active");
    sessionName.textContent = "Competitive Groups";
    info.style.backgroundColor = "#77c043";
    coach.textContent = "Coach Josh";
    dates.textContent = "6/23-27, 7/14-18 1:00pm - 5:00pm";
    time.textContent = "7/7-11 9:00am - 12:00am";
    location1.innerHTML = "6/23-27, 7/14-18 at <a href='https://www.google.com/maps?q=Georgina+P.+Blach+Intermediate+School' target='_blank'>Blach Junior High</a>";
    location2.innerHTML = "7/7-11 at <a href='https://www.google.com/maps?q=Egan+Junior+High+School' target='_blank'>Egan Junior High School</a>"
    location3.style.display = "none";
    location4.style.display = "none";
    cost1.textContent = "6/23-27, 7/14-18 $450 / week";
    cost2.style.display = "none";
    lunch.style.display = "none";
    requirement.style.display = "block";
})