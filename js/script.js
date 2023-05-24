let menuIcon = document.querySelector('#menuIcon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navBar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
   sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');
      
      if (top >= offset && top < offset + height) {
         navlinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
         });
         
         section.classList.add('show-animate');
      } else {
         section.classList.remove('show-animate');
      }
   })
   
   let header = document.querySelector('header');
   
   header.classList.toggle('sticky', window.scrollY > 100);
   
   menuIcon.classList.remove('bx-x');
   navBar.classList.remove('active');
   
   //animation footer on scroll
   let footer = document.querySelector('footer');
   
   footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}
