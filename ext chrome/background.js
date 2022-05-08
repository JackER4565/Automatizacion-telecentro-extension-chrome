/*"https://moica2.telecentro.net.ar/home.php",
        "http://moica2.telecentro.net.ar/*"*/

// Ver tkt click derecho
function contextClick(info, tab)
{
    var searchstring = info.selectionText;
    if (info.menuItemId === "uno"){
 
 chrome.tabs.create({url: "https://moica2.telecentro.net.ar/verTicket.php?ticket=" + searchstring})}
 if (info.menuItemId === "dos"){
    chrome.tabs.create({url: "https://moica2.telecentro.net.ar/buscarTicket.php?ticket=" + searchstring})}
}
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({id: "uno", title: "Ver ticket", contexts:["selection"]});
    chrome.contextMenus.create({id: "dos", title: "Buscar ticket", contexts:["selection"]});
  });


chrome.contextMenus.onClicked.addListener(contextClick)
// Ver tkt click derecho


 // chrome.storage.sync.clear();
  chrome.storage.sync.get(['zonaes'], function(result) {
    if (result.zonaes === undefined){
        chrome.storage.sync.set({zonaes: "15"});
    }});

    chrome.storage.sync.get(['zonaes'], function(result) {
        console.log('Value currently is ' + result.zonaes);
      });
    /*
chrome.runtime.onInstalled.addListener(() => {
    if (chrome.storage.sync.get('zonaes')){
        console.log("get");
            console.log(chrome.storage.sync.get('zonaes'));
    } else {
        console.log("set");
           chrome.storage.sync.set({
        zonaes: "15"
    });}
});*/

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["./foreground.js"]
        })
            .then(() => {
                console.log("INJECTED THE FOREGROUND SCRIPT.");
            })
            .catch(err => console.log(err));
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'get_zona') {
        chrome.storage.sync.get('zonaes', data => {
            if (chrome.runtime.lastError) {
                sendResponse({
                    message: 'fail'
                });

                return;
            }

            sendResponse({
                message: 'success',
                payload: data.zonaes
            });
        });

        return true;
    } else if (request.message === 'change_zona') {
        chrome.storage.sync.set({
            zonaes: request.payload
        }, () => {
            if (chrome.runtime.lastError) {
                sendResponse({ message: 'fail' });
                return;
            }

            sendResponse({ message: 'success' });
        })

        return true;
    }
});