<template>
    <stories :stories="newStories" title="New Stories"/>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Stories from '../Stories';

export default {
  components: { Stories },
  mounted () {
    this.fetchStories({ type: 'new', page: 1 });
  },
  computed: {
    ...mapGetters({ newStories: 'getNewStories' })
  },
  methods: {
    ...mapActions(['fetchStories']),
  },
}

</script>

