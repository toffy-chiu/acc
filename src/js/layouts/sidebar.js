$(document)
    .on('click', '.nav-list', function(e){
        var $link = $(e.target).closest("a");
        if (!$link || $link.length == 0) {
            return;
        }
        if (!$link.hasClass("dropdown-toggle")) {
            return;
        }
        var submenu = $link.next().get(0);
        if (!$(submenu).is(":visible")) {
            var $submenu = $(submenu.parentNode).closest("ul");
            $submenu.find("> .open > .submenu").each(function() {
                if (this != submenu && !$(this.parentNode).hasClass("active")) {
                    $(this).slideUp(200).parent().removeClass("open")
                }
            });
        }
        $(submenu).slideToggle(200).parent().toggleClass("open");
        return false;
    })
;