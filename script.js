gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




var arrow = document.querySelector("#arrow");
var overlay = document.querySelector("#overlay")

overlay.addEventListener("mouseenter",function(){
    arrow.style.scale = 1;
})
overlay.addEventListener("mouseleave",function(){
    arrow.style.scale = 0;
})
overlay.addEventListener("mousemove",function(dets){
    arrow.style.left = `${dets.x-47}px`;
    arrow.style.top =  `${dets.y-38}px`;
})

var img2 = document.querySelector("#page2 img");
gsap.to("#page2 img",{
    rotate: "5deg",
    scrollTrigger:{
        scroller: "#main",
        trigger: "#page2 img",
        start: "top 100%",
        scrub: 3,
        // markers: true,
        
    }
})

gsap.to("#main",{
  backgroundColor: '#111',
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    start: "top -100%",
    end: "top -100%",
    scrub: 3,
    // markers: true
  }
})

//make a timeline to pin the svg and change the color of svg and nav
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "svg",
    scroller: "#main",
    start: "top 45%",
    end: "top -50%",
    // markers: true,
    scrub: true
  }
})
tl.to("svg",{
  top: "5%",
  scale: 1,
  fill: "#111"
})
tl.to("#nav",{
  color: "#111",
  background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)"
})

//again make timeline to change color of nav and svg to white
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "svg",
    scroller: "#main",
    start: "top -370%",
    end: "top -340%",
    markers: true,
    scrub: true
  }
})
tl2.to("svg",{
  top: "5%",
  scale: 1,
  fill: "#fff"
})
tl2.to("#nav",{
  color: "#fff",
  background: "linear-gradient(#000000d5,#00000089,#00000000) "
})

// gsap.to("svg",{
//   scale: 1,
//   fill: "#111",
//   top: "5%",
//   scrollTrigger:{
//     scroller: "#main",
//     trigger: "svg",
//     start: "top 45%",
//     end: "top -50%",
//     // markers: true,
//     scrub: true
//   }
// })

// gsap.to("#nav",{
//   color: "#111",
//   background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
//   scrollTrigger:{
//     trigger: "#nav h3",
//     scroller: "#main",
//     start: "top -100%",
//     end: "top -100%",
//     // markers: true,
//     scrub: 3
//   }
// })

// gsap.to("svg",{
//   scale:1,
//   top:"5%",
//   fill:"#fff",
//   scrollTrigger:{
//       trigger:"svg",
//       scroller:"#main",
//       // markers:"true",
//       start:"top -350%",
//       end:"top -350%",
//       scrub:true,
//   }
// })
// gsap.to("#nav",{
//   color:"#fff",
//   background: "linear-gradient(#000000d5,#00000089,#00000000)",
//   scrollTrigger:{
//       trigger:"#nav h3",
//       scroller:"#main",
//       // markers:true,
//       start:"top -400%",
//       end:"top -400%",
//       scrub:true,
//   }
// })

gsap.from("#page2 h1",{
  duration:0.5,
  onStart:function(){
      $('#page2 h1').textillate({ in: { effect: 'fadeInUp' } });
  }
})

var page3 = document.querySelector("#page3");
var button = document.querySelector("#button-img");
page3.addEventListener("mousemove", function(dets){
    button.style.left = dets.x+"px";
    button.style.top = dets.y+0 +"px";
})

document.querySelector("#page4").addEventListener("mousemove", function (dets) {
  document.querySelector("#page4>img").style.left = dets.x + "px"
  document.querySelector("#page4>img").style.top = dets.y + "px"
  document.querySelector("#page4>button").style.left = dets.x + "px"
  document.querySelector("#page4>button").style.top = dets.y + "px"
})

var elem = document.querySelectorAll(".elem")
elem.forEach(function(e){
  var a = e.getAttribute("data-img")
  e.addEventListener("mouseenter",function(){
      document.querySelector("#page4>img").setAttribute("src",a)
  })
})

var timel = gsap.timeline({
  scrollTrigger:{
    trigger: "#page6",
    scroller: "#main",
    start: "top 100%",
    end: "top 65%",
    // markers: true,
    scrub: 3
  }
})
timel.to("#page6 #img1",{
  rotate: "3deg"
  
})
timel.to("#page6 #img2",{
  rotate: "-5deg",
  top: "19%"
})

var page7 = document.querySelector("#page7")
var button7 = document.querySelector("#button7");
page7.addEventListener("mousemove",function(dets){
  button7.style.left = (dets.x+0)+"px"
  button7.style.top = (dets.y+1)+"px"
})