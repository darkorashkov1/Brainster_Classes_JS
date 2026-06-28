// Literal type
// const number: `+389${number}` | `00389${number}` = '+389713194567'
var albumContainer = document.querySelector('#albumContainer');
var photosContainer = document.querySelector('#photosContainer');
var removePhotos = document.querySelector('#removePhotos');
fetch('https://jsonplaceholder.typicode.com/albums')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (album) {
        var div = document.createElement('div');
        div.id = album.id.toString();
        div.innerText = album.title;
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.border = '2px solid black';
        div.addEventListener('click', function () {
            fetch("https://jsonplaceholder.typicode.com/albums/".concat(album.id, "/photos"))
                .then(function (res) { return res.json(); })
                .then(function (photos) {
                photos.forEach(function (photo) {
                    var img = document.createElement('img');
                    img.src = photo.thumbnailUrl;
                    img.style.width = '150px';
                    img.style.height = '150px';
                    photosContainer === null || photosContainer === void 0 ? void 0 : photosContainer.append(img);
                });
            });
        });
        albumContainer === null || albumContainer === void 0 ? void 0 : albumContainer.append(div);
    });
});
removePhotos === null || removePhotos === void 0 ? void 0 : removePhotos.addEventListener('click', function () {
    if (photosContainer) {
        photosContainer.innerHTML = '';
    }
});
