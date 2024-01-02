 const SettingProduct={
    infinite: false,
    lazyLoad: "ondemand",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: (
        <div>
            <i class="fa fa-angle-right right"></i>
        </div>
    ),
    prevArrow: (
        <div>
            <i class="fa fa-angle-left left"></i>
        </div>
    ),
    responsive: [
        {
            breakpoint: 1189,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 654,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 280,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
export default SettingProduct