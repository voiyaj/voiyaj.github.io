document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value.trim();
    const source = document.getElementById('source').value;

    if (!query) return; // Do nothing if query is empty

    let url;
    switch (source) {
        case 'duckduckgo':
            url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
            break;
        case 'google':
            url = `https://www.google.com=search?q=${encodeURIComponent(query)}`;
            break;
        case 'brave':
            url = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'startpage':
            url = `https://www.startpage.com/sp/search?q=${encodeURIComponent(query)}`;
            break;
        case 'archive':
            url = `https://web.archive.org/web/*/${encodeURIComponent(query)}`;
            break;
        case 'yandex':
            url = `https://yandex.com/search/?text=${encodeURIComponent(query)}`;
            break;
        case 'baidu':
            url = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
            break;
        case 'naver':
            url = `https://search.naver.com/search.naver?query=${encodeURIComponent(query)}`;
            break;
        default:
            url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`; // Fallback
    }

    window.location.href = url;
});
