var test = function() {
    var paper = Raphael(10,50,320,200);

    var circle = paper.circle(50,30,10);
    circle.attr("fill", "#f00");
    circle.attr("stroke", "#fff");
}

window.onload = test;
