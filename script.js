//Global scope variables
const openNav = document.querySelector('.open-nav'),
      closeNav = document.querySelector('.close-nav'),
      navigation = document.querySelector('.navigation'),
      bookMark = document.querySelector('.card-1 .btn-2'),
      bookmarked = document.getElementById('bookmarked'),
      backProjectBtn = document.getElementById('back-project'),
      exit = document.querySelector('.exit'),
      modal = document.querySelector('.modal-default'),
      radios = document.querySelectorAll('.radio'),
      completed = document.querySelector('.completed'),
      gotIt = document.querySelector('.cont button'),
      forms = document.querySelectorAll('.form')

//Execute key functions
eventlisteners()
enterPledge()
finish()
// backProjectAndBookmark()

//Eventlisteners
function eventlisteners(){

  //Toggling Navigation
    openNav.addEventListener('click', () => {
        closeNav.classList.remove('none')
        openNav.classList.add('none')
        navigation.classList.add('show-nav')
        const container = navigation.lastElementChild
        container.style.transform = 'translate(-50%, -50%) scale(1)'
    })

    closeNav.addEventListener('click', () =>{
        openNav.classList.remove('none')
        closeNav.classList.add('none')
        navigation.classList.remove('show-nav')
        const container = navigation.lastElementChild
        container.style.transform = 'translate(-50%, -50%) scale(0)'
    })

    //Bookmark
    bookMark.addEventListener('click', () => {
        bookMark.classList.toggle('bkmd')

        if (bookmarked.innerText === 'Bookmark') {
            bookmarked.innerText = 'Bookmarked'
        } else if (bookmarked.innerText === 'Bookmarked') {
            bookmarked.innerText = 'Bookmark'
        }
    })

    //Back Project
    backProjectBtn.addEventListener('click', () => {
        modal.classList.add('shows')
    })

    //Close Modal
    exit.addEventListener('click', () => {
        modal.classList.remove('shows')
    })
}

function enterPledge() {
    radios.forEach(radio => {
    radio.checked === false
       radio.addEventListener('click', (e) =>{
            e.target.checked === true 
            radios[3].checked === false
            radios[3].parentElement.parentElement.parentElement.classList.add('not-part')
            document.querySelectorAll('.show').forEach(show => show.classList.remove('show'))
            document.querySelectorAll('.parts').forEach(part => part.classList.remove('parts'))
            e.target.parentElement.parentElement.parentElement.lastElementChild.classList.add('show')
            e.target.parentElement.parentElement.parentElement.classList.add('parts')
        })
        
    });
}


function finish() {
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
      
        const input = e.target.querySelector('.amount input')

        if (input.value === '') {
             alert('Input Required')
        }else{
             completed.classList.add('show')
             modal.classList.remove('shows')
        }

      })
    });
 
     gotIt.addEventListener('click', () => {
        completed.classList.remove('show')
        modal.classList.remove('shows')
    })
}

window.addEventListener('scroll', () => {

    if(document.body.getBoundingClientRect().top <= -190){
        document.querySelector('.header-top').classList.add('background-header')
        console.log(document.body.getBoundingClientRect().top);
    } else{
        document.querySelector('.header-top').classList.remove('background-header')
    }
})

/*
const
const modal = document.querySelector('.modal-default')
const exit = document.querySelector('.exit')
const backProjectBtn = document.getElementById('back-project')
const bookmarked = document.getElementById('bookmarked')
const h3s = document.querySelectorAll('.modal-default .container .sub-con .top h3')
const input = document.getElementById('input-1')
const radios = document.querySelectorAll('.radio')
const pledges = document.querySelectorAll('.enter-pledge')
const parts = document.querySelectorAll('.modal-default .container .sub-con .part')
const contBtn = document.querySelectorAll('.continue')
const completed = document.querySelector('.completed')
const gotIt = document.querySelector('.cont button')
const forms = document.querySelectorAll('.form-1')
const toggleNav = document.querySelector('.header .container svg')
const nav = document.querySelector('.mobile')
const exitNav = document.querySelector('.mobile .container svg')




backProjectAndBookmark()
enterPledge()
finish()
mobileNav()

function backProjectAndBookmark() {
    bookMark.addEventListener('click', () => {
        bookMark.classList.toggle('bkmd')

         if (bookmarked.innerText === 'Bookmark') {
              bookmarked.innerText = 'Bookmarked'
         } else if (bookmarked.innerText === 'Bookmarked') {
             bookmarked.innerText = 'Bookmark'
         }
    })

    exit.addEventListener('click', () => {
        modal.classList.remove('shows')
    })

    backProjectBtn.addEventListener('click', () => {
        modal.classList.add('shows')
    })
}

h3s.forEach(h3 => {
    h3.addEventListener('mouseenter', (e)=> {
        if (e.target.style.color = 'black') {
            e.target.style.color = 'hsl(176, 50%, 47%)'
        }else{
            
        }
    })

    h3.addEventListener('mouseleave', (e)=> {
        if (e.target.style.color = 'hsl(176, 50%, 47%)') {
            e.target.style.color = ''
        }
        
    })
});

function enterPledge() {
    radios.forEach(radio => {
        radio.checked === false
       radio.addEventListener('click', (e) =>{

             e.target.checked === true 
             radios[3].checked === false
             radios[3].parentElement.parentElement.parentElement.classList.add('not-part')
             document.querySelectorAll('.show').forEach(show => show.classList.remove('show'))
             document.querySelectorAll('.parts').forEach(part => part.classList.remove('parts'))
             e.target.parentElement.parentElement.parentElement.lastElementChild.classList.add('show')
             e.target.parentElement.parentElement.parentElement.classList.add('parts')

        })
        
    });
}

function finish() {
   forms.forEach(form => {
     form.addEventListener('submit', () => {
        completed.classList.add('show')
        modal.classList.remove('shows')
     })
   });

    gotIt.addEventListener('click', () => {
        completed.classList.remove('show')
        modal.classList.remove('shows')
    })
}

function mobileNav() {
    toggleNav.addEventListener('click', () => {
        toggleNav.style.display = 'none'
        nav.classList.add('shownav')
    })

    exitNav.addEventListener('click', () => {
        toggleNav.style.display = 'unset'
        nav.classList.remove('shownav')
    })
}

*/