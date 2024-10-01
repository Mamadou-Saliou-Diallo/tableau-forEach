document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const firstName = document.getElementById('firstName').value;
    const secondtName = document.getElementById('secondtName').value;
    const tihtName = document.getElementById('tihtName').value;

    // Tableau contenant les informations
    const userInfo = [firstName, secondtName, tihtName];

    // Affichage des informations dans la liste
    const outputList = document.getElementById('outputList');
    outputList.innerHTML = ''; // Efface les précédentes entrées

    userInfo.forEach(function(info) {
        const listItem = document.createElement('li');
        listItem.textContent = info;
        outputList.appendChild(listItem);
    });
});