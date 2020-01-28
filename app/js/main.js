// Highcharts.setOptions({
//     lang: {
//       thousandsSep: ','
//     }
// });

// let chartId = document.getElementById("chart-container");

// // checks for the chart ID and displays a backup image if the browser can't find it
// setTimeout(function() {
//     if(chartId.innerHTML === "") {
//         // console.log('noId');
//         let chartArea = document.getElementsByClassName("chart-area");
//         for(var i = 0; i < chartArea.length; i++) {
//             chartArea[i].style.display = "none";
//         } 
//         // insert chart screenshot here
//         document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
//     } else {
//         // console.log('yesId')
//     }
// },500);

// function drawHighcharts() {
//     Highcharts.chart(chartId, {
//         chart: {
//             type: 'bar',
//             styledMode: true,
//             spacingBottom: 25,
//             spacingRight: 100
//         }, 
//         title: {
//             text: null
//         },
//         data: {
//             googleSpreadsheetKey: '1YOKb5l2VM4aAB2r20N_1aT_1vEajYrP3U-U3A6lZbC0'
//         },
//         // for bar charts only
//         plotOptions: {
//             series: {
//                 groupPadding: 0.1
//             } 
//         },
//         // for line charts only
//         // plotOptions: {
//         //     series: {
//         //         lineWidth: 1,
//         //         // clip: false,
//         //         marker: {
//         //             enabled: false,
//         //             symbol: 'circle',
//         //             fillColor: '#ffffff',
//         //             states: {
//         //                 hover: {
//         //                     fillColor: '#ffffff'
//         //                 }
//         //             }
//         //         }
//         //     }
//         // },
//         legend: {
//             align: 'right',
//             symbolRadius: 0,
//             verticalAlign: 'top',
//             x: 10,
//             itemMarginTop: -10
//         },
//         xAxis: {
//             labels: {
//                 style: {
//                     whiteSpace: 'nowrap'
//                 }
//             },
//             tickLength: 5
//         },
//         yAxis: {
//             title: false,
//             labels: {
//                 useHTML: true,
//                 overflow: 'allow'
//             }
//         },
//         credits: {
//             enabled: false
//         },
//         tooltip: {
//             shadow: false,
//             padding: 10
//         },
//         responsive: {
//             rules: [{
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 chart: {
//                 spacingRight: 10
//                 },
//                 legend: {
//                     align: 'left',
//                     x: -18
//                 },
//                 tooltip: {
//                     enabled: false
//                 }
//             }
//             }]
//         }
//     })
// }

// if (document.readyState === 'complete' || document.readyState === 'interactive') {
//     drawHighcharts();
// } else {
//     document.addEventListener("DOMContentLoaded", drawHighcharts);
// }