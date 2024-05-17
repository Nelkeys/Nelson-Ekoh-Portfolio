let progressContainers = document.querySelectorAll('.progress-container')

export function load() {
    progressContainers.forEach(container => {
        var progressLevel = container.getAttribute('data-level')
        let inwardBar = container.querySelector('.inward-bar')
        let progress = `${progressLevel}%`
        inwardBar.style = `width:${progress}`
        let progressDisplay = container.querySelector('.level')
        progressDisplay.innerText = progress
    })
}