

// MODAL WINDOW
  Vue.component('modal-window', {
  // data: function () {
  //   return {
  //     count: 0
  //   }
  // },
  template: `
  <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
            File Browser
          </h2>
          <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>

        <!-- MAIN CONTENT -->
        <main class="modal__content" id="modal-1-content">

          <div class="folderContainer">
            <a href="#" class="desktopIcon">
            <img src="https://img.freepik.com/free-vector/illustration-of-data-folder-icon_53876-6329.jpg?size=338&ext=jpg" class="desktopIconImg" alt="">
            <p>Folder</p>
          </a>

          <a href="#" class="desktopIcon">
            <img src="https://img.freepik.com/free-vector/illustration-of-data-folder-icon_53876-6329.jpg?size=338&ext=jpg" class="desktopIconImg" alt="">
            <p>Folder</p>
          </a>

          <a href="#" class="desktopIcon">
            <img src="https://img.freepik.com/free-vector/illustration-of-data-folder-icon_53876-6329.jpg?size=338&ext=jpg" class="desktopIconImg" alt="">
            <p>Folder</p>
          </a>
          </div>

        </main>

        <footer class="modal__footer">
          <button class="modal__btn modal__btn-primary">Continue</button>
          <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
        </footer>
      </div>
    </div>
  </div>

  `
});


var desktop = new Vue({
  el: '#desktopContainer',
  data: {
    desktop: {
      me: {
        displayName: "Me.png",
        icon: "https://img.freepik.com/free-vector/illustration-of-data-folder-icon_53876-6329.jpg?size=338&ext=jpg",
        clickyfunc: "me"
      },
      about: {
        displayName: "About",
        icon: "https://img.freepik.com/free-vector/illustration-of-data-folder-icon_53876-6329.jpg?size=338&ext=jpg",
        clickyfunc: "about"
      },
      portfolio: {
        displayName: "Portfolio",
        icon: "https://img.freepik.com/free-vector/illustration-of-data-folder-icon_53876-6329.jpg?size=338&ext=jpg",
        clickyfunc: "portfolio"
      }
    }
  },

  methods: {
    dude(inject) {
      console.log("You have clicked the " + inject + " folder!");
    }
  },
})
