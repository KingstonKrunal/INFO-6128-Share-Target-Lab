window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    document.getElementById('title').innerHTML = parsedUrl.searchParams.get('title');
    document.getElementById('text').innerHTML = parsedUrl.searchParams.get('text');
    document.getElementById('url').innerHTML = parsedUrl.searchParams.get('url');
});
