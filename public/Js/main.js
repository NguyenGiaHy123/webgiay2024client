
$(document).ready(function() {
  //  const allListMenu=document.querySelectorAll(".nav-item");
  //  console.log(allListMenu)
   
  //  allListMenu.forEach(element=>{
  //  if(element){
  //     element.addEventListener("click",(e)=>{
  //      const MenuParent=e.target.parentElement;
  //      MenuParent.classList.toggle("open")

  //     })
  //  }
  //  })
   var counter = 0;
   // Start the changing images
   setInterval(function() {
     if(counter == 9) { 
       counter = 0; 
     }
 
     changeImage(counter);
     counter++;
   }, 3000);
 
   // Set the percentage off




   loading();
 });


//  $(document).ready(function() {

//   const allListMenuAdmin=document.querySelectorAll(".group_menu_page_addMin .menu .menu_item");
//   console.log(allListMenuAdmin)
//    allListMenuAdmin.forEach(element=>{
//       if(element){
//          element.addEventListener("click",(e)=>{
//           console.log(e)
//          })
//       }
//    })

//  })
 
 function changeImage(counter) {
   var images = [
     '<i class="fa fa-fighter-jet"></i>',
     '<i class="fa fa-gamepad"></i>',
     '<i class="fa fa-headphones"></i>',
     '<i class="fa fa-cubes"></i>',
     '<i class="fa fa-paw"></i>',
     '<i class="fa fa-rocket"></i>',
     '<i class="fa fa-ticket"></i>',
     '<i class="fa fa-pie-chart"></i>',
     '<i class="fa fa-codepen"></i>'
   ];
 
   $(".loader .image").html(""+ images[counter] +"");


   


// change header style when scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
    } else {
        header.classList.remove('shrink')
    }
})

// element show on scroll

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let el_to_show = document.querySelectorAll('.show-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 200

    return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop = () => {
    el_to_show.forEach(el => {
        if (isElInViewPort(el)) el.classList.add('show')
    })

    scroll(loop)
}

loop()
 }
 
 function loading(){
   var num = 0;
 
   for(i=0; i<=100; i++) {
     setTimeout(function() { 
       $('.loader span').html(num + '%');
 
       if(num == 100) {
         loading();
       }
       num++;
     },(i*1000)/100);
   };
 
 }

 