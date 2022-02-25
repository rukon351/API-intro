function loadAlbams() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(respons => respons.json())
        .then(data => displayAlbums(data))
}
loadAlbams();
function displayAlbums(albams) {
    const albumContainer = document.getElementById('albums');
    for (const albam of albams) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = albam.title;
        albumContainer.appendChild(p);
    }
};