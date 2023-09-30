 const hamMenu = document.querySelector('.hamburger-menu');
 const navigationUl = document.querySelector('.navigation-list ul');

 hamMenu.onclick = () => {
     hamMenu.classList.toggle('hide');
     navigationUl.classList.toggle('active')

 }

 // ******************************************


 const tabs = document.querySelectorAll('.tabs nav ul li');
 const tabContents = document.querySelector('.tabs-contents').children;
 let totalContent = tabContents.length;
 let totalTab = tabs.length;
 let index = 0;

 console.log(tabs);

 for (let i = 0; i < tabs.length; i++) {

     tabs[i].addEventListener('click', () => {

         const tabId = tabs[i].getAttribute("id");

         for (let x = 0; x < tabs.length; x++) {
             tabs[x].classList.remove('active')
         }
         tabs[i].classList.add('active');
         const content = document.querySelector(`${"#" + tabId + "-content"}`);
         for (let j = 0; j < tabContents.length; j++) {
             tabContents[j].classList.remove('active');
         }
         content.classList.add('active');
         clearInterval(timer);
         index = i;

         timer = setInterval(autoSlider, 2000);

     })



 }

 function tabSlider() {
     if (index == totalTab - 1 && index == totalContent - 1) {
         index = 0
     } else {
         index++
     }

     for (let i = 0; i < tabs.length; i++) {
         tabs[i].classList.remove('active')
     }
     tabs[index].classList.add('active');


     for (let j = 0; j < tabContents.length; j++) {
         tabContents[j].classList.remove('active')
     }

     tabContents[index].classList.add('active');

 }

 function autoSlider() {
     tabSlider()
 }
 let timer = setInterval(autoSlider, 2000);