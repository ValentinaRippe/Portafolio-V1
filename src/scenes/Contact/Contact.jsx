import React from 'react'

export function Contact() {
    //Form submit
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#emailSubmit')

 $form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:lauravalentina200102@gmail.com?subject= nombre ${form.get('name')}  correo ${form.get('email')}&body= ${form.get('message')}`)
  $buttonMailto.click()
}
  return (
            <div className="u-wrapper">
                <div className="contact-content">
                    <form id="form" action="" className="form">
                        <img className="logocard" src="img/logofooter.png" alt=""/>
                        <label for="name"></label>
                        <input name="name" required type="text" id="name" placeholder="Name"/>
                        <label htmlFor="email"></label>
                        <input name="email" type="text" id="email" required placeholder="E-mail"/>
                        <label for="message"></label>
                        <textarea id="message" name="message" id="" cols="30" rows="10"
                            placeholder="Message"></textarea>
                        <button type="submit" className="btnSubmit">Submit</button>
                        <a href="mailto:lauravalentina200102@gmail.com" id="emailSubmit" style="opacity: 0;">mail</a>
                    </form>
                </div>
            </div>
  )
}
