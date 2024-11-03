/** @format */

// header
let otherLinks = Object.assign(document.createElement("div"), {
  className: "other-links",
  innerHTML: `
                    <img src="/photos/megamenu.png" alt="">
                    <ul>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#team-members">Teem Members</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#skills">Our Skills</a></li>
                        <li><a href="#how-it-work">How To Work</a></li>
                    </ul>
                    <ul>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#pricing">Pricing Plans</a></li>
                        <li><a href="#videos">Top Videos</a></li>
                        <li><a href="#stats">Stats</a></li>
                        <li><a href="#discount">Request A Discount</a></li>
                    </ul>`,
});

let onOf = 0;
document.querySelector("ul.nav li.click").onclick = function (e) {
  onOf++;
  if (onOf % 2) {
    this.append(otherLinks);
    setTimeout(() => {
      otherLinks.style.cssText = "opacity:1; top: 100% ;";
    }, 150);
  } else {
    otherLinks.style.cssText = "opacity:0; top: 115% ;";
    setTimeout(() => {
      otherLinks.remove();
    }, 200);
  }
};

// header


// start evenst

let counter = setInterval(() => {
  let targetDate = new Date("2024 12 31").getTime() - new Date().getTime();
  let days = targetDate / (1000 * 60 * 60 * 24);
  let hours = (targetDate % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60;
  let menutes = (targetDate % (1000 * 60 * 60)) / 1000 / 60;
  let seconds = (targetDate % (1000 * 60)) / 1000;
  let time = [days, hours, menutes, seconds];
  document.querySelectorAll(".events .box span").forEach((e, i) => {
    e.innerHTML = Math.floor(time[i]);
  });

  if (targetDate <= 0) {
    clearInterval(counter);
    console.log("finsh");
  }
}, 1000);

// end event'
// console.log("How to Create Sub Nomain<p>05:18</p>".match(/.+(?=<p>)/gi))
// videos
document.querySelectorAll(".videos ul li").forEach((e) => {
  e.onclick = () => {
    let ele = document.querySelector(".videos .img-box .text");
    ele.style.color = "#fff";
    setTimeout(() => {
      ele.innerHTML = e.innerHTML.match(/.+/gi)[0];
      // console.log(e)
      ele.style.color = "#000";
    }, 400);
  };
});
// videos



// stats
let boxs = document.querySelectorAll(".stats .container .box span");
let done = true
let stats = document.querySelector("body >.stats");
// stats
// skills
let skills = document.querySelector("#skills");
window.onscroll = (_) => {
  if (window.scrollY >= skills.offsetTop - 100) {
    document.querySelectorAll(".skills [data-text]").forEach((e) => {
      e.querySelector("span").style.width = e.getAttribute("data-text");
    });
  }


// skills

// start stats




    // done use to start one time in restart
  if (window.scrollY >= stats.offsetTop - 250   && done) {
    done = false


    boxs.forEach((e) => {
        let end = e.getAttribute("data-num");
        let i = 0;

        // interval to increase numbers
        let intervil = setInterval(() => {
          e.innerHTML = i;
          i+=1
            // end at 2 second and 2000/ end use to end all numbers  at same time
          if (Number(e.innerHTML) >= Number(end)) {
            clearInterval(intervil);
          }
        },  2000/ end);
      
    });
  }
};
// end stats
