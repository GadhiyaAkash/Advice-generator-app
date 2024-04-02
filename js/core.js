/**
 * Used remote endpoint to get advice
 */
async function getAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const content = await response.json();
        setAdviceValues('&ldquo;' + content['slip'].advice + '&rdquo;', content['slip'].id);
    } catch (error) {
        setAdviceValues("Reload to get updated advice", 1);
    }
}

getAdvice();

/**
 * Click event listener
 */
document.getElementById("dice-image-id").addEventListener("click", function () {
    getAdvice();
})

/**
 * set document values
 */
function setAdviceValues(htmlContent, id) {
    document.getElementById('advice-text-id').innerHTML = htmlContent;
    document.getElementById('advice-id').innerText = "Advice #" + id;
}