import { createStore, ActionContext } from 'vuex';

interface State {
  ratings: number[];
}

export default createStore({
  state: {
    ratings: [],
  },
  mutations: {
    pushRating(state: State, rating: number): void {
      state.ratings.push(rating);
    },
    popRating(state: State): void {
      state.ratings.pop();
    },
  },
  actions: {
    pushRating(store: ActionContext<State, State>, value: number): void {
      store.commit('pushRating', value);
    },
    popRating(store: ActionContext<State, State>): void {
      store.commit('popRating');
    },
  },
  getters: {
    ratings(state: State): number[] {
      return state.ratings;
    },
  },
});
