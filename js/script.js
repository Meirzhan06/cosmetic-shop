$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows:false
              }
            }
          ]
    });
})
$(document).ready(function(){
    $('.slider2').slick({
        slidesToShow:5,
        infinite:false
    });
})

$(document).ready(function() {
    $('.nav-bars').click(function(event) {
        $('.burger-menu').addClass('active');
        $('body').addClass('active');
    });
});

$(document).ready(function() {
    $('.close-burger').click(function(event) {
        $('.burger-menu').removeClass('active');
        $('body').removeClass('active');
    });
});



let nav2 = document.querySelector("#nav2")

let slid2_1 = document.querySelector("#slid2-1")
let slid2_2 = document.querySelector("#slid2-2")
let slid2_3 = document.querySelector("#slid2-3")
let slid2_4 = document.querySelector("#slid2-4")
let slid2_5 = document.querySelector("#slid2-5")
let slid2_6 = document.querySelector("#slid2-6")


let slid1_1 = document.querySelector("#slid1-1")
let slid1_2 = document.querySelector("#slid1-2")
let slid1_3 = document.querySelector("#slid1-3")
let slid1_4 = document.querySelector("#slid1-4")
let slid1_5 = document.querySelector("#slid1-5")
let slid1_6 = document.querySelector("#slid1-6")




let cataloglist = document.querySelector("#catalog-list")
let navhidden = document.querySelector("#catalog");
navhidden.addEventListener("mouseover", function(){
    document.getElementById('nav2').style.display='block';
    document.getElementById('catalog-list').style.display='flex';
})
navhidden.addEventListener("mouseout", function(){
    document.getElementById('nav2').style.display='none';
    document.getElementById('catalog-list').style.display='none';
})





let verhlist = document.querySelector("#verh-list")
let navhidden2 = document.querySelector("#verh");
navhidden2.addEventListener("mouseover", function(){
    document.getElementById('nav2').style.display='block';
    document.getElementById('verh-list').style.display='flex';
})
navhidden2.addEventListener("mouseout", function(){
    document.getElementById('nav2').style.display='none';
    document.getElementById('verh-list').style.display='none';
})




let nizlist = document.querySelector("#niz-list")
let navhidden3 = document.querySelector("#niz");
navhidden3.addEventListener("mouseover", function(){
    document.getElementById('nav2').style.display='block';
    document.getElementById('niz-list').style.display='flex';
})
navhidden3.addEventListener("mouseout", function(){
    document.getElementById('nav2').style.display='none';
    document.getElementById('niz-list').style.display='none';
})


nav2.addEventListener("mouseover", function(){
    document.getElementById('nav2').style.display='block';
})
nav2.addEventListener("mouseout", function(){
    document.getElementById('nav2').style.display='none';
})




verhlist.addEventListener("mouseover", function(){
    document.getElementById('verh-list').style.display='flex';
})
verhlist.addEventListener("mouseout", function(){
    document.getElementById('verh-list').style.display='none';
})
nizlist.addEventListener("mouseover", function(){
    document.getElementById('niz-list').style.display='flex';
})
nizlist.addEventListener("mouseout", function(){
    document.getElementById('niz-list').style.display='none';
})
cataloglist.addEventListener("mouseover", function(){
    document.getElementById('catalog-list').style.display='flex';
})
cataloglist.addEventListener("mouseout", function(){
    document.getElementById('catalog-list').style.display='none';
})




slid2_1.addEventListener("mouseover", function(){
    document.getElementById('more-inf2-1').style.opacity='1';
    document.getElementById('more-inf2-1').style.right='10px';
})
slid2_1.addEventListener("mouseout", function(){
    document.getElementById('more-inf2-1').style.opacity='0';
    document.getElementById('more-inf2-1').style.right='0px';
})

