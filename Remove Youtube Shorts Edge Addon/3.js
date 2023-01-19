console.log("zou2 san4");
var urltab = "";
//var idtab = "";
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		urltab = tabs[0].url;//the current tab's url
		//idtab = tabs[0].id;//the current tab's ID
	});
	//console.log(idtab + ": " + urltab);
	if (urltab.includes("youtube.com/shorts/")){
		const urlRD = urltab.replace("shorts/", "watch?v=");
		console.log(urlRD);
		chrome.tabs.update({url: urlRD});
	};
});
