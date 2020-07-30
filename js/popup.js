// window.open = console.log('你好，我是popup！');

// if (location.search !== "?foo") {
//     location.search = "?foo";
//     throw new Error;
// }

// onload = function(){
// 	document.getElementById("so_search_baidu").focus();
// }
function search_stackoverflow_baidu(query_baidu){
	chrome.tabs.create({'url':"https://www.baidu.com/s?ie=UTF-8&wd="+encodeURIComponent(query_baidu)});
}
function search_stackoverflow_google(query_google){
	chrome.tabs.create({'url':"https://www.google.com.hk/search?q="+encodeURIComponent(query_google)});
}
function check_query_baidu(e) {
    query_baidu = document.getElementById("so_search_baidu").value;
    if (query_baidu == '') 
        return;
	if(e && e.which) {
	  c = e.which;
	} else {
	  c = event.keyCode;
	}
	if (c == 13) 
	{
		search_stackoverflow_baidu(query_baidu);
	} 
}
function check_query_google(e) {
    query_google = document.getElementById("so_search_google").value;
    if (query_google == '') 
        return;
	if(e && e.which) {
	  c = e.which;
	} else {
	  c = event.keyCode;
	}
	if (c == 13) 
	{
		search_stackoverflow_google(query_google);
	} 
}
function search_baidu(){
    query_baidu = document.getElementById("so_search_baidu").value;
    if(query_baidu == ''){
        chrome.tabs.create({'url':"https://www.baidu.com"});
    }else{
        search_stackoverflow_baidu(query_baidu);
    }
}

function search_google(){
    query_google = document.getElementById("so_search_google").value;
    if(query_google == ''){
        chrome.tabs.create({'url':"https://www.google.com"});
    }else{
        search_stackoverflow_google(query_google);
    }
}


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("search_baidu").addEventListener('click', search_baidu);
  document.getElementById("search_google").addEventListener('click', search_google);
  document.getElementById("so_search_baidu").addEventListener('keypress', check_query_baidu);
  document.getElementById("so_search_google").addEventListener('keypress', check_query_google);
});