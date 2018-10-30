Vue.component('modal-window', {
  methods: {
    close() {
      this.$emit('close');
    },
  },
  template: `
    <transition name="modal-fade">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            This is the default tile!

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            I'm the default body!
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!
          </slot>
        </footer>
      </div>
    </transition>
  `
})



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
})
