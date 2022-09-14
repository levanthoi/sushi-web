// Khuyến mại, active content
jQuery(document).ready(function () {
  jQuery(".title-promotion").click(function () {
    jQuery(".title-promotion").removeClass("active");
    var stt = jQuery(this).attr("name");
    jQuery(this).addClass("active");
    jQuery(".content-promotion:visible").slideUp("slow");
    jQuery(".content-promotion-" + stt).slideDown("slow");
  });
});

// Footer scroll
jQuery(document).ready(function () {
  $(document).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $("#footer-top-scroll").fadeIn("slow");
    } else {
      $("#footer-top-scroll").fadeOut();
    }
  });
  //
  $("#footer-top-scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});

// Show cart
$(function () {
  $(".btn-show-cart").hover(
    function () {
      $(".box-cart").fadeIn("slow");
    },
    function () {}
  );
  $(".shoppingcart").hover(
    function () {
      //                    $('.box-cart').fadeIn('slow');
    },
    function () {
      $(".box-cart").fadeOut("slow");
    }
  );
  $(".shoppingcart-content").click(function () {
    if ($(".box-cart").is(":visible")) {
      $(".box-cart").fadeOut("slow");
    } else {
      $(".box-cart").fadeIn("slow");
    }
  });
});

// Select Language
jQuery(document).ready(function () {
  jQuery(".language .language-action").on("click", function () {
    var thi = jQuery(this);
    if (!thi.hasClass("active") && !thi.parent().hasClass("active")) {
      var url = thi.attr("href") ? thi.attr("href") : thi.attr("src");
      if (!url) return false;
      jQuery.ajax({
        type: "post",
        dataType: "JSON",
        url: url,
        beforeSend: function () {},
        success: function (res) {
          thi.addClass("active");
          if (res.code == 200) {
            if (res.redirect) window.location.href = res.redirect;
            else window.location.href = window.location.href;
          }
        },
        error: function () {},
      });
    }
    return false;
  });
});

// auto slider
// $(document).ready(function () {
//   var owl = $("#owl-demo");
//   owl.owlCarousel({
//     itemsCustom: [
//       [0, 1],
//       [450, 1],
//       [600, 1],
//       [900, 1],
//       [1000, 1],
//       [1200, 1],
//     ],
//     navigation: true,
//     autoPlay: true,
//   });
// });

// ADD TO CART
function increaseQty(_this) {
    var qtyElement = jQuery(_this).prev();
    var qty = qtyElement.val();
    qtyElement.val(parseInt(qty) + 1);
}
function reductionQty(_this) {
    var qtyElement = jQuery(_this).next();
    var qty = qtyElement.val();
    if (qty >= 2) {
        qtyElement.val(parseInt(qty) - 1);
    }
}
jQuery(document).ready(function () {

    jQuery('.btn_add_food').click(function () {
        $('.loading-shoppingcart').show();
        var url = '/economy/shoppingcart/add'; // Error GET
        var pid = $(this).attr('name');
        var qty = $('.qty-' + pid).val();
        $.ajax({
            url: url,
            dataType: "json",
            data: { pid: pid, qty: qty },
            success: function (msg) {
                $('.loading-shoppingcart').hide();
                location.href = '/gio-hang.html';
            }
        });
    });

});
