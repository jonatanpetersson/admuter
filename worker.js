chrome.runtime.onMessage.addListener(({ muted }) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { muted });
  });
});
