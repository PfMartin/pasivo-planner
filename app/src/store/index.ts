import { createStore, ActionContext } from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

interface State {
  results: Record<string, number>;
}

export default createStore({
  state: {
    results: {},
  },
  mutations: {
    pushRating(state: State, rating: Record<string, number>): void {
      state.results = {
        ...state.results,
        ...rating,
      };
    },
    popRating(state: State, property: string): void {
      delete state.results[property];
    },
  },
  actions: {
    pushRating(
      store: ActionContext<State, State>,
      rating: Record<string, number>
    ): void {
      store.commit('pushRating', rating);
    },
    popRating(store: ActionContext<State, State>, property: string): void {
      store.commit('popRating', property);
    },
  },
  getters: {
    results(state: State): Record<string, number> {
      return state.results;
    },
  },
  plugins: [vuexLocal.plugin],
});
