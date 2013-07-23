(function($) {
    $.scrapper = function(){
        $('head').append('<link href="http://fonts.googleapis.com/css?family=Just+Another+Hand" rel="stylesheet" type="text/css">')
                 .append('<link href="css/scrapper.css" rel="stylesheet">');

        $('.scrapper').each(function(index, node) {
            console.log(node);
        });
    };
})(jQuery);

$(function() {
    $.scrapper();
});
