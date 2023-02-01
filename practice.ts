fetch("https://api.randomuser.me/?nat=US&results=1")
    .then(res => res.json())
    .then(json => console.log(json.results));
