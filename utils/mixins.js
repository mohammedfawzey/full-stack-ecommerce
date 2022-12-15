import Vue from "vue";

const myMixin = {
  methods: {
    MX_redirectTo(path) {
      if (document.body.clientHeight > window.innerHeight) {
        // this.$router.push({ path }).then(() => this.$vuetify.goTo(0));
        new Promise((resolve) => {
          this.$router.push({ path });
          resolve("");
        }).then(() => {
          this.$vuetify.goTo(200);
        });
      } else {
        this.$router.push({ path });
      }
    },
  },
};

// we make sure first if mixinName already exist
if (!Vue.__myMixin__) {
  Vue.mixin(myMixin);
}
