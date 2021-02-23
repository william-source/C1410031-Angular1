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
  arr = Array[5][5];
  brs: number;
  klm: number;
  onStart() {
    for (this.brs = 0; this.brs < 5; this.brs++) {
      for (this.klm = 0; this.klm < 5; this.klm++) {
        this.arr[this.brs][this.klm] = "*";
      }
    }
  }

  onClick() {}
}
