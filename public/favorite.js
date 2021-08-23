// Grab each save button on the page
document.querySelectorAll('.save').forEach(item => {
    // add an event listener to each save button
    item.addEventListener('click', event => {
        event.preventDefault()
        // make save button variable 
        const saveButton = event.target.closest('.save')
        // assign the selected job's jobId to variable
        const id = saveButton.dataset.jobId
        // Post jobID to favorites
        fetch(`/users/favorites/${id}/add`, {
            method: "POST"
        })
            .then(res => res.json())
            
    })
})

// Displaying favorite jobs extra info on click
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



// Deletes jobs from favorites after clicking unsave button
document.addEventListener('click', event => {
    if (event.target.classList.contains('unsave')) {
        // get id to be deleted from button
        const id = event.target.dataset.id
        console.log(id)
        // GRABS CORRECT JOBID 
        // delete
        fetch(`/users/favorites/${id}/del`, {
            method: 'DELETE'
        })
            .then(res => !res.ok && res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                // refresh page
                location.reload();
            })
    }
})

