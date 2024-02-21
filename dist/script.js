// Hamburger
const hb = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hb.addEventListener('click', function() {
    hb.classList.toggle('hamburger-aktif');
    navmenu.classList.toggle('hidden')
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxGoPifMcR1cYFL4Xkssvizj6Mt59UUMCayrEvOu4QrSTZuZtgRbzfGr9eVITD63vSJ/exec'
    const form = document.forms['My-web-portfolio contact form'];
    const myAlert = document.getElementById('alert');

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          myAlert.classList.toggle('hidden')
          console.log('succsess!', response)
          form.reset();
        })
        .catch(error => alert(error.message))
    })