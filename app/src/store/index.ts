import { createStore, ActionContext } from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

interface State {
  pluginPath: string;
  results: Record<string, number>;
}

export default createStore({
  state: {
    pluginPath: '',
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
    setPluginPath(state: State, path: string): void {
      state.pluginPath = path;
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
    setPluginPath(store: ActionContext<State, State>, path: string): void {
      store.commit('setPluginPath', path);
    },
  },
  getters: {
    results(state: State): Record<string, number> {
      return state.results;
    },
    pluginPath(state: State): string {
      return state.pluginPath;
    },
  },
  plugins: [vuexLocal.plugin],
});
