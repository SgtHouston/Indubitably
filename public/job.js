



document.addEventListener('click', (e) => {
    const jobColumn = e.target.closest('.job-column')
    if (jobColumn) {
        const jobDetailsItems = document.getElementsByClassName("job-details")
        Array.prototype.forEach.call(jobDetailsItems,details => {
            details.classList.add("d-none")
            
        });
        let jobID = jobColumn.dataset.id
        const jobDetails = document.getElementById(`job-${jobID}`)
        jobDetails.classList.remove("d-none")
    }
})


    document.addEventListener('click', event => {
        const favButton = event.target.closest(".save")
        if (favButton){

            event.preventDefault()
            console.log('hear clicked')

            
            const id = favButton.dataset.id
            fetch(`/users/favorites/${id}/add`, {
                method: "POST"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    favButton.remove()
                })
        }

    })

console.log("favorite script loaded")

// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("save")) {
//         saveToFavorites.target.dataset.jobID
//     }
//     })