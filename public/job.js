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

// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("save")) {
//         saveToFavorites.target.dataset.jobID
//     }
//     })