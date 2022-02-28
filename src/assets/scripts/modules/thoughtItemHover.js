// Thought list item hover

function getThoughts() {
    let elements = document.getElementsByClassName('thoughtlist-item');
    const thoughtList = Array.prototype.slice.call(elements);
    return thoughtList;
}

function addListener(elementsArray) {
    elementsArray.forEach(element => {
        const header = Array.from(element.getElementsByClassName('thoughtlist-link'));
        element.style.color = '#9ca3af';
        header[0].style.color = '#f43f5e';
        element.addEventListener("mouseenter", function(event) {
            if (event)
                element.style.color = '#1f2937';
                header[0].style.color = '#1f2937';
        })
        element.addEventListener("mouseleave", function(event) {
            if (event)
                element.style.color = '#9ca3af';
                header[0].style.color = '#f43f5e';
        })
        if (document.location.pathname !== "/") {
            element.removeEventListener("mouseenter", { passive: true })
            element.removeEventListener("mouseleave", { passive: true })
        }
    });
}

const thoughtList = getThoughts()

addListener(thoughtList)