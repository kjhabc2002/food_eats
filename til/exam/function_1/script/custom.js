/* show,hide 메서드효과 */
$('.show-btn').click(function(){
    $('div').show();
})

$('.hide-btn').click(function(){
    $('div').hide();
})

/* mouseenter,mouseleave 함수효과*/

$('.btn').mouseenter(function(){
    $('div').show();
})

$('.btn').mouseleave(function(){
    $('div').hide();
})