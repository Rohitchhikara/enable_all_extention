// background.js

function checkAndEnableExtensions() {
    chrome.management.getAll((extensions) => {
        extensions.forEach((extension) => {
            if (!extension.enabled) {
                chrome.management.setEnabled(extension.id, true, () => {
                    console.log(`Enabled extension: ${extension.name}`);
                });
            }
        });
    });
}

// Check and enable extensions every 5 seconds
setInterval(checkAndEnableExtensions, 5000);

