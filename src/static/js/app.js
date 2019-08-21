
//
//
//
//
// function TriggerAlertOpen(parentDivID, alertDivID, alertMessage) {
//   //open  alert box after 1 seconds (1000 milliseconds):
//   console.log("TriggerAlertOpen")
//   var divNotificationHtml = '<div id='+alertDivID+' class="alert alert-success fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>'+alertMessage+'</strong></div>'
//   console.log(divNotificationHtml)
//   $(parentDivID).html(divNotificationHtml);
// };
//
// function TriggerAlertClose(alertDivID) {
//   //remove  alert box after 5 seconds (5000 milliseconds):
//   window.setTimeout(function () {
//       $(alertDivID).fadeTo(1000, 0).slideUp(1000, function () {
//           $(this).remove();
//       });
//   }, 5000);
// };
//
// $('#numHarvestButton').click(function (e) {
//   e.preventDefault()
//   //alert("Window Loaded");
//   App.contracts.TheProduct.deployed().then(function(instance) {
//   theProductInstance = instance;
//   return theProductInstance.noHarvests();
//     }).then(function(harvestsCount) {
//       console.log("numHarvestButton Click - " + harvestsCount.toString());
//       var divNumHarvestHtml = '<div class="alert alert-success fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>Number of Harvest entries </strong>' + harvestsCount.toString() +'</div>'
//       $('#divNumHarvest').html(divNumHarvestHtml);
//     }).catch(function(error) {
//       console.warn(error);
//     });
// });
//
// $('#numStorageButton').click(function (e) {
//   e.preventDefault()
//   //alert("Window Loaded");
//   App.contracts.TheProduct.deployed().then(function(instance) {
//   theProductInstance = instance;
//   return theProductInstance.noStorage();
//     }).then(function(storageCount) {
//       console.log("numStorageButton Click - " + storageCount.toString());
//       var divNumStorageHtml = '<div class="alert alert-success fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>Number of Storage entries </strong>' + storageCount.toString() +'</div>'
//       $('#divNumStorage').html(divNumStorageHtml);
//     }).catch(function(error) {
//       console.warn(error);
//     });
// });
//
//
// function init() {
//     console.log("Initialising application");
//     var sneakerArray = readJSON();
//     console.log(JSON.stringify(sneakerArray, null, "  "));
//     //renderSneakerTable(sneakerArray);
// };
//
//   // fetch("./static/db/my_sneakers.json")
//             // .then(response => response.json())
//             // .then(json => console.log(json));
//
// // fetch("https://example.com/api/request", {
// //             method: 'POST',
// //             body: JSON.stringify(data),
// //             mode: 'cors',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //                 "Accept": 'application/json',
// //             }
// //         })
// //     .then((data) => data.json())
// //     .then((resp) => console.log(resp))
// //     .catch((err) => console.log(err))
//
// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }
//
//
//
//
// function readJSON(){
//       // fetch("./../db/my_sneakers.json",
//       //      {
//       //           method: 'POST',
//       //           body: JSON.stringify(response),
//       //           mode: 'cors',
//       //           headers: {
//       //               'Content-Type': 'application/json',
//       //               "Accept": 'application/json',
//       //           }
//       //       }
//       //     )
//       //       .then(response => response.json())
//       //       .then(json => {console.log(json);
//       //           // for (var i = 0; i < json.length; i++) {
//       //           //     var th = document.createElement("th");      // TABLE HEADER.
//       //           //     th.innerHTML = col[i];
//       //           //     tr.appendChild(th);
//       //           // }
//       //           return json;
//       //       }).catch(err => {
//       //             // Do something for an error here
//       //           });
//         var file_url = "./../db/my_sneakers.json/";
//         var sneakerArray = [];      // array to store sneakers
//     //   $.getJSON(file_url, function (data) {
//     //     $.each(data, function (key, value) {
//     //         sneakerArray.push(value);       // push sneakers into array
//     //     });
//     //     return sneakerArray;
//     // });
//     //usage:
//     readTextFile(file_url, function(text){
//     var data = JSON.parse(text);
//     console.log(data);
//     return data;
//     });
// };
//
// function renderSneakerTable(sneakerArray) {
//     // EXTRACT VALUE FOR TABLE HEADER.
//     var col = [];
//     for (var i = 0; i < sneakerArray.length; i++) {
//         for (var key in sneakerArray[i]) {
//             if (col.indexOf(key) === -1) {
//                 col.push(key);
//             }
//         }
//     }
//
//     // CREATE DYNAMIC TABLE.
//     var table = document.createElement("table");
//
//     // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
//
//     var tr = table.insertRow(-1);                   // TABLE ROW.
//
//     for (var i = 0; i < col.length; i++) {
//         var th = document.createElement("th");      // TABLE HEADER.
//         th.innerHTML = col[i];
//         tr.appendChild(th);
//     }
//
//     // ADD JSON DATA TO THE TABLE AS ROWS.
//     for (var i = 0; i < sneakerArray.length; i++) {
//
//         tr = table.insertRow(-1);
//
//         for (var j = 0; j < col.length; j++) {
//             var tabCell = tr.insertCell(-1);
//             tabCell.innerHTML = sneakerArray[i][col[j]];
//         }
//     }
//
//     // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
//     var divContainer = document.getElementById("showData");
//     divContainer.innerHTML = "";
//     divContainer.appendChild(table);
// };
//
//
// function AddSneaker() {
//   //remove  alert box after 5 seconds (5000 milliseconds):
//   window.setTimeout(function () {
//       $(alertDivID).fadeTo(1000, 0).slideUp(1000, function () {
//           $(this).remove();
//       });
//   }, 5000);
// };
// //
// // // app.js is included in index.html
// // // when index.html is opened in the browser, load function is executed when complete page is fully loaded, including all frames, objects and images
// // $(window).on('load', function () {
// //    init();
// // });
