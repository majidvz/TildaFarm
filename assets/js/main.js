let windowWidth = $(window).width();
if (windowWidth >= 992) {
  // Hoverable Dropdown Menu on Pages Header
  $("ul.navbar-nav li.dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
    }
  );
}

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
  if (scroll >= 120) $(".pages-header").addClass("active");
  else $(".pages-header").removeClass("active");
});

// Product Add to Favorites Button
$(".product-card .add-favorites").click(function () {
  if (!$(this).parents().hasClass("dashboard")) {
    if ($(this).children().hasClass("icon-heart-o")) {
      $(this).children().removeClass("icon-heart-o").addClass("icon-heart");
    } else {
      $(this).children().removeClass("icon-heart").addClass("icon-heart-o");
    }
  } else {
    if ($(this).children().hasClass("di-p-heart-o")) {
      $(this).children().removeClass("di-p-heart-o").addClass("di-p-heart");
    } else {
      $(this).children().removeClass("di-p-heart").addClass("di-p-heart-o");
    }
  }
});

// Product Filter Button
$(".products .filter-btn").on("click", function () {
  $(".products .filters").addClass("open");
});

$(".products .close-btn").on("click", function () {
  $(".products .filters").removeClass("open");
});

$(document).on("click", function () {
  if ($(".navbar-collapse").hasClass("show")) $(".navbar-toggler").click();
});
