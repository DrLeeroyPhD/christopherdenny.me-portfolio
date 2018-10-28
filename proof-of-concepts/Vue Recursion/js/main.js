var desktop = new Vue({
  el: '#desktopContainer',
  data: {
    desktop: {
      me: {
        displayName: "Me.png",
        icon: "https://img.freepik.com/free-vector/illustration-of-data-folder-icon_53876-6329.jpg?size=338&ext=jpg",
        clickyfunc: "dude()"
      },
      about: {
        displayName: "About",
        icon: "https://img.freepik.com/free-vector/illustration-of-data-folder-icon_53876-6329.jpg?size=338&ext=jpg",
        clickyfunc: "dude()"
      },
      portfolio: {
        displayName: "Portfolio",
        icon: "https://img.freepik.com/free-vector/illustration-of-data-folder-icon_53876-6329.jpg?size=338&ext=jpg"
      }
    }
  },

  methods: {
    dude: function() {
      console.log("You have clicked a folder!");
    }
  }
})
