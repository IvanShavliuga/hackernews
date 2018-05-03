import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/app'
import 'firebase/database'
import hackernews from 'firebase-hackernews';


Vue.use(Vuex);

const state = {
  db: hackernews.init(firebase, { watch: true }),
  top: {
    stories: [],
    page: 1,
  },
  new: {
    stories: [],
    page: 1,
  },
  show: {
    stories: [],
    page: 1,
  }
}

const getters = {
  'getTopStories': state => state.top.stories,
  'getNewStories': state => state.new.stories,
  'getShowStories': state => state.show.stories,
}

const types = {
  top: 'GET_TOP_STORIES',
  new: 'GET_NEW_STORIES',
  show: 'GET_SHOW_STORIES',
}

const mutations = {
  [types.top]: function (state, payload) {
    state.top.stories = payload;
  },
  [types.new]: function (state, payload) {
    state.new.stories = payload;
  },
  [types.show]: function (state, payload) {
    state.show.stories = payload;
  },
  // GET_NEW_STORIES: function (state, payload) {
  //   state.new.stories = payload;
  // },
}


const actions = {
  fetchStories(context, config) {
    const { type, page } = config;
    return context.state.db.stories(type, {
      page: context.state[type].page || 1,
      count: 30,
      force: true,
      watch: true,
    }).then((stories) => {
      context.commit(types[type], stories);
      // context.commit(types[type], stories)
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {}
})