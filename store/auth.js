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
  },
  twitterLogin({ commit }) {
    const provider = new this.$firebase.auth.TwitterAuthProvider()
    this.$auth.signInWithRedirect(provider)
  },
  googleLogin({ commit }) {
    const provider = new this.$firebase.auth.GoogleAuthProvider()
    this.$auth.signInWithRedirect(provider)
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = {
      displayName: user.displayName
    }
  }
}
