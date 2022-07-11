/*"https://moica2.telecentro.net.ar/home.php",
        "http://moica2.telecentro.net.ar/*"*/



// Ver tkt click derecho
function contextClick(info, tab){
    console.log("funcion");
    var searchstring = info.selectionText;
    var regexptkt = /^[\d]{6}[A-Z]{2}[0-9]{4}$/;
    var regexpnodo = /^[A-Z]{2}[0-9]{2}/;
    if (regexptkt.test(searchstring)){
        console.log("testest3");
    }
    console.log(searchstring);
    chrome.contextMenus.update
 if (info.menuItemId === "uno" && regexptkt.test(searchstring)){
 chrome.tabs.create({url: "https://moica2.telecentro.net.ar/verTicket.php?ticket=" + searchstring})}
 
 if (info.menuItemId === "dos"){
    chrome.tabs.create({url: "https://moica2.telecentro.net.ar/buscarTicket.php?ticket=" + searchstring})}
    

    //  https://mira5.telecentro.net.ar/stats_frontend.php?nodocmts=
 if (info.menuItemId === "tres"){
        chrome.tabs.create({url: "https://mira5.telecentro.net.ar/cablemodem_frontend.php?nodocmts=" + searchstring + "&flagploss=1&flagdsfecpre=1&flagdsfecpost=1&flagusfecpre=1&flagusfecpost=1&flagdstilt=1"})}
 if (info.menuItemId === "unoeditable"){
    chrome.tabs.sendMessage(tab.id, {text: "^(?!.*(RM|CN)).*"})}
    if (info.menuItemId === "doseditable"){
        chrome.tabs.sendMessage(tab.id, {text: "RM|CN"})}
    }


chrome.runtime.onInstalled.addListener(() => {
   //
    chrome.contextMenus.create({id: "uno", title: "Ver ticket", contexts:["selection"]});
    chrome.contextMenus.create({id: "dos", title: "Buscar ticket", contexts:["selection"]});
    chrome.contextMenus.create({id: "asd", type: 'separator', contexts: ["selection"]});
    chrome.contextMenus.create({id: "tres", title: "Buscar en M5", contexts:["selection"]});
    chrome.contextMenus.create({
        id: "unoeditable", 
  //      type: "checkbox",
        title: "Excluir",
        contexts:["editable"],
        "documentUrlPatterns": ["*://moica2.telecentro.net.ar/*"]
    });
    chrome.contextMenus.create({
        id: "doseditable", 
  //      type: "checkbox",
        title: "Incluir",
        contexts:["editable"],
        "documentUrlPatterns": ["*://moica2.telecentro.net.ar/*"]
    });
    //,    targetUrlPatterns: "*moica2.telecentro.net.ar*"
    
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