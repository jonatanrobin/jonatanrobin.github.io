
$(window).load(function() {
    $(".loader").fadeOut("slow");
});




console.clear();
const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
 //Toggle Nav
    
    burger.addEventListener('click', () =>{
      //toggle nav
        nav.classList.toggle('nav-active');
    

        //animacion
    navLinks.forEach((link,index) =>{
      if(link.style.animation) {
          link.style.animation=''
       } else {

           link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + .4}s`;
       }
       console.log(index / 7);
   });

   //burguer animation
burger.classList.toggle('toggle');

    });

}


navSlide();


ScrollReveal().reveal('.flink', { delay: 100 });
ScrollReveal().reveal('.fmensaje', { delay: 100 });
ScrollReveal().reveal('.contenido', { delay: 1000 });
ScrollReveal().reveal('.ab', { delay: 100, distance: '60px' });



var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
const controller = new ScrollMagic.Controller();



tl.to('.home', .3, {x:150,});
tl.to('.conti', .5, {x:-70,opacity: 1,}, "=-.5");
tl.to('.conti', 1, {opacity: 1,},);
tl.to('.conti', 1, {x:70,opacity: 0}, );
tl.to('.home', .3, {x:-150,},"=-.3");
tl.to('.datos', .5, {x:70,opacity: 1,});


tl2.to('.perfoto', .3, {x:180,});
tl2.to('.perinfo1', .5, {x:-80,opacity: 1,}, );
tl2.to('.perinfo1', 1, {x:80,opacity: 0,}, );
tl2.to('.perfoto', .3, {x:-180,});
tl2.to('.perinfo2', .5, {x:80,opacity: 1,}, );


tl3.to('.am1', 1, {opacity: 0,});
tl3.to('.am2', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am3', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am4', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am5', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am6', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am7', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am8', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am9', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am10', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am11', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am12', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am13', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am14', 1, {opacity: 1, ease: Power4.easeInOut});
tl3.to('.am15', 1, {opacity: 1, ease: Power4.easeInOut});


tl4.to('.dperinfo1', .5, {x:-330,opacity: 1,}, );
tl4.to('.dperinfo2', .5, {x:330,opacity: 1,}, "=-.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".movi",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".movi")
  .setTween(tl)
		.addTo(controller);



    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".ahre",
      triggerHook: "onLeave",
      duration: "100%"
    })
    .setPin(".ahre")
      .setTween(tl2)
        .addTo(controller);
    
    

        const scene3 = new ScrollMagic.Scene({
          triggerElement: ".trig",
          triggerHook: "onLeave",
          duration: "100%"
        })
        .setPin(".trig")
          .setTween(tl3)
            .addTo(controller);
        
        
            const scene4 = new ScrollMagic.Scene({
              triggerElement: ".dinfo",
              triggerHook: "onLeave",
              duration: "100%"
            })
            .setPin(".dinfo")
              .setTween(tl4)
                .addTo(controller);
            

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}





let imgbx = document.querySelectorAll('.imgbx');
imgbx.forEach(popup => popup.addEventListener('click',() =>
{
  popup.classList.toggle('active')
}))









