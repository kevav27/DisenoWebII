
(function ($) {

  $('#meal_preference').parent().append('<ul class="list-item" id="newmeal_preference" name="meal_preference"></ul>');
  $('#meal_preference option').each(function () {
    $('#newmeal_preference').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
  });
  $('#meal_preference').remove();
  $('#newmeal_preference').attr('id', 'meal_preference');
  $('#meal_preference li').first().addClass('init');
  $("#meal_preference").on("click", ".init", function () {
    $(this).closest("#meal_preference").children('li:not(.init)').toggle();
  });

  var allOptions = $("#meal_preference").children('li:not(.init)');
  $("#meal_preference").on("click", "li:not(.init)", function () {
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $("#meal_preference").children('.init').html($(this).html());
    allOptions.toggle();
  });
  // USE STRICT
  "use strict";


  try {
    
    // TABLE
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
      var actions = ` <div class="table-data-feature">
      <button class="item add" data-toggle="tooltip" data-placement="top"
          title="Agregar">
          <i class="zmdi zmdi-plus"></i>
      </button>
      <button class="item edit" data-toggle="tooltip" data-placement="top"
          title="Editar">
          <i class="zmdi zmdi-edit"></i>
      </button>
      <button class="item delete" data-toggle="tooltip" data-placement="top">
          <i class="zmdi zmdi-delete"></i>
      </button>
      <button class="item" data-toggle="tooltip" data-placement="top">
          <i class="zmdi zmdi-more"></i>
      </button>
  </div>
`;
      // Append table with add row form on add new button click
      $(".add-new").click(function () {
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row =
        '<tr>' + 
            '<td><input type="text" name="bodegaCode" id="bodegaCode"></td>'+
            '<td><input type="text" name="bodegaName" id="bodegaName"></td>'+
            '<td class="desc"><input type="text" name="bodegaShortName" id="bodegaShortName"></td>'+
            '<td class="alias"><input type="text" name="bodegaAlias" id="bodegaAlias"></td>'+
            '<td><input type="text" name="bodega_Address" id="bodega_Address"></td>'+
            '<td><select name="bodega_Medida" id="bodega_Medida"class="form-control"></select></td>' +
            '<td><select name="bodega_Tipo" id="bodega_Tipo"class="form-control"></select></td>' +
            '<td><input type="text" name="bodega_Espacio" id="bodega_Espacio"></td>'+
            '<td>'+ actions +'</td>'  +
        '</tr>';
        $("table").append(row);
        $("table tbody tr").eq(index + 1).find(".edit").toggle();
        
        $('[data-toggle="tooltip"]').tooltip();
      });
      // Add row on add button click
      $(document).on("click", ".add", function(){
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
            input.each(function(){
          if(!$(this).val()){
            $(this).addClass("error");
            empty = true;
          } else{
                    $(this).removeClass("error");
                }
        });
        $(this).parents("tr").find(".error").first().focus();
        if(!empty){
          input.each(function(){
            $(this).parent("td").html($(this).val());
          });			
          $(this).parents("tr").find(".add, .edit").toggle();
          $(".add-new").removeAttr("disabled");
          
        }		
        });
      // Edit row on edit button click
      $(document).on("click", ".edit", function () {
        $(this).parents("tr").find("td:not(:last-child)").each(function () {
          $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
      });
      // Delete row on delete button click
      $(document).on("click", ".delete", function () {
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
      });
    });
  } catch (error) {
    console.log(error);
  }


})(jQuery);



(function ($) {
  // USE STRICT
  "use strict";
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 900,
    outDuration: 900,
    linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'page-loader',
    loadingInner: '<div class="page-loader__spin"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function (url) {
      window.location.href = url;
    }
  });


})(jQuery);


(function ($) {
  // Use Strict
  "use strict";
  try {
    var progressbarSimple = $('.js-progressbar-simple');
    progressbarSimple.each(function () {
      var that = $(this);
      var executed = false;
      $(window).on('load', function () {

        that.waypoint(function () {
          if (!executed) {
            executed = true;
            /*progress bar*/
            that.progressbar({
              update: function (current_percentage, $this) {
                $this.find('.js-value').html(current_percentage + '%');
              }
            });
          }
        }, {
          offset: 'bottom-in-view'
        });

      });
    });
  } catch (err) {
    console.log(err);
  }
})(jQuery);

(function ($) {
  // USE STRICT
  "use strict";

  // Select 2
  try {

    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
      });
    });

  } catch (error) {
    console.log(error);
  }


})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Dropdown 
  try {
    var menu = $('.js-item-menu');
    var sub_menu_is_showed = -1;

    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).on('click', function (e) {
        e.preventDefault();
        $('.js-right-sidebar').removeClass("show-sidebar");
        if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = -1;
        }
        else {
          for (var i = 0; i < menu.length; i++) {
            $(menu[i]).removeClass("show-dropdown");
          }
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = jQuery.inArray(this, menu);
        }
      });
    }
    $(".js-item-menu, .js-dropdown").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
    });

  } catch (error) {
    console.log(error);
  }

  var wW = $(window).width();
  // Right Sidebar
  var right_sidebar = $('.js-right-sidebar');
  var sidebar_btn = $('.js-sidebar-btn');

  sidebar_btn.on('click', function (e) {
    e.preventDefault();
    for (var i = 0; i < menu.length; i++) {
      menu[i].classList.remove("show-dropdown");
    }
    sub_menu_is_showed = -1;
    right_sidebar.toggleClass("show-sidebar");
  });

  $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
    event.stopPropagation();
  });

  $("body,html").on("click", function () {
    right_sidebar.removeClass("show-sidebar");

  });


  // Sublist Sidebar
  try {
    var arrow = $('.js-arrow');
    arrow.each(function () {
      var that = $(this);
      that.on('click', function (e) {
        e.preventDefault();
        that.find(".arrow").toggleClass("up");
        that.toggleClass("open");
        that.parent().find('.js-sub-list').slideToggle("250");
      });
    });

  } catch (error) {
    console.log(error);
  }


  try {
    // Hamburger Menu
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.navbar-mobile').slideToggle('500');
    });
    $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
      var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
      $(this).toggleClass('active');
      $(dropdown).slideToggle('500');
      return false;
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Load more
  try {
    var list_load = $('.js-list-load');
    if (list_load[0]) {
      list_load.each(function () {
        var that = $(this);
        that.find('.js-load-item').hide();
        var load_btn = that.find('.js-load-btn');
        load_btn.on('click', function (e) {
          $(this).text("Loading...").delay(1500).queue(function (next) {
            $(this).hide();
            that.find(".js-load-item").fadeToggle("slow", 'swing');
          });
          e.preventDefault();
        });
      })

    }
  } catch (error) {
    console.log(error);
  }

})(jQuery);
