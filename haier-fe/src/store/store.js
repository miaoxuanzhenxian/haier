import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import branchType from './branchType'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    branchType
  }
})
