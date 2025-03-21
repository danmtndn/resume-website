import { mergeApplicationConfig, type ApplicationConfig } from "@angular/core"
import { provideServerRendering } from "@angular/platform-server"
import { appConfig } from "./app.config"
import { serverRoutes } from "./app.routes.server"
import { provideRouter } from "@angular/router"

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideRouter(serverRoutes)],
}

export const config = mergeApplicationConfig(appConfig, serverConfig)

