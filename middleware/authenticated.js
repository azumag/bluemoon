export default ({ store, redirect }) => {
  if (!store.state.auth.user.uid) {
    return redirect('/login')
  }
}
