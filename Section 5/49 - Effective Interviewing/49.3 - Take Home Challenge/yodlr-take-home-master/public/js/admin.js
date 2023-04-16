const usersTable = document.querySelector('#users-table');

async function getUsers() {
  const users = await fetch('/users').then(res => res.json());
  
  for (let i = 0; i < users.length; i++) {
    let row = document.createElement('tr');
    let firstName = document.createElement('td');
    let lastName = document.createElement('td');
    let email = document.createElement('td');
    let status = document.createElement('td');

    firstName.innerText = users[i].firstName;
    lastName.innerText = users[i].lastName;
    email.innerText = users[i].email;
    status.innerText = users[i].state;


    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(email);
    row.appendChild(status);

    usersTable.appendChild(row);
  }
}

getUsers();
