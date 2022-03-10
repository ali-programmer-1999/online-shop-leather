// page1
const slider = document.querySelector(".box-img-page1");
const slid_child = slider.childElementCount;
const slide_show = slid_child * -20;

var current = 0;

setInterval(() => {
  if(current > slide_show){
    current -= 20;
    slider.style.right = current + "%";
  }
  else{
    current = 0;
    slider.style.right = 0;
  }
}, 2000);
