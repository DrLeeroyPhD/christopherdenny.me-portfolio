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
      this.levelOfFocus -= 1;
      if(this.levelOfFocus < 2) {
        this.levelOfFocus = 2;
      }
    },
  },

  /***** DATA *****/
  data() {
    return {
      activeTitle: "Folder",
      isModalVisible: true,
      levelOfFocus: 20,
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
        <header class="modal-header handle">
          <h3>
            <slot name="header">
              File Explorer
            </slot>
          </h3>

          <button type="button" class="btn-close" @click="closeModal()" aria-label="Close modal">
            X
          </button>

        </header>

        <section class="modal-body" v-html="content">
          <slot name="body">

          </slot>
        </section>
      </div>
    </transition>
  `
});

/***************************************
              WEB BROWSER
***************************************/

Vue.component('web-browser', {

  /***** DATA *****/
  data() {
    return {
      webBrowserActive: "https://healthyitservices.org",
    }
  },

  /***** METHODS *****/
  methods: {
    change(){
        webBrowserActive = "http://www.christopherdenny.me";
        document.getElementById("web-browser-iframe").src = webBrowserActive;
    }
  },

  /***** TEMPLATE *****/
  template: `
    <modal-window id="web-browser">
      <template slot="header">
        Web Browser
      </template>

      <template slot="body">
        <iframe :src="webBrowserActive" class="web-browser" id="web-browser-iframe"></iframe>
        <a href="#" @click="change()">Google</a>
      </template>
    </modal-window>
  `
});

/***************************************
                  VUE
***************************************/
var desktop = new Vue({
  el: '#desktopContainer',

  /***** DATA *****/
  data: {
    windows: 0,
    open: "",
    active: "",
    desktop: {
      me: {
        displayName: "Me",
        imgLoc: "./assets/img/folder-icon.png",
        useWindow: "word",
        content: "<p>Hello World, this is my about me section</p>"
      },
      apps: {
        displayName: "Applets",
        imgLoc: "./assets/img/folder-icon.png",
        useWindow: "fileExplorer",
        content: `
          <h3>Word</h3>
        `
      },
      portfolio: {
        displayName: "Portfolio",
        imgLoc: "./assets/img/folder-icon.png",
        useWindow: "fileExplorer",
        content: `
          <div class="icon-container">
            <div class="icon">
              <a href="#" @click="test(OoC)">
                <img src="./assets/img/internet-icon.png" alt="">
                <p class="icon-in-window">Origami of Code</p>
              </a>
            </div>

            <div class="icon">
              <a href="#" @click="test(HITS)">
                <img src="./assets/img/internet-icon.png" alt="">
                <p class="icon-in-window">Healthy IT Services</p>
              </a>
            </div>

            <div class="icon">
              <a href="#" @click="test(meh)">
                <img src="./assets/img/internet-icon.png" alt="">
                <p class="icon-in-window">Origami of Code</p>
              </a>
            </div>
          </div>
        `
      },
      contact: {
        displayName: "Email",
        imgLoc: "./assets/img/email-icon.png",
        useWindow: "email",
        content: `
          <div class="email-window">
            <form action="action_page.php">

              <label for="sender-email">Your Email Address</label></br>
              <input type="text" id="sender-email" name="senderEmail" placeholder="Your Email.."></br></br>

              <label for="subject">Subject</label></br>
              <textarea id="subject" name="subject" placeholder="Your Email Contents Here.." style="height:200px"></textarea></br>

              <input type="submit" value="Submit">

            </form>
          </div>
        `
      },
      trash: {
        displayName: "Trash",
        imgLoc: "./assets/img/trash-icon.png",
        useWindow: "trash",
      }
    },
  },

  /***** METHODS *****/
  methods: {
    addWindow() {
      this.windows += 1;
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
  },
  setActive(clicked) {
    active = clicked;
  },
  test(selected) {
    console.log("Hello! You've clicked " + selected);
  }

  },
});
