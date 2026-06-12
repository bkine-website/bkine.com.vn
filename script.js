const navToggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.main-nav');navToggle?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const body=[`Name: ${d.get('name')||''}`,`Company: ${d.get('company')||''}`,`Email: ${d.get('email')||''}`,`Phone: ${d.get('phone')||''}`,`Product Interest: ${d.get('interest')||''}`,`Project Name: ${d.get('project')||''}`,'',`Message: ${d.get('message')||''}`].join('\n');window.location.href=`mailto:info@bkine.com.vn?subject=${encodeURIComponent('Website Inquiry - BKINE')}&body=${encodeURIComponent(body)}`;});
fetch('https://counterapi.dev/api/v1/bkine-com-vn/website-visits/up')
  .then(response => response.json())
  .then(data => {
    document.getElementById('visitCount').textContent = data.count || data.data || 'N/A';
  })
  .catch(() => {
    document.getElementById('visitCount').textContent = 'N/A';
  });
