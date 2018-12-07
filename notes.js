methods: {
  openModal(thisWindow) {
    desktop.windows[thisWindow].isModalVisible = false;
  },
},

data: {
  open: "",
  webBrowserOpen: false,
  active: "",

  desktop: {
    Me: {
      displayName: "Me",
      imgLoc: "./assets/img/folder-icon.png",
      target: "me"
    },

    Applets: {
      displayName: "Applets",
      imgLoc: "./assets/img/folder-icon.png",
    },

    Portfolio: {
      displayName: "Portfolio",
      imgLoc: "./assets/img/folder-icon.png",
    },

    Email: {
      displayName: "Email",
      imgLoc: "./assets/img/email-icon.png",
    },

    Trash: {
      displayName: "Trash",
      imgLoc: "./assets/img/trash-icon.png",
    }
  },

  windows: {
    me: {
      content: {
        `<h1>Hello</h1>`
      },
      isModalVisible: false
    },

  }
}

<a @click="openModal(option.target)"></a>
