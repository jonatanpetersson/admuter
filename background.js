// Handle the message sent from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.elementFound) {
    console.log("Element found!");
  } else {
    console.log("Element not found.");
  }
});
