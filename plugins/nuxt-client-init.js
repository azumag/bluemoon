export default async (context) => {
  await context.store.dispatch('auth/nuxtClientInit', context)
}
