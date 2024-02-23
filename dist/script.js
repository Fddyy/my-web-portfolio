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
    const btn = document.getElementById('btn');
    
    btn.addEventListener('click', function() {
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i>Loading'
    })

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          myAlert.classList.toggle('hidden');
          myAlert.classList.toggle('succsess');
          myAlert.innerHTML += 'Terima kasih pesan anda sudah kami terima!';
          btn.innerHTML = 'Kirim';
          console.log('succsess!', response);
          form.reset();
        })
        .catch(error => {
          myAlert.classList.toggle('hidden');
          myAlert.classList.toggle('danger');
          myAlert.innerHTML += 'Terjadi kesalahan, gagal mengirim pesan';
          btn.innerHTML = 'Kirim';
          alert(error.message)
        });
    });