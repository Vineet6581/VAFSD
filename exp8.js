document.querySelector('.search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.querySelector('#search-box').value;
    if (query) {
        alert(`Search functionality not implemented.\nSearching for: ${query}`);
    }
});
