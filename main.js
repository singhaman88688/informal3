const audioElement = document.getElementById("pianoAudio");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
    setTimeout(function () {
        var audio = document.getElementById('myAudio');
        audioElement.play();
    }, 1000);
    const targetElement = document.getElementById("targetContent");
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop;
    const duration = 1500; // Adjust duration for desired scrolling speed (milliseconds)

    let startTime = null;

    function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress reaches 1 smoothly

        // Modified easing function for slower ending
        const easedProgress = easeInOutCubic(progress);

        const newPosition = startPosition + (targetPosition - startPosition) * easedProgress;
        window.scrollTo(0, newPosition);

        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        } else {
            // Reached target position (optional cleanup)
        }
    }

    function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (x - 1) + 1;
    }

    requestAnimationFrame(scrollAnimation);
});

audioElement.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
});
