/***************************************
              COMPONENTS
***************************************/
Vue.component('modal-window', {
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
  },
  data() {
    return {
      activeTitle: "Folder",
      isModalVisible: true,
    }
  },
  props: ['content'],
  template: `
    <transition name="modal-fade">
      <div class="modal draggable" role="dialog" aria-labelledby="modalTitle" v-show="isModalVisible" aria-describedby="modalDescription">
        <header class="modal-header handle" id="modalTitle">
          <h3>
            <slot name="header">
              File Explorer
            </slot>
          </h3>

          <button type="button" class="btn-close" @click="closeModal()" aria-label="Close modal">
            X
          </button>

        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">

          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">

          </slot>
        </footer>
      </div>
    </transition>
  `
});


/***************************************
                  VUE
***************************************/
var desktop = new Vue({
  el: '#desktopContainer',
  data: {
    windows: 0,
    open: "",
    desktop: {
      me: {
        displayName: "Me",
        imgLoc: "./assets/img/file-icon.png",
        content: `
            Hello World, this is my about me section
        `
      },
      about: {
        displayName: "About",
        imgLoc: "./assets/img/file-icon.png"
        /*
        content: "<div @click="changeModalContent">
                    <img src="./loc" />
                  </div>"
        */
      },
      Portfolio: {
        displayName: "Portfolio",
        imgLoc: "./assets/img/folder-icon.png"
      },
      Contact: {
        displayName: "Contact",
        imgLoc: "./assets/img/folder-icon.png"
      }
    },
  },
  methods: {
    addWindow() {
      this.windows += 1;
    },
    openIcon(clicked) {
      open = clicked;
      console.log(open);
    },
  }
});
