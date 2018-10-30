/***************************************
              COMPONENTS
***************************************/
Vue.component('modal-window', {
  methods: {
    close() {
      this.$emit('close');
    },
  },
  data() {
    return {
      activeTitle: "Folder"
    }
  },
  template: `
    <transition name="modal-fade">
      <div class="modal draggable" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header handle" id="modalTitle">
          <slot name="header">
            <h3>{{ activeTitle }}</h3>

            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
              X
            </button>
          </slot>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            Default Body Content
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            Default Footer Content
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
    isModalVisible: false,
    desktop: {
      me: {
        displayName: "Me",
        imgLoc: "./assets/img/file-icon.png",
      },
      about: {
        displayName: "About",
        imgLoc: "./assets/img/file-icon.png"
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
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
});
