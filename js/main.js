"use strict"

// I wrote these myself

// hide the side after load page
showSide();

// the id of the slideShow class, the first on in array is 0
let id = 0;
/** function slideShowFunc()

the function to display only one image at once in a <div> which have images that class name are slideShow

no parameters:
**/
function slideShowFunc() {
    // get the array of the img that use slideShow class
    let imgs = document.getElementsByClassName("slideShow");
    // show current img
    imgs[id].style.display = "block";
    // hide all other image
    for (let i=0; i<imgs.length; i++) {
        if (i!=id) {
            imgs[i].style.display = "none";
        } 
    }
    // then show use the next id to show next img
    id += 1;
    // if the id is > or = the count of the img that use slideShow class then back to the first one
    if (id>=imgs.length) {
        id = 0;
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    // run the script every 5 sec
    setTimeout(slideShowFunc, 5000); 
}
// run the function after load page
slideShowFunc();

// this is learn from https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
/** function scrollAnimation(animationClass)

the function to show animation when a class element is visible

Parameters:
 * @param {string} class - string, the animation class that have to be measured if it is visible
**/
function scrollAnimation(animationClass) {
    let observer = new IntersectionObserver(entries => {
        // check all the entries
        entries.forEach(entry => {
            // I want it remove every time to make sure there is no other problems casue the animation could not be start again
            entry.target.classList.remove(animationClass);
            // if the element is visible
            if (entry.isIntersecting) {
                // add the animation class
                entry.target.classList.add(animationClass);
            }
        });
    });
    // ↓↓↓ apply animation only to the first elements
    // observer.observe(document.querySelector("."+animationClass));
    // select all elements with animationClass
    let aClasses = document.querySelectorAll("."+animationClass);
    // apply animation to all elements with animationClass
    aClasses.forEach(aClass => observer.observe(aClass));

}
// run the function after load page
scrollAnimation("titleAnimation");
scrollAnimation("descAnimation");

