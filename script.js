function openTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all links
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Show the specific tab content
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Add active class to the button that clicked me
    const button = document.querySelector(`button[onclick="openTab('${tabName}')"]`);
    if (button) {
        button.classList.add('active');
    }

    // Update URL Hash without scrolling
    history.pushState(null, null, `#${tabName}`);
}

function handleHashChange() {
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash) {
        openTab(hash);
    } else {
        openTab('genel');
    }
}

// Listen for hash changes (back/forward button)
window.addEventListener('hashchange', handleHashChange);

// Check hash on initial load
window.addEventListener('load', handleHashChange);
