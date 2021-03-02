import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  eror = "";
  player = 1;
  baris = 0;
  kolom = 0;
  i: number;
  j: number;
  k: number;
  l: number;
  counth1 = 0;
  countv1 = 0;
  counth2 = 0;
  countv2 = 0;
  win = false;
  winner = "";
  arr = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];
  onClick() {
    console.log(this.arr);
    this.eror = "";
    if (this.baris >= 0 && this.baris <= 5) {
      if (this.kolom >= 0 && this.kolom <= 5) {
        if (this.arr[this.baris][this.kolom] != "*") {
          this.eror = "sudah terisi, harap input ulang!";
        } else {
          if (this.player == 1) {
            this.arr[this.baris][this.kolom] = "o";
          } else {
            this.arr[this.baris][this.kolom] = "x";
          }
          if (this.player == 1) {
            this.player = 2;
          } else {
            this.player = 1;
          }
          this.cekMenangH();
          // this.cekMenangV();
          this.Clear();
        }
      } else {
        this.eror = "input salah";
      }
    } else {
      this.eror = "input salah";
    }
  }
  Clear() {
    this.baris = 0;
    this.kolom = 0;
    this.eror = "";
  }
  Reset() {
    this.Clear();
    this.player = 1;
    this.win = false;
    this.winner = "";
    this.arr = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
    this.nol();
  }

  nol() {
    this.counth1 = 0;
    this.counth2 = 0;
    this.countv1 = 0;
    this.countv2 = 0;
  }

  cekMenangH() {
    this.nol();
    for (this.i = 0; this.i <= 5; this.i++) {
      for (this.j = 0; this.j <= 5; this.j++) {
        //horizontal
        if (this.arr[this.i][this.j] == "o") {
          this.counth1++;
        } else if (this.arr[this.i][this.j] == "x") {
          this.counth2++;
        }
      }
      if (this.counth1 == 5) {
        this.win = true;
        this.winner = "PLAYER 1";
      } else if (this.counth2 == 5) {
        this.win = true;
        this.winner = "PLAYER 2";
      } else {
        this.counth1 = 0;
        this.counth2 = 0;
      }
    }
  }
  // cekMenangV() {
  //   this.nol();
  //   for (this.k = 0; this.i <= 1; this.k++) {
  //     for (this.l = 0; this.j <= 1; this.l++) {
  //       //horizontal
  //       if (this.arr[this.l][this.k] == "o") {
  //         this.countv1++;
  //       } else if (this.arr[this.l][this.k] == "x") {
  //         this.countv2++;
  //       }
  //     }
  //     if (this.countv1 == 1) {
  //       this.win = true;
  //       this.winner = "PLAYER1";
  //     }
  //   }
  // }
}
