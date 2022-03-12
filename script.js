const apiid = 'QVSyBxfidpkxVPUHTL6FYsv7kYMSjWUx'
let container = document.querySelector('.container')

document.querySelector('button').addEventListener('click', function () {
    container.innerHTML = '' // очищаем контейнер
    let request = document.querySelector('#searchgif').value; //получаем из input значение, чтобы вставить его в запрос
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=QVSyBxfidpkxVPUHTL6FYsv7kYMSjWUx&q=${request}&limit=5`)
        // q= - по какому запросу мы ищем, limit  -  количество картинок
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < data.data.length; i++) {
                // перебираем полученный массив с картинками, для каждой создаем img с определенной высотой и шириной, и добавляем его в контейнер
                let img = document.createElement('img');
                img.style.width = '300px';
                img.style.height = '350px'
                img.src = data.data[i].images.downsized.url
                container.appendChild(img)
            }
        })
})