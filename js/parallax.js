let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
    // What % down is it?
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) - 0.05;

    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage * 1.2;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;

    const target = document.querySelectorAll('.parallax');

    target.forEach( (elem) => {
        let pos = window.scrollY * elem.dataset.rate
        if (elem.dataset.direction === 'vertical') {
            return (elem.style.transform = `translateY(${pos}px)`)
        }
    })
})