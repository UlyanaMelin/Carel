$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 6,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        400:{  
            items:3,
            nav:true
        },
        600:{
            items:4,
            nav:true
        },
        1000:{
            items:5,
            nav:true
        },
        1200:{
            items:6,
            nav:true
        }
    },
    navText: [
        '<svg viewBox="0 0 21 30" width="21" height="30" fill="none"><path d="M1.85065 12.0803C-0.0577876 13.679 -0.0577838 16.6141 1.85065 18.2128L14.1218 28.4926C16.7252 30.6735 20.6904 28.8225 20.6904 25.4263L20.6904 4.86673C20.6904 1.47054 16.7252 -0.38044 14.1218 1.80049L1.85065 12.0803Z" fill="#FF0000"/></svg>',
        '<svg viewBox="0 0 21 30" width="21" height="30" fill="none"><path d="M19.4277 12.0803C21.3361 13.679 21.3361 16.6141 19.4277 18.2128L7.15656 28.4926C4.55316 30.6735 0.587889 28.8225 0.587889 25.4263L0.58789 4.86673C0.58789 1.47054 4.55317 -0.38044 7.15656 1.80049L19.4277 12.0803Z" fill="#FF0000"/></svg>'
        
]
});


