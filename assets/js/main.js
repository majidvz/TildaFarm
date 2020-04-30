// Hoverable Dropdown Menu on Pages Header
$("ul.navbar-nav li.dropdown").hover(
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
  },
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
  }
);

// Open Header's Search Box
$(".pages-header .search-btn").on("click", function () {
  $(".pages-header .search-box").addClass("active");
});

// Close Header's Search Box
$(".pages-header .search-box .close-btn").on("click", function () {
  $(".pages-header .search-box").removeClass("active");
});

// Fixed Pages Header While Page Scrolled
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 60) $(".pages-header>nav").addClass("active");
  else $(".pages-header>nav").removeClass("active");
});
