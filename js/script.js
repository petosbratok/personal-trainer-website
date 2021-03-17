// fixed header
header_sub = document.getElementById("header-sub")
main = document.getElementById("main")
window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos >= 80) {
    header_sub.classList.add("fixed")
    main.style.marginTop = "80px";
  }
  else {
    header_sub.classList.remove("fixed")
    main.style.marginTop = "0px";
  }
})

function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

// header form activation
form_block = document.getElementById("form-fullscreen")
body = document.getElementsByTagName("body")[0]

function hide_form(){
  form_block.style.display = "none";
  body.style.overflowY = "visible"
}

function show_form(){
  form_block.style.display = "block";
  body.style.overflowY = "hidden"
}

//side menu activation
var hamburger = document.querySelector(".hamburger");
var ul_container = document.querySelector(".ul-container")
  // On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  body.classList.toggle("hide_scroll");
  ul_container.classList.toggle("hidden");
});

// phone input
function setCursorPosition(pos, e) {
    // e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

function mask(e) {
  //console.log('mask',e);
  var matrix = this.placeholder,// .defaultValue
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function(a) {
    return val.charAt(i++) || "_"
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
  setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function() {
  var input = document.querySelector("#online_phone");
  input.addEventListener("input", mask, false);
  // input.focus();
  setCursorPosition(3, input);

  var input = document.querySelector("#online_phone_2");
  input.addEventListener("input", mask, false);
  // input.focus();
  setCursorPosition(3, input);
});
