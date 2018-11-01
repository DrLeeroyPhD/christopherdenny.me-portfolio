/***************************************
              COMPONENTS
***************************************/
Vue.component('modal-window', {

  /***** METHODS *****/
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
    focusLevel() {
      console.log(this.levelOfFocus);
    },
    blurFocus() {
      this.levelOfFocus = 2;
    },
  },

  /***** DATA *****/
  data() {
    return {
      activeTitle: "Folder",
      isModalVisible: true,
      levelOfFocus: 2,
    }
  },

  /***** DIRECTIVES *****/
  directives: {
    /*** Capture when user clicks away from an element (change z-index of windows) ***/
    clickoutside: {
      bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          // Check that click was outside the el and its children
          if (!(el == event.target || el.contains(event.target))) {
            // and if so, call method provided in attribute value
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      },
    },
  },

  /***** PROPS *****/
  props: ['content'],

  /***** TEMPLATE *****/
  template: `
    <transition name="modal-fade">
      <div
        class="modal draggable"
        role="dialog"
        aria-labelledby="modalTitle"
        v-show="isModalVisible"
        aria-describedby="modalDescription"
        :style="{zIndex: levelOfFocus}"
        @click="levelOfFocus = 19;"
        v-clickoutside="blurFocus"
      >
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
    makeDraggable(){
      setTimeout(function () {
        var draggableElems = document.querySelectorAll('.draggable');
        // array of Draggabillies
        var draggies = [];
        // init Draggabillies
        for ( var i=0; i < draggableElems.length; i++ ) {
          var draggableElem = draggableElems[i];
          var draggie = new Draggabilly( draggableElem, {
            handle: '.handle'
          });
          draggies.push( draggie );
        };
    }, 200);


    }
  },
});

/** **/
Vue.directive('click-outside', {
  bind () {
      this.event = event => this.vm.$emit(this.expression, event)
      this.el.addEventListener('click', this.stopProp)
      document.body.addEventListener('click', this.event)
  },
  unbind() {
    this.el.removeEventListener('click', this.stopProp)
    document.body.removeEventListener('click', this.event)
  },

  stopProp(event) { event.stopPropagation() }
})
