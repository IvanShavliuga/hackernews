<template>
    <stories :stories="topStories" title="Top News" />
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Stories from '../Stories';

export default {
  components: { Stories },
  data() {
    return { stories: [] }
  },
  mounted () {
    this.fetchStories({ type: 'top', page: 1 });
    // this.setTopStoriesPage(1);
  },
  computed: {
    ...mapGetters({ topStories: 'getTopStories' })
  },
  methods: {
    ...mapActions(['fetchStories']),
  },
}

</script>

