import { Commit } from 'vuex';

interface State {
  user: any;
}

const state: State = {
  user: {},
};

// 计算属性
const getters = {
  user: (state: State) => state.user,
};

// 提交mutation
const actions = {
  setUser(context: { commit: Commit, state: State }, user: any) {
    context.commit('setUser', user);
  },
  removeUser(context: { commit: Commit, state: State }) {
    context.commit('removeUser');
  },
};

// 更改状态
const mutations = {
  setUser(state: State, user: any) {
    state.user = user;
  },
  removeUser(state: State) {
    state.user = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
