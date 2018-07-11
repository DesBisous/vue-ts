import { Commit } from 'vuex';

interface State {
  collapse: boolean;
}

const state: State = {
  collapse: true,
};

// 计算属性
const getters = {
  collapse: (state: State) => state.collapse,
};

// 提交mutation
const actions = {
  modifyCollapse(context: { commit: Commit, state: State }) {
    context.commit('modifyCollapse');
  },
};

// 更改状态
const mutations = {
  modifyCollapse(state: State) {
    state.collapse = !state.collapse;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
