const container = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/users/5")
    .then((response) => response.json())
    .then((user) => {

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <h2>Details of Person</h2>
        <p>Name:${user.name}</p>
        <p>Id: ${user.username}</p>
        <p>Username: ${user.id}</p>
        <p>Email:${user.email}</p>
        <p>Phone:${user.phone}</p>
        <p>Company: ${user.company.name}</p>
        <p>Website: ${user.website}</p>
        <p>Address: ${user.address.street}</p>
        <p>suite: ${user.address.suite}</p>
        <p>city: ${user.address.city}</p>
        <p>zipcode: ${user.address.zipcode}</p>

        
      `;
        container.appendChild(card);

    })