function yetiTransition(){
  var tl = new TimelineMax();
  tl.from('#layer9', 0.4, {scaleX: 0, transformOrigin: "left", ease: Power2.easeOut});
  tl.from('#layer10', 0.4, {scaleX: 0, transformOrigin: "left", ease: Power2.easeOut});
  tl.from('#layer11', 0.4, {scaleX: 0, transformOrigin: "left", ease: Power2.easeOut});
  tl.from('#layer13', 0.5, {delay: 1, scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut});
  tl.from('#layer14', 1, {scaleX: 0, transformOrigin: "bottom", ease: "bounce.out"});
  yetiBlinking()
}



function yetiBlinking(){
  setInterval(function(){
    var tl = new TimelineMax();
    tl.to('#layer13', 0.5, {delay: 2, transformOrigin: "bottom", ease: Power2.easeOut})
    tl.to('#layer13', 0.5, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
    tl.to('#layer13', 0.5, {scaleY: 1, transformOrigin: "bottom", ease: Power2.easeOut})
  }, 3500);
}

yetiTransition()

// setTimeout(function(){
//   document.querySelector(".home-title").style.display = "block"
// },8000)
