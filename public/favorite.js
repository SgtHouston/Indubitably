// const e = require("express")

function saveToFavorites(jobID) {
    console.log(jobID)
    // const job = jobData.find(function(currentJob){ 
    //     return currentJob.job.id == jobID; 
    // });
    // let favoritesJSON = localStorage.getItem('favorites');
    // let favorites = JSON.parse(favoritesJSON);
    // if(favorites == null) {
    //     console.log(favorites)
    //     favorites = []
    // }
    // favorites.push(job);
    // favoritesJSON = JSON.stringify(favorites);
    // localStorage.setItem('favorites', favoritesJSON);
    
    
}
//const favIcons = document.getElementsByClassName("save")
document.querySelectorAll('.save').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        console.log('hear clicked')
        const saveButton = event.target.closest('.save')
        const id = saveButton.dataset.jobId
        fetch(`/api/v1/favorites/${id}/add`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    })
})
console.log("favorite script loadded")


//favIcon.addEventListener("click", (e) => {
    //e.preventDefault()
    // if (e.target.classList.contains("save")) {
    //     saveToFavorites(e.target.dataset.jobID)
    // }
    //console.log("favIcon")
    //});
    //console.log("favorite.js")