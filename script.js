const btn = document.getElementById("fetch-button");

btn.addEventListener("click", fetchRandomUser);

async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: {respons.status}`);
    }
    const data = await response.json();
    displayUser(data.results[0]);
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

function displayUser(user) {
  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = `
    <img src="${user.picture.large}" alt="Profile Picture" id="userImage"/>
    <p> Name: ${user.name.first} ${user.name.last}</p>
    <p> Email: ${user.email} </p>
    <p> Location: ${user.location.city}, ${user.location.country} </p>
    `;
}
