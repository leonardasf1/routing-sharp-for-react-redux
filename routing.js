export function routing(setPathState) {
    window.addEventListener("DOMContentLoaded", function() {
        if (window.location.hash) setPath();
    })
    window.addEventListener('hashchange', setPath);

    function setPath() {
        setPathState(pathState => pathState = window.location.hash)
    }
}