var changeEvent = document.createEvent("HTMLEvents");
changeEvent.initEvent("change", true, true);
document.querySelector("#SECTOR-SELECT").dispatchEvent(changeEvent);