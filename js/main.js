// Searchphotos search point
const access = `948e6f9f13e390b27e8cbb13b1d3d123e0a006b2980e65aec99db8456bf6221a`;
const endPoint = `https://api.unsplash.com/search/photos?client_id=${access}&query=planes`;

//Selectors
const main = document.querySelector("main");

let content = "";

fetch(endPoint)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            return Promise.reject("Error!");
        }
    })
    // Console line for reading API query output
    //.then(data => console.log(data))
    .then(data => dataCollector(data))
    .catch(error => console.log("Error is", error));

function dataCollector(data)
{
    data.results.forEach(result =>
    {
        content +=
        `<figure>
            <img src="${result.urls.regular}" alt="${result.description}">
            <ul>
                <li><a href="${result.user.links.html}">${result.user.name}</a></li>
                <li>${result.likes}</li>
            </ul>
        </figure>`
    })
    main.innerHTML = content;
}
