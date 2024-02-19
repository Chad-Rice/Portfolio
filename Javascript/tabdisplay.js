// function tabController(tabId) {
//     var tabs = ['DAFM', 'Store', 'Cinema'];
//     tabs.forEach(function(id) {
//         var tab = document.getElementById(id);
//         if (id === tabId) {
//             tab.classList.add('active');
//         } else {
//             tab.classList.remove('active');
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     var dafmLink = document.querySelector('.nav-tabs a[href="#DAFM"]');
//     var storeLink = document.querySelector('.nav-tabs a[href="#Store"]');
//     var cineamLink = document.querySelector('.nav-tabs a[href="#Cinema"]');

//     dafmLink.addEventListener('click', function() { tabController('DAFM'); });
//     storeLink.addEventListener('click', function() { tabController('Store'); });
//     cineamLink.addEventListener('click', function() { tabController('Cinema'); });
// });

$(document).ready(function () {
    // Change tab on hover
    $('.nav-tabs a').hover(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});
