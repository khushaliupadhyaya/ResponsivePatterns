$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // $("#video-wallpaper").wallpaper({
    //     source: {
    //         //these are wrong because I don't have the files in this project, but this is how you insert the video to the background
    //         poster: "../../images/bikes.png",
    //         video: "//www.youtube.com/embed/plW58zpcmpk"
    //         // mp4: "../../images/bikes.mp4"
    //         // ,
    //         // ogg: "path/to/video.ogv",
    //         // webm: "path/to/video.webm"
    //     }
    // });
});