<template>
    <stories :stories="showStories" title=""/>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Stories from '../Stories';

export default {
  components: { Stories },
  mounted () {
    this.fetchStories({ type: 'show', page: 1 });
  },
  computed: {
    ...mapGetters({ showStories: 'getShowStories' })
  },
  methods: {
    ...mapActions(['fetchStories']),
  },
}

</script>

