import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // Add imports for the components you're using
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  // Make sure the component is standalone
  standalone: true,
})
export class AppComponent {
  title = "resume-website"
}

