/***************************************
              COMPONENTS
***************************************/
Vue.component('modal-window', {

  /***** METHODS *****/
  methods: {
    closeModal(placeholder) {
      desktop.desktop[placeholder].isModalVisible = false;
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
      levelOfFocus: 201,
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
  props: ['content', 'placeholder'],

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
        @click="levelOfFocus = 200;"
        v-clickoutside="blurFocus"
      >
        <header class="modal-header handle">
          <h3>
            <slot name="header">
              File Explorer
            </slot>
          </h3>

          <button type="button" class="btn-close" @click="closeModal(placeholder)" aria-label="Close modal">
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
displayName
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
    open: "",
    active: "",
    desktop: {
      Me: {
        displayName: "Me",
        imgLoc: "./assets/img/folder-icon.png",
        windowType: "word",
        isModalVisible: false,
        clicky: "activateWord()",
        content: `
        <textarea name="editor" id="editor">
          <strong><span style="font-family: cursive">A Little About Myself...</span></strong></br>
          <strong>Christopher Denny\'s</strong> the name, awesome web development's the game!<br>
          I started my journey into web development in Middle School, fiddling with HTML and PHPBB. Using that knowledge and much playing with the technology of the time, I ran a forum with over 80 members at the age of 12.<br>
          That was a big deal to me!<br>
          Fast Forward to awkward High School Christopher with the ever lingering question of "What are you going to do with your life," I began to take a deeper look at Web Development. The Web had grown so much in that time with so many new languages, HTML had grown up, and there was a new world of possibilities. I started over from scratch, wanting to learn all that I could about HTML and CSS and becoming acclimated with all the new features HTML5 and CSS3 provided.<br>
          Fascinated by the power now available to me, as Matrix says "What do all people with power want? More power." I had to know more. Javascript, VueJS, React, Sass, jQuery, AngularJS, NodeJS, Drupal, Wordpress, Git, even Jekyll (yeah, I went there)...<br>
          No language, library, preprocessor, or framework was safe, I desired to learn it all.


        </textarea>
        `
      },
      Applets: {
        displayName: "Applets",
        imgLoc: "./assets/img/folder-icon.png",
        windowType: "fileExplorer",
        isModalVisible: false,
        content: `
          <h3>Word</h3>
        `
      },
      Portfolio: {
        displayName: "Portfolio",
        imgLoc: "./assets/img/folder-icon.png",
        windowType: "fileExplorer",
        isModalVisible: false,
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
      Email: {
        displayName: "Email",
        imgLoc: "./assets/img/email-icon.png",
        windowType: "email",
        isModalVisible: false,
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
      Trash: {
        displayName: "Trash",
        imgLoc: "./assets/img/trash-icon.png",
        windowType: "fileExplorer",
        isModalVisible: false,
      }
    },
  },

  /***** METHODS *****/
  methods: {
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
  },
});
