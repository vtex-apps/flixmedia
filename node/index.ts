import { Service, Context, IOClients } from '@vtex/api'

declare var process: {
  env: {
    VTEX_APP_ID: string
  }
}

export default new Service({
  graphql: {
    resolvers: {
      Query: {
        publicAppSettings: async function publicAppSettings(
          _: any,
          __: any,
          ctx: Context<IOClients>
        ) {
          const {
            clients: { apps },
          } = ctx
          const settings = await apps.getAppSettings(process.env.VTEX_APP_ID)
          return settings
        },
      },
    },
  },
})