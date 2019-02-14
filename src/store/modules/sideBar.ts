import { Commit } from 'vuex';

export interface State {
  collapse: boolean;
}

const state: State = {
  collapse: false,
};

// 计算属性
const getters = {
  collapse: (state: State) => state.collapse,
};

// actions
const actions = {
  modifyCollapse(context: { commit: Commit, state: State }) {
    context.commit('modifyCollapse');
  },
  setCollapse(context: { commit: Commit, state: State }, val: boolean) {
    context.commit('setCollapse', val);
  },
};

// 更改状态
const mutations = {
  modifyCollapse(state: State) {
    state.collapse = !state.collapse;
  },
  setCollapse(state: State, val: boolean) {
    state.collapse = val;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
