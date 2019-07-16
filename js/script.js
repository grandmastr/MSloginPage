$(document).ready(function() {
    let form = $('form')
    let emailForm = $('form #email')
    let passwordForm = $('form #password')
    let formBody = $('.form-body')
    let title = $('.page-title')
    let helpBlock = $('.help-block')
    let button = $('.button-text')
    passwordForm.hide()
    button.on('click', function(e) {
        if (button.text() === 'Next') {
            e.preventDefault()
            formBody.css({opacity: 0.8, cursor: 'wait'})
            $('input,a').css({cursor: 'wait'}).attr({disabled: 'true'})
            setTimeout(
                () => {
                    emailForm.fadeOut(500, () => {
                        passwordForm.fadeIn(500)
                        formBody.css({opacity: 1, cursor: 'pointer'})
                        $('input:not([type="submit"])').css({cursor: 'text'}).removeAttr('disabled')
                        $('input[type="submit"], a').css({cursor: 'pointer'})
                        title.text("Enter password")
                        helpBlock.html('<a href=""> Forgot my password </a>')
                        button.removeAttr('disabled')
                        button.text('Sign in')
                    })
                }, 3000
            )
        } else {
            form.submit()
        }
    })
})