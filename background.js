const targetURLs = [
  "*://*.nytimes.com/*",
  "*://*.wsj.com/*"
];

const redirect = (details) => {
  const url = new URL(details.url);
  const archiveURL = `https://archive.ph/?run=1&url=${encodeURIComponent(url.href)}`;
  return { redirectUrl: archiveURL };
};

chrome.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: targetURLs },
  ["blocking"]
);

