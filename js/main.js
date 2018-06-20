// Searchphotos search point

const access = "";
const endPoint = "";

function renderResult(data) {
    const { results } = data
    for (const result of results) {
        console.log(result)
    }
}

fetch(endPoint)
.catch( err => console.log(err))
.then(res => res.json)
.catch( err => (console.log(err)))
.then(data => renderResult(data))
.catch( err => console.log(err))