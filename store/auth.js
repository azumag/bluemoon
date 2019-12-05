export const state = () => {
  return {
    user: {}
  }
}

export const actions = {
  async nuxtClientInit({ commit }) {
    const user = await new Promise((resolve, reject) => {
      this.$auth.onAuthStateChanged((user) => {
        resolve(user || false)
      })
    })
    commit('setUser', user)
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = {
      displayName: user.displayName
    }
  }
}
