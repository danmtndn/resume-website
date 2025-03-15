import type { Routes } from "@angular/router"
import { ResumeComponent } from "./resume/resume.component"
import { ProjectsComponent } from "./projects/projects.component"

// Server routes should match client routes
export const serverRoutes: Routes = [
  { path: "", component: ResumeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "**", redirectTo: "" },
]

