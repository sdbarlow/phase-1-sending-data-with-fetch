

function submitData(name, email){
    return fetch("http://localhost:3000/users", {method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email,
      }),
})
    .then((response) => {return response.json()})
    .then((data) => {
        let p = document.createElement('p');
        document.body.appendChild(p);
        p.textContent = data.id
    })
    .catch((error) => {
        let p2 = document.createElement('p');
        document.body.appendChild(p2);
        p2.textContent = error;
    })
}

console.log(submitData(1, 2));




