$(document).ready(()=> {

    $('aboutTitle').hide()
    $('#about').hide()

    $('#contactTitle').hide()
    $('#contact').hide()

    $('#navCircle').on('click', () => {
        $('#navCircle').animate({
            width: '1000px',
            height: '1000px'
        }, 1500);
        $('aboutTitle').fadeToggle(2200);
        $('#about').fadeToggle(2200);
        $('#contactTitle').fadeToggle(2200)
        $('#contact').fadeToggle(2200)
    })

    $('#docBody').on('dblclick', () => {
        $('#navCircle').animate({
            height: '30px',
            width: '30px'
        }, 1500);
        $('#aboutTitle').fadeToggle(1700)
        $('#about').fadeToggle(1700)

        $('#contactTitle').fadeToggle(1700)
        $('#contact').fadeToggle(1700)
    })

})