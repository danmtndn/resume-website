import type { Routes } from "@angular/router"
import { ResumeComponent } from "./resume/resume.component"
import { ProjectsComponent } from "./projects/projects.component"

export const routes: Routes = [
  { path: "", component: ResumeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "**", redirectTo: "" },
]

