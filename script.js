document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('query').value.trim();
    const source = document.getElementById('source').value;
    if (!query) return;

    // Redirect immediately, no loading or results
    const encodedQuery = encodeURIComponent(query);
    let url;
    if (source === 'google') {
        url = `https://www.google.com/search?q=${encodedQuery}`;
    } else if (source === 'brave') {
        url = `https://search.brave.com/search?q=${encodedQuery}`;
    } else if (source === 'duckduckgo') {
        url = `https://duckduckgo.com/?q=${encodedQuery}`;
    }
    window.location.href = url; // Redirect to search engine
});