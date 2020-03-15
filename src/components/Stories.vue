<template>
  <!--<transition :name="transition" mode="out-in">-->
    <section v-if="stories.length">
      <h2>{{title}}</h2>
      <div v-if="!stories.length"><h4> . . . Loading . . .</h4></div>
      <div :key="story.id" v-for="story in stories" class="headline">
        <a :href="story.url" target="_blank">
          <h5 class="title">
            {{ story.title }} 
          </h5>
          <span>{{toMilliseconds(story.time) | timeSince}} ago <br><br><br>
          Rating: <b>{{story.score}}</b></span>
        </a>
      </div>
    </section>
  <!--</transition>-->
</template>

<script>
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export default {
  props: ['stories', 'title'],
  data () {
    return { transition: 'slide-left' }
  },
  methods: {
    toMilliseconds(seconds) {
      return seconds * 1000
    }
  },
  filters: {
    timeSince(timeString) {
      return distanceInWordsToNow(timeString);
    }
  }
}
</script>


<style lang="scss" scoped>
section {
   display:flex;
   flex-direction: column;
   justify-content:space-between;
}

a {
   color:#06d;
  text-decoration: none;
  display: flex;
  height: 100%;
}

.headline {
  height: 5rem;
  min-width: 5rem;
  border: 0.5px solid #eeeeee;
  box-shadow: 0px 5px 5px 0.5px #f5f5f5;
  width: 60%;
  border-radius: 0.25rem;
  margin: auto;
  position: relative;
  padding: 10px;
  flex:1;
  background:#fdfdfd;
  
}

.headline + div {
  margin-top: 10px;
}

.headline span {
  right: 10px;
  vertical-align: middle;
  font-size: 0.8rem;
  flex: 1;
  margin: auto;
  color:#000;
}
h5{
  font-size:1.4rem;
  
}
.title {
  flex: 4;
}
/*
[v-cloak] {
  display: none;
}

[v-cloak]::before { content: "loading . . ." }

// animation
section {
  // transition: all .5s cubic-bezier(.55,0,.1,1);
  transition: all .2s ease-in;
}

.slide-left-enter, .slide-right-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-to, .slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0px);
}

*/
</style>