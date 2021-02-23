
$(document).ready(()=> {

    $('#aboutTitle').hide()
    $('#about').hide()

    $('#contactTitle').hide()
    $('#contact').hide()

    $('#navCircle').on('mouseenter', () => {
        $('#navCircle').animate({
            width: '49em',
            height: '49em'
        }, 1500);

        $('#aboutTitle').fadeIn(2200);
        $('#about').fadeIn(2200);
        $('#contactTitle').fadeIn(2200)
        $('#contact').fadeIn(2200)
        $('#root').fadeOut(500)
    })

    $('#navCircle' && '#docBody').on('click', () => {
        $('#navCircle').animate({
            height: '2.5em',
            width: '2.5em'
        }, 1500);
        $('#aboutTitle').fadeOut(1700)
        $('#about').fadeOut(1700)

        $('#contactTitle').fadeOut(1700)
        $('#contact').fadeOut(1700)
        $('#root').fadeIn(3800)

    })

})