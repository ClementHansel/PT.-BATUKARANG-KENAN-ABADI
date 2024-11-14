// Initialization for ES Users Navbar
import { Collapse, Dropdown, initTWE } from "tw-elements";

initTWE({ Collapse, Dropdown });

// Initialization for ES Users Email Subscription Form
import { Ripple, initTWE } from "tw-elements";

initTWE({ Ripple });

function openProducts(evt, productsName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(productsName).style.display = "block";
  evt.currentTarget.className += " active";
}
