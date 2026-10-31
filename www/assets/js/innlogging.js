(() => {
    const form = document.getElementById('innlogging-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    document.getElementById('innlogging-submit').disabled = false;
})();
