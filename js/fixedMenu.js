// var scrolled;
// window.onscroll = function() {
//     scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     if(scrolled > 500){
//         $(".header-section-fixed").addClass("fixed-active")
//     }
//     if(500 > scrolled){
//         $(".header-section-fixed").removeClass("fixed-active")
//     }
//     if(scrolled > 7380){
//         $(".header-section-fixed").removeClass("fixed-active")
//     }
// }

if( $(window).width() > 2840){
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 70){
            $(".header-section-fixed").addClass("fixed-active")
        }
        if(70 > scrolled){
            $(".header-section-fixed").removeClass("fixed-active")
        }
        if(scrolled > 6500){
            $(".header-section-fixed").addClass("fixed-close")
        }
        if(scrolled < 6500){
            $(".header-section-fixed").removeClass("fixed-close")
        }
    }
} else

if( $(window).width() > 1600){
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 70){
            $(".header-section-fixed").addClass("fixed-active")
        }
        if(70 > scrolled){
            $(".header-section-fixed").removeClass("fixed-active")
        }
        if(scrolled > 7550){
            $(".header-section-fixed").addClass("fixed-close")
        }
        if(scrolled < 7550){
            $(".header-section-fixed").removeClass("fixed-close")
        }
    }
} else

if($(window).width()> 1400){
	var scrolled;
	window.onscroll = function() {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 70){
			$(".header-section-fixed").addClass("fixed-active")
		}
		if(70 > scrolled){
			$(".header-section-fixed").removeClass("fixed-active")
		}
		if(scrolled > 7550){
			$(".header-section-fixed").addClass("fixed-close")
		}
		if(scrolled < 7550){
			$(".header-section-fixed").removeClass("fixed-close")
		}
	}
} else

if($(window).width()> 759){
	var scrolled;
	window.onscroll = function() {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 70){
			$(".header-section-fixed").addClass("fixed-active")
		}
		if(70 > scrolled){
			$(".header-section-fixed").removeClass("fixed-active")
		}
		if(scrolled > 8050){
			$(".header-section-fixed").addClass("fixed-close")
		}
		if(scrolled < 8050){
			$(".header-section-fixed").removeClass("fixed-close")
		}
	}
} else
if($(window).width()> 400){
	var scrolled;
	window.onscroll = function() {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 30){
			$(".header-section-fixed").addClass("fixed-active")
		}
		if(30 > scrolled){
			$(".header-section-fixed").removeClass("fixed-active")
		}
		if(scrolled > 9550){
			$(".header-section-fixed").addClass("fixed-close")
		}
		if(scrolled < 9550){
			$(".header-section-fixed").removeClass("fixed-close")
		}
	}
}
else
if($(window).width()> 320){
	var scrolled;
	window.onscroll = function() {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 30){
			$(".header-section-fixed").addClass("fixed-active")
		}
		if(30 > scrolled){
			$(".header-section-fixed").removeClass("fixed-active")
		}
		if(scrolled > 10500){
			$(".header-section-fixed").addClass("fixed-close")
		}
		if(scrolled < 10500){
			$(".header-section-fixed").removeClass("fixed-close")
		}
	}
}

(function(document, history, location) {
    var HISTORY_SUPPORT = !!(history && history.pushState);

    var anchorScrolls = {
      ANCHOR_REGEX: /^#[^ ]+$/,
      OFFSET_HEIGHT_PX: 40,

      /**
       * Establish events, and fix initial scroll position if a hash is provided.
       */
      init: function() {
        this.scrollToCurrent();
        $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
        $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
      },

      /**
       * Return the offset amount to deduct from the normal scroll position.
       * Modify as appropriate to allow for dynamic calculations
       */
      getFixedOffset: function() {
        return this.OFFSET_HEIGHT_PX;
      },

      /**
       * If the provided href is an anchor which resolves to an element on the
       * page, scroll to it.
       * @param  {String} href
       * @return {Boolean} - Was the href an anchor.
       */
      scrollIfAnchor: function(href, pushToHistory) {
        var match, anchorOffset;

        if(!this.ANCHOR_REGEX.test(href)) {
          return false;
        }

        match = document.getElementById(href.slice(1));

        if(match) {
          anchorOffset = $(match).offset().top - this.getFixedOffset();
          $('html, body').animate({ scrollTop: anchorOffset});

          // Add the state to history as-per normal anchor links
          if(HISTORY_SUPPORT && pushToHistory) {
            history.pushState({}, document.title, location.pathname + href);
          }
        }

        return !!match;
      },

      /**
       * Attempt to scroll to the current location's hash.
       */
      scrollToCurrent: function(e) {
        if(this.scrollIfAnchor(window.location.hash) && e) {
            e.preventDefault();
        }
      },

      /**
       * If the click event's target was an anchor, fix the scroll position.
       */
      delegateAnchors: function(e) {
        var elem = e.target;

        if(this.scrollIfAnchor(elem.getAttribute('href'), true)) {
          e.preventDefault();
        }
      }
    };

      $(document).ready($.proxy(anchorScrolls, 'init'));
  })(window.document, window.history, window.location);
