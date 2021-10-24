$(function () {

  $('.black').fadeOut(1000)
  $('.foo').fadeOut(500, ()=>{$('.main-bg-block').css({transform: "scale(1)"})})
  
  
  new Vue({
    el: '#app',
    data: {
      nowOpen: 'main',
      title: '<img src="./img/logo.svg" alt="Анастасия Найденова">',
      works: [
        {
          image: "background-image: url('./img/works/1.png')",
          title: 'Picture 1',
          description: 'description 1',
          id: 1
        },
        {
          image: "background-image: url('./img/works/1.png')",
          title: 'Picture 1',
          description: 'description 1',
          id: 2
        },
        {
          image: "background-image: url('./img/works/1.png')",
          title: 'Picture 1',
          description: 'description 1',
          id: 3
        },
        {
          image: "background-image: url('./img/works/1.png')",
          title: 'Picture 1',
          description: 'description 1',
          id: 4
        },

      ],
      projects: [
        {
          image: "background-image: url('./img/works/1.png')",
          title: 'project 1 name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos nobis maiores repellat, consequatur vitae hic voluptatum itaque saepe commodi!',
          id: 1
        },

        {
          image: "background-image: url('./img/works/1.png')",
          title: 'project 1 name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos nobis maiores repellat, consequatur vitae hic voluptatum itaque saepe commodi!',
          id: 2
        },

        {
          image: "background-image: url('./img/works/1.png')",
          title: 'project 1 name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos nobis maiores repellat, consequatur vitae hic voluptatum itaque saepe commodi!',
          id: 3
        },

        {
          image: "background-image: url('./img/works/1.png')",
          title: 'project 1 name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos nobis maiores repellat, consequatur vitae hic voluptatum itaque saepe commodi!',
          id: 4
        },
      ],
      studio: [
        {
          image: "background-image: url('./img/works/1.png')",
          title: 'Lorem ipsum dolor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos nobis maiores repellat, consequatur vitae hic voluptatum itaque saepe commodi!',
          id: 1
        },
        {
          image: "background-image: url('./img/works/1.png')",
          title: 'Lorem ipsum dolor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos nobis maiores repellat, consequatur vitae hic voluptatum itaque saepe commodi!',
          id: 2
        },
        {
          image: "background-image: url('./img/works/1.png')",
          title: 'Lorem ipsum dolor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos nobis maiores repellat, consequatur vitae hic voluptatum itaque saepe commodi!',
          id: 3
        }
      ]
    },
    mounted() {
      document.getElementById('sound').muted = true
      window.wow = new WOW({
        // settings here
      });
      wow.init();

      $('.header-logo').css('display', 'none')

      $('.header-sound').on('click', () => {
        document.getElementById('sound').play()
        let muted = document.getElementById('sound').muted
        if (muted) {
          document.getElementById('sound').muted = false
          muted = false
        } else {
          document.getElementById('sound').muted = true
          muted = true
        }
        $('.header-sound').toggleClass('active')
      })

      $(".header-menu").on('click', () => {
        if ($(".header-menu").hasClass('open')) {
          $(".menu").hide()
          $(".header-menu").removeClass('open')
          $('#app').css({maxWidth: 'none', maxHeight: 'none', overflow: 'visible'})
          $('html').css({overflow: 'visible'})
          $('body').css({overflow: 'visible', overflowX: "hidden"})
          $('.main-bg-block').css({transform: "scale(1)"})
        } else {
          $(".menu").fadeIn(2000)
          $(".menu-links span").each(function() {
           wow.show(this)
          });
          $('.menu-lang').each(function() {
            wow.show(this)
          })
          $('.main-bg-block').css({transform: "scale(1.2)"})
          $(".header-menu").addClass('open')
          $('#app').css({maxWidth: '100vw', maxHeight: '100vh', overflow: 'hidden'})
          $('html').css({overflow: 'hidden'})
          $('body').css({overflow: 'hidden'})
        }
      })

      $(".contact-close").on('click', () => {
        $(".contact").fadeOut()
      })

      $(".contact").on('click', function (e) {
        if ($(e.target).hasClass('contact-box')) {
          $(".contact").fadeOut()
        }
      })

      $('.contact-form').submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        $.ajax({
          type: 'POST',
          url: './php/send.php',
          data: $form.serialize()
        }).done(function () {
          alert('Спасибо за обращение! Скоро я отвечу вам.')
          $('.contact-form input').val('');
          $('.contact-form textarea').val('');
        }).fail(function () {
          console.log('fail');
        });
      });
    },
    computed: {
      bgUrl() {
        return `background-image: url("./img/bgs/${this.nowOpen}-bg.jpg")`
      },
      windowWidth() {
        let width = $(window).width()
        return width
      }
    },
    methods: {
      openTab(tab, title, subtitle) {
        $(".menu").fadeOut(200, ()=>{
          $(".header-menu").removeClass('open')
          $('.main-bg-block').css({transform: "scale(1)"})
        })
        $('#app').css({maxWidth: 'none', maxHeight: 'none', overflow: 'visible'})
        $('html').css({overflow: 'visible'})
        $('body').css({overflow: 'visible', overflowX: "hidden"})
        this.nowOpen = tab
        this.title = title
        this.subtitle = subtitle
        $(".main-block").hide(1000, function() {
          $('.main-block').slideDown(1000)
        })
      },
      openContact() {
        $(".contact").fadeIn();
      },
      scrollDown() {
        var y = $(window).scrollTop();
        $("html, body").animate({ scrollTop: y + 400 }, 600);
      },
      openProject(id) {
        if (!$(event.target).hasClass('close')) {
          $('#project-' + id).fadeIn();
        }
      },
      closeProject(id) {
        $('#project-' + id).fadeOut();
      }
    }
  })
})
