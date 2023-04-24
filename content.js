// Look for the desired element selector
const desiredElement = document.querySelector(".");

// Send a message to the extension with the result
chrome.runtime.sendMessage({ elementFound: Boolean(desiredElement) });
