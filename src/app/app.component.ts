import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  player = 1;
  baris = 0;
  kolom = 0;
  arr : number[][]
  onClick() {}
  Clear() {
    this.baris = 0;
    this.kolom = 0;
  }
}
