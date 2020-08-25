let progressBar = $(".myBar");
let width = 30;

$(".j-btn1").click(function(){
    width = (width + width *0.01);
    console.log("currentProgress", width);
    progressBar.width(width + "%")
});

$(".j-btn2").click(function(){
    width = (width + width *0.03);
    console.log("currentProgress", width);
    progressBar.width(width + "%")
});

$(".j-btn3").click(function(){
    width = (width + width *0.07);
    console.log("currentProgress", width);
    progressBar.width(width + "%")
});



