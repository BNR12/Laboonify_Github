
chrome.webNavigation.onCompleted.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.getElementsByClassName("avatar rounded-2")[0].src="https://avatars1.githubusercontent.com/u/1417717?v=3&s=460"'
  });
});
