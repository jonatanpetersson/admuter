const selector = '[aria-label="jump 10 seconds back"]';

if (document) {
  let isMuted = false;
  const documentObserver = new MutationObserver(() => {
    const element = document.querySelector(selector);
    const isAds = !element;

    if (!isMuted && isAds) {
      console.log("Ads running - muting");
      chrome.runtime.sendMessage({ muted: true });
      isMuted = true;
    }

    if (isMuted && !isAds) {
      console.log("Ads finished - unmuting");
      chrome.runtime.sendMessage({ muted: false });
      isMuted = false;
    }
  });
  const config = { attributes: true, childList: true, subtree: true };
  documentObserver.observe(document, config);
}
