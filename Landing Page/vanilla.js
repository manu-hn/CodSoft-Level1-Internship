

// ! Image Slider for Hero Section
const semiCircle = document.querySelector(".semiCircle")
const imageSlider = document.querySelector('.image-slider')

const slider = document.querySelector(".slider")
const img = document.querySelector('img')
const forward = document.getElementById("btn-foreward")
const backward = document.getElementById("btn-backward")


let img1 = "https://pocketapp.in/img/blog-img/electronics1.jpg"
let img2 = "https://img.freepik.com/free-vector/realism-hand-drawn-horizontal-banner_23-2150203461.jpg?w=2000"
let img3 = "https://marketplace.canva.com/EAFVHstxnwk/1/0/1600w/canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-BZb4KkCdNP0.jpg"
let img4 = "https://cdn11.bigcommerce.com/s-mxy47re2a9/product_images/uploaded_images/home-appliances-web-ad.png"

// let img4 = "https://www.nykaa.com/media/wysiwyg/640x320_mobile_bestbeauty_30aug.jpg"
let img5 = "https://journeywithqnet.com/wp-content/uploads/2021/07/Nutriplus-Health-Supplements-QNET.png"

let array = [img1, img2, img3, img4,img5]
let foreIndex = 0
let backIndex = array.length - 1


function slideForward() {
    console.log('Button Clicked');
    // console.log(array[foreIndex]);
    img.src = array[foreIndex++]
   
    if (foreIndex === array.length) {
        foreIndex = 0
    }

}

setInterval(() => {
    slideForward()
}, 3500)


forward.addEventListener('click', () => {
    slideForward()
})


function slideBackward() {
    console.log('Button Clicked backward');
    if (backIndex >= 0) {
        img.src = array[backIndex--]


    }
    if (backIndex === -1) {
        backIndex = array.length - 1
    }


}
backward.addEventListener('click', () => {
    slideBackward()
})

// ! Image Slider for Hero Section

