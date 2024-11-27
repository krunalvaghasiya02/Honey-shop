var prevScrollPos = window.pageYOffset;
let arrowup = document.getElementById("arrow-up")
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  document.getElementById("header").style.background = " #b73604"
  // Scroll down 
  if (prevScrollPos < currentScrollPos) {

    document.getElementById("header").classList.add("header-visible");
    arrowup.style.bottom = "10%"
    document.getElementById("header").style.backgroundColor = "#b73604"

  }
  else if (prevScrollPos <= 10) {
    arrowup.style.bottom = "100%"
    document.getElementById("header").style.background = "transparent"
  }
  // Scroll up 
  else {
    document.getElementById("header").classList.add("header-visible");
    document.getElementById("header").classList.remove("header-hidden");

  }
  prevScrollPos = currentScrollPos;
}
function showabout() {
  let blackshadow = document.getElementById("blackshadow")
  let about_form = document.getElementById("about_form")
  blackshadow.style.cssText = `
  opacity: 0.8;
  display: block;
  `;
  about_form.style.transform = "translate(0%)"
}
function closeabout() {
  blackshadow.style.cssText = `
  opacity: 0;
  display: none;
  `;
  about_form.style.transform = "translate(-100%)"
}
function searchshow() {
  let search_box = document.getElementById("search_box")
  search_box.classList.toggle("search_show")
}
// counter js code 
// const myNum = document.querySelectorAll(".count")
// let speed = 200;
// myNum.forEach((myCount) => {
//   let target_count = myCount.dataset.count;
//   let init_count = +myCount.innerText
//   let new_increment_num = Math.floor(target_count / speed);
//   const updateNumber = () => {
//     init_count += new_increment_num;
//     myCount.innerText = init_count;
//     if (init_count < target_count) {
//       setTimeout(() => {
//         updateNumber()
//       }, 5)
//     }

//   }
//   updateNumber();
// })
document.addEventListener("DOMContentLoaded", () => {
  const myNum = document.querySelectorAll(".count");
  let speed = 200;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const myCount = entry.target;
        let target_count = +myCount.dataset.count;
        let init_count = +myCount.innerText;
        let new_increment_num = Math.floor(target_count / speed);

        const updateNumber = () => {
          init_count += new_increment_num;
          if (init_count > target_count) {
            init_count = target_count;
          }
          myCount.innerText = `${init_count}+`;
          if (init_count < target_count) {
            setTimeout(updateNumber, 5);
          }
        };

        updateNumber();
        observer.unobserve(myCount); // Stop observing after animation starts
      }
    });
  }, observerOptions);

  myNum.forEach(countElement => {
    observer.observe(countElement);
  });
});
// slider code 

