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


// Grab each unsave button on the page
document.querySelectorAll('.unsave').forEach(item => {
    // add an event listener to each unsave button
    item.addEventListener('click', event => {
        event.preventDefault()
        // make unsave button variable 
        const unSaveButton = event.target.closest('.unsave')
        // assign the selected job's jobId to variable
        const id =unSaveButton.dataset.jobId
        console.log(id)
        // Delete jobID from favorites
        fetch(`/users/favorites/${id}/delete`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                return
            })
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