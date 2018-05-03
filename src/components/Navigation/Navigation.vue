<template>
  <nav>
    <ul class="navigation" role="navigation">
      <router-link
        :to="urls[index]"
        :key="link"
        v-for="(link, index) in links"
        tag="li"
        active-class="active"
        exact
      >
        <a>{{ link | capitalize }}</a>
      </router-link>
    </ul>
  </nav>
</template>


<script>
export default {
  name: 'navigation',
  data () {
    return {
      links: ['top', 'new', 'show', 'ask', 'jobs']
    }
  },

  filters: {
    capitalize(word) {
      return `${word[0].toUpperCase()}${word.slice(1)}`
    }

  },

  computed: {
    urls() {
      return this.links.map(link => link.split(' ').join('-'))
    }
  },

  methods: {
  }
}
</script>


<style lang="scss" scoped>
nav {
  background: black;
  display: flex;
  position: fixed;
  height: 4rem;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navigation {
  display: flex;
  align-content: center;
  align-items: center;
  height: 3rem;
  margin: 0px 20px;

  ul {
    height: 100%;
  }

  a {
    text-decoration: none;
    padding: 20px 5px;

    &:hover {
      color: #ffffff;
      background-color: green;
    }
  }
}
</style>

