export const state = () => {
  return {
    snackbarText: '',
  }
}

export const mutations = {
  setSnackbar(state, text) {
    state.snackbarText = text
  },
}
