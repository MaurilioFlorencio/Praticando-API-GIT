fetch("https://api.github.com/users/MaurilioFlorencio/repos")
.then(res => res.json())
.then(res => {
    res.forEach(repo => {
        const li = document.createElement("li")
        const liText = document.createTextNode(repo.name)
        li.appendChild(liText)
        const lista = document.querySelector(".lista")
        lista.appendChild(li)
    });
})