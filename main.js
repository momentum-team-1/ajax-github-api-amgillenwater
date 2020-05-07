const headerSection = document.querySelector("#title");
const infoSection = document.querySelector(".info")
const picSection = document.querySelector(".pic-bio")

function createImageElement (url) {
    return `<img src="${url}">`
}

fetch("https://api.github.com/users/amgillenwater")
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data);
        //the part above is the part I don't really get--once i can console.log and see the data, I know what to do but getting there is trickier
        let nameHeadEl = document.createElement("div")
        nameHeadEl.className = "header-name"
        nameHeadEl.innerText = data.name;
        headerSection.appendChild(nameHeadEl);
        //leftside div
        let nameEl = document.createElement("div")
        nameEl.className = "header-name"
        nameEl.innerText = "Name - " + data.name;
        infoSection.appendChild(nameEl);
        let usernameEl = document.createElement("div");
        usernameEl.className = "info-section"
        usernameEl.innerText = "Github username -  " + data.login;
        infoSection.appendChild(usernameEl);
        let companyEl = document.createElement("div");
        companyEl.innerText = "Company - " + data.company;
        infoSection.appendChild(companyEl);
        let websiteEl = document.createElement("div");
        websiteEl.innerText = "Website - " + data.html_url;
        infoSection.appendChild(websiteEl);
        //pic section
        let bioPhoto = document.createElement("div");
        bioPhoto.innerHTML = createImageElement(data.avatar_url)
        picSection.appendChild(bioPhoto);


    })
    //it's the two steps above I don't quite get--once I console.log the data I know where to go


