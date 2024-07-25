let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>
{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    login_form.classList.remove('active');
    navbar.classList.remove('active');
}



let cart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>
{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    login_form.classList.remove('active');
    navbar.classList.remove('active');
    
}


let login_form=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>
{
    login_form.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    
}

let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    login_form.classList.remove('active');
    
}

window.scroll=()=>
    {
        searchForm.classList.remove('active');
        cart.classList.remove('active');
        login_form.classList.remove('active');
        navbar.classList.remove('active');
        
    }


    var swiper = new Swiper(".product-slider", {
        loop:true,
        spaceBetween: 20,
        autoplay:{
            delay:7500,
            disableOnInteraction:false,

        },

        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
        },
      });


      var swiper = new Swiper(".review-slider", {
        loop:true,
        spaceBetween: 20,
        autoplay:{
            delay:7500,
            disableOnInteraction:false,

        },

        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
        },
      });
