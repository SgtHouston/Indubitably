// Connected to Jobs.ejs


// Toggles display for hidden jobs info upon click
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

// Saves jobs to favorites after clicking save button
document.addEventListener('click', event => {
    // Grab fav button 
    const favButton = event.target.closest(".save")
    // if favButton is clicked
    if (favButton){
        // prevent default
        event.preventDefault()
        // save the id of the selected favorite
        const id = favButton.dataset.id
        // Post that job ID to favorites using post route
        fetch(`/users/favorites/${id}/add`, {
            method: "POST"
        })
        // Then remove the favorite button from being visible
            .then(res => res.json())
            .then(data => {
                favButton.remove()
            })
    }

})


