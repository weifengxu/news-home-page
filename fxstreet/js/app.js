$(document).ready(function() {

    function monthname(month) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[month];
    }

    function weekname(week) {
        let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return weeks[week];
    }

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let week = date.getDay();

    $("#week").append(weekname(week));
    $("#day").append(day);
    $("#month").append(monthname(month));
    $("#year").append(year);

    if (matchMedia) {
        const mq = window.matchMedia("(min-width: 800px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

    // media query change
    function WidthChange(mq) {
        if (mq.matches) {
            console.log("adios")
            $(".popular").removeClass("col-12");
            $(".hotnews").removeClass("col-12");
            $(".other-news-text").removeClass("col-12");
            $(".other-news-img").removeClass("d-none");
            $(".other-news").removeClass("col-12");
        } else {
            $(".popular").addClass("col-12");
            $(".hotnews").addClass("col-12");
            $(".other-news-text").addClass("col-12");
            $(".other-news-img").addClass("d-none");
            $(".other-news").addClass("col-12");
            console.log("hola")
        }

    }

});