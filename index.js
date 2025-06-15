const guestList = [];
const maxGuests = 10;

function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent =
    "Current Time: " + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

function renderGuests() {
  const list = document.getElementById("guestList");
  const remaining = document.getElementById("remaining");

  list.innerHTML = "";

  if (guestList.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No guests yet";
    li.style.backgroundColor = "#ccc";
    li.style.color = "black";
    list.appendChild(li);
  } else {
    guestList.forEach((name, index) => {
      const li = document.createElement("li");
      li.textContent = name;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.style.marginLeft = "10px";
      removeButton.onclick = () => removeGuest(index);

      li.appendChild(removeButton);
      list.appendChild(li);
    });
  }

  remaining.textContent = `Guests remaining: ${maxGuests - guestList.length}`;
}

function addGuest() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();
  const message = document.getElementById("message");

  if (!name) {
    message.textContent = "Please enter a name.";
    return;
  }

  if (guestList.length >= maxGuests) {
    message.textContent = "Guest limit reached!";
    return;
  }

  guestList.push(name);
  nameInput.value = "";
  message.textContent = "";
  renderGuests();
}

function removeGuest(index) {
  guestList.splice(index, 1);
  document.getElementById("message").textContent = "";
  renderGuests();
}

renderGuests();
