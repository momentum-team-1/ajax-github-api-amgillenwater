let dataSection = document.querySelector("#github-data")

fetch("https://api.github.com/users/amgillenwater")
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data);
        // const spanEl = document.createElement('span')

    })
    //it's the two steps above I don't quite get--once I console.log the data I know where to go


