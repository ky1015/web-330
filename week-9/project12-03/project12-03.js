"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Kylie Struhs
      Date:   May 14 2024

      Filename: project12-03.js

      3.Go to the project12-03.js file in your code editor.
        Below the comment section apply the click() method to the article > h2 selector.
        Within the anonymous function inserted into the click() method, do the tasks described in Steps 4 through 6.
      4.Declare the following variables using jQuery.
        a.Declare the heading variable referencing the target of the click event.
        b.Declare the list variable referencing the next sibling element of the heading variable.
        c.Declare the headingImage variable referencing the children of the heading variable whose tag name is “img”
      5.Alternate between hiding and showing the content of the lists by applying the slideToggle() method to the
        list variable over a half-second interval.
      6.Change the symbol displayed in the headings by applying the attr() method to headingImage variable
        to get the value of the src attribute. If src attribute value is equal to “plus.pg”, apply the attr() method
        to headingImage to set the src attribute value to “minus.png”; otherwise set the src attribute value to “plus.png”
*/

// run once the page is loaded and ready
$ ( () => {

    // on click
    $("article > h2").click( e => {
      let heading = $(e.target);
      let list = $(heading.next());
      let headingImage = heading.children("img");

      // alternate between hiding and showing content of lists
      $(list).slideToggle()(500);

      // change symbol displayed in headings
      if ($(headingImage).attr("src") === "plus.png") {
        $(headingImage).attr("src", "minus.png");
      } else {
        $(headingImage).attr("src", "plus.png");
      }
    })

})