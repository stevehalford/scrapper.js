(function($) {
    $.scrapper = function(){
        $('head').append('<link href="http://fonts.googleapis.com/css?family=Just+Another+Hand" rel="stylesheet" type="text/css">');

        $('.scrapper').each(function(index, node) {
            console.log(node);
            $(node).css('background', 'red');
        });
        $('.scrapper, .scrapper *')
            .attr('style', "font-family: 'Just Another Hand', cursive !important");
        $('.scrapper')
            .css('padding', '4px')
            .css('padding-left', '40px')
            .css('padding-right', '20px')
            .css('padding-bottom', '30px')
            .css('padding-top', '25px')
            .css('font-size', '1.4em')
            .css('line-height', '1.5em')
            .css('border', 'dashed 1px lightgray')
            .css('background-image', "url('src/LinedPaperBackground.jpg')")
        ;
    };
})(jQuery);

$(function() {
    $.scrapper();
});