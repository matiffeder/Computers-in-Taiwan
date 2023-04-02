"use strict"

// I wrote these myself

/** function showSide(show=false)

the function to show or hide sideNav.
use true in parameter to show it.

Parameters:
 * @param {boolean} show - boolean, true or false. true to show sideNav, false to hide it
**/
function showSide(show=false) {
    if (show) {
        // move sideNav back to original position
        document.getElementById('sideNav').style.left='0%';
    } else {
        // move sideNav to left so that it is hidden
        // since I definded min-width of sideNav, I have to get real width for the element to move it back to make users can't see it
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
        document.getElementById('sideNav').style.left=`-${document.getElementById('sideNav').offsetWidth}px`;
    }
}

/** function showSubSide(element, show=false)

the function to show or hide subSide menu by the id of it.
use true in parameter to show it.

Parameters:
 * @param {string} element - string, the id of subSide menu to show or hide
 * @param {boolean} show - boolean, true or false. true to show subSide menu, false to hide it
**/
function showSubSide(element, show=false) {
    if (show) {
        // show subSide menu
        document.getElementById(element).style.display='block';
    } else {
        // hide subSide menu
        document.getElementById(element).style.display='none';
    }
}


