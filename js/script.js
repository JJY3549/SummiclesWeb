// 'http://dylee.pythonanywhere.com/summicles/main/'







// fetch('http://ysa8497.pythonanywhere.com/summicles/main/')
//     .then(function(response) {
//         if (response.status === 200 || res.status === 201) { // 성공을 알리는 HTTP 상태 코드면
//             response.text().then(function(text) {
//                 var newsText = JSON.parse(text);
//                 var columns = document.getElementById('columns');
//                 for (var i in newsText) {
//                     var newFigure = document.createElement("figure");
//                     var figcaption = document.createElement("figcaption");
//                     figcaption.innerHTML += 
//                     "<img src="+newsText[i].img+">"+"<br>"+
//                     "<a href=\"#url\">"+newsText[i].title+"</a>";
//                     console.log(i);
//                     columns.appendChild(newFigure);
//                     newFigure.appendChild(figcaption);
                    
//                 }
//             })
//         } else { // 실패를 알리는 HTTP 상태 코드면
//             console.error(rxes.statusText);
//         }
// }).catch(err => console.error(err));



fetch('http://ysa8497.pythonanywhere.com/summicles/main/')
    .then(function(response) {
        if (response.status === 200 || res.status === 201) { // 성공을 알리는 HTTP 상태 코드면
            response.text().then(function(text) {
                var newsText = JSON.parse(text);
                var columns = document.getElementById('columns');
                for (var i in newsText) {
                    var newFigure = document.createElement("figure");
                    var figcaption = document.createElement("figcaption");
                    var newsPopup = document.createElement("div");
                    newsPopup.id = "newsPopup";
                    newsPopup.className = "toggle";

                    figcaption.innerHTML += 
                    "<img src="+newsText[i].img+">"+"<br>"+
                    "<a href=\"#newsPopup\">"+newsText[i].title+"</a>";

                    newsPopup.innerHTML += 
                    "<div>"+newsText[i].contents+"</div>";

                    console.log(i);
                    columns.appendChild(newFigure);
                    newFigure.appendChild(figcaption);
                    figcaption.appendChild(newsPopup);

                    
                }
            });

        } else { // 실패를 알리는 HTTP 상태 코드면
            console.error(rxes.statusText);
        }
}).catch(err => console.error(err));

(function (window, document) {
    'use strict';
    const  $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    const $newsPopupBtn = document.getElementById('newsPopup');
    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });
    $newsPopupBtn.addEventListener('click', function() {
        toggleElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    // const $newsPopup = document.querySelectorAll('')
    // const $newsPopupBtn = document.getElementById('newsPopup');
    // $newsPopupBtn.addEventListener('click', function() {
    //     toggleElements();
    // });

    // function toggleElements() {
    //     [].forEach.call($toggles, function (toggle) {
    //         toggle.classList.toggle('on');
    //     });
    // }
})(window, document)

// $(document).ready(function () {
//     $("#layerPopup").hide();
//     $("#columns > a").click(function () {
//         $("#columns > a").blur();
//         $("#layerPopup").show();
//         $("#layerPopup a").focus();
//         return false;
//     });
//     $("#layerPopup a").keydown(function (e) {
//         if (e.shiftKey && e.keyCode == 9) { // Shift + Tab 키를 의미
//             $("#columns > a").focus();
//             $("#layerPopup").hide();
//             return false;
//         }
//     });

//     $("#layerPopup button").click(function () {
//         $("#columns > a").focus();
//         $("#layerPopup").hide();
//     });
// });