slid2_2.addEventListener("mouseover", function(){
    document.getElementById('more-inf2-2').style.opacity='1';
    document.getElementById('more-inf2-2').style.right='10px';
})
slid2_2.addEventListener("mouseout", function(){
    document.getElementById('more-inf2-2').style.opacity='0';
    document.getElementById('more-inf2-2').style.right='0px';
})

slid2_3.addEventListener("mouseover", function(){
    document.getElementById('more-inf2-3').style.opacity='1';
    document.getElementById('more-inf2-3').style.right='10px';
})
slid2_3.addEventListener("mouseout", function(){
    document.getElementById('more-inf2-3').style.opacity='0';
    document.getElementById('more-inf2-3').style.right='0px';
})

slid2_4.addEventListener("mouseover", function(){
    document.getElementById('more-inf2-4').style.opacity='1';
    document.getElementById('more-inf2-4').style.right='10px';
})
slid2_4.addEventListener("mouseout", function(){
    document.getElementById('more-inf2-4').style.opacity='0';
    document.getElementById('more-inf2-4').style.right='0px';
})

slid2_5.addEventListener("mouseover", function(){
    document.getElementById('more-inf2-5').style.opacity='1';
    document.getElementById('more-inf2-5').style.right='10px';
})
slid2_5.addEventListener("mouseout", function(){
    document.getElementById('more-inf2-5').style.opacity='0';
    document.getElementById('more-inf2-5').style.right='0px';
})

slid2_6.addEventListener("mouseover", function(){
    document.getElementById('more-inf2-6').style.opacity='1';
    document.getElementById('more-inf2-6').style.right='10px';
})
slid2_6.addEventListener("mouseout", function(){
    document.getElementById('more-inf2-6').style.opacity='0';
    document.getElementById('more-inf2-6').style.right='0px';
})





slid1_1.addEventListener("mouseover", function(){
    document.getElementById('more-inf1-1').style.opacity='1';
    document.getElementById('more-inf1-1').style.right='10px';
})
slid1_1.addEventListener("mouseout", function(){
    document.getElementById('more-inf1-1').style.opacity='0';
    document.getElementById('more-inf1-1').style.right='0px';
})

slid1_2.addEventListener("mouseover", function(){
    document.getElementById('more-inf1-2').style.opacity='1';
    document.getElementById('more-inf1-2').style.right='10px';
})
slid1_2.addEventListener("mouseout", function(){
    document.getElementById('more-inf1-2').style.opacity='0';
    document.getElementById('more-inf1-2').style.right='0px';
})

slid1_3.addEventListener("mouseover", function(){
    document.getElementById('more-inf1-3').style.opacity='1';
    document.getElementById('more-inf1-3').style.right='10px';
})
slid1_3.addEventListener("mouseout", function(){
    document.getElementById('more-inf1-3').style.opacity='0';
    document.getElementById('more-inf1-3').style.right='0px';
})

slid1_4.addEventListener("mouseover", function(){
    document.getElementById('more-inf1-4').style.opacity='1';
    document.getElementById('more-inf1-4').style.right='10px';
})
slid1_4.addEventListener("mouseout", function(){
    document.getElementById('more-inf1-4').style.opacity='0';
    document.getElementById('more-inf1-4').style.right='0px';
})

slid1_5.addEventListener("mouseover", function(){
    document.getElementById('more-inf1-5').style.opacity='1';
    document.getElementById('more-inf1-5').style.right='10px';
})
slid1_5.addEventListener("mouseout", function(){
    document.getElementById('more-inf1-5').style.opacity='0';
    document.getElementById('more-inf1-5').style.right='0px';
})

slid1_6.addEventListener("mouseover", function(){
    document.getElementById('more-inf1-6').style.opacity='1';
    document.getElementById('more-inf1-6').style.right='10px';
})
slid1_6.addEventListener("mouseout", function(){
    document.getElementById('more-inf1-6').style.opacity='0';
    document.getElementById('more-inf1-6').style.right='0px';
})