"use strict";

function isInViewport(item) {
  if (item instanceof Element) {
    const rect = item.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  } else {
    console.error('item is not a valid DOM element:', item);
    return false;
  }
}

const items = document.querySelectorAll('.animate-text-transition');

// if(items.length <= 0) 
// {
//   console.log("no html elements");
// }
// else
// {
//   console.log("Theres html elements");
// }

items.forEach((item) => {
    item.style.display = "none";
});



function throttle(fn, wait)
{
    let time = Date.now();
    return () => {
        if((time + wait - Date.now()) < 0)
        {
            fn();
        }
    }
}

function onScroll()
{
    items.forEach((item) => {
        if (isInViewport(item)) {
            if(item.style.display !== "block")
            {
                item.style.display = "block"
                item.setAttribute("class", "absolute h-10 before:content-[''] before:text-white before:absolute before:inset-0 before:animate-typewriter before:bg-black after:content-[''] after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white");

            }
    
        }
        else {
            if (item.style.display !== "none") {
              item.style.display = "none";
            }
          }
      });
}

onScroll();

window.addEventListener("scroll", throttle(onScroll, 200));
