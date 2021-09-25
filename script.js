var linkArray = [];

 var links = document.links;
 var linkArray = [];


 for (var i = 0; i < links.length; i++) {
     var url = links[i].classList;
     linkArray.push(url);
 }
 var uniqueUrls = [...new Set(linkArray)];
 console.log(uniqueUrls);



 var dataStr =
     'data:text/json;charsetutf-8,' +
     encodeURIComponent(JSON.stringify(uniqueUrls));

 var dlAnchorElem = document.createElement('a');
 dlAnchorElem.setAttribute('href', dataStr);
 dlAnchorElem.setAttribute('download', 'links.json');
 dlAnchorElem.click();

//var links = document.links;
//console.log(links);
// var names = document.getElementsByClassName("inline t-24 t-black t-normal break-words");
// var i;
// for (i = 0; i < names.length; i++) {
//     console.log(names[i].innerText);
// }
//var linkArray = [];
//var url;
//var names = document.getElementsByClassName("pv-profile-wrapper pv-profile-wrapper--below-nav");
//var i;
//for (i = 0; i < names.length; i++) {
//    console.log(names[i].innerText);
//    linkArray.push(names[i].innerText);
//}
///var dataStr =
 //   'data:text/json;charsetutf-8,' +
  //  encodeURIComponent(JSON.stringify(linkArray));

//var dlAnchorElem = document.createElement('a');
//dlAnchorElem.setAttribute('href', dataStr);
//dlAnchorElem.setAttribute('download', 'links.json');
//dlAnchorElem.click();