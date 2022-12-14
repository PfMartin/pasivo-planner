import { createStore, ActionContext } from 'vuex';

interface State {
  lifeSituation: number;
}

export default createStore({
  state: {
    lifeSituation: 0,
  },
  mutations: {
    setLifeSituation(state: State, value: number): void {
      state.lifeSituation = value;
    },
  },
  actions: {
    setLifeSituation(store: ActionContext<State, State>, value: number): void {
      store.commit('setLifeSituation', value);
    },
  },
  getters: {
    lifeSituation(state: State): number {
      return state.lifeSituation;
    },
  },
});
