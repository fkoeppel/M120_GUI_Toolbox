import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-breathalyzer",
  templateUrl: "./breathalyzer.component.html",
  styleUrls: ["./breathalyzer.component.scss"]
})
export class BreathalyzerComponent implements OnInit {
  private isDrink1Visible = true;
  private isDrink2Visible = false;
  private isDrink3Visible = false;
  private isDrink4Visible = false;
  private isDrink5Visible = false;
  private isDrink6Visible = false;
  private isDrink7Visible = false;
  private isDrink8Visible = false;

  g1anzahl: number;
  g1liter: number;
  g1volume: number;
  g2anzahl: number;
  g2liter: number;
  g2volume: number;
  g3anzahl: number;
  g3liter: number;
  g3volume: number;
  g4anzahl: number;
  g4liter: number;
  g4volume: number;
  g5anzahl: number;
  g5liter: number;
  g5volume: number;
  g6anzahl: number;
  g6liter: number;
  g6volume: number;
  g7anzahl: number;
  g7liter: number;
  g7volume: number;
  g8anzahl: number;
  g8liter: number;
  g8volume: number;

  result: Number;

  selectedOption: String;

  constructor() {}
  ngOnInit() {
    console.log(this.selectedOption);

    if (this.selectedOption == undefined) {
      this.selectedOption = "1";
    }
  }

  calculate() {
    let e;
    e = document.getElementById("geschlaecht") as HTMLSelectElement;
    const geschlaecht = (e.options[e.selectedIndex] as HTMLSelectElement).value;
    const gewicht = (document.getElementById("gewicht") as HTMLInputElement)
      .value;
    e = document.getElementById("anzahlGetraenke") as HTMLSelectElement;
    const anzahlGetraenke = (e.options[e.selectedIndex] as HTMLSelectElement)
      .value;
    let wassegehalt;
    if (geschlaecht == "m") {
      wassegehalt = 0.68;
    } else {
      wassegehalt = 0.55;
    }

    let res = 0.0;

    switch (anzahlGetraenke) {
      case "1": {
        this.g1anzahl = parseInt(
          (document.getElementById("g1anzahl") as HTMLInputElement).value
        );
        this.g1liter = parseInt(
          (document.getElementById("g1liter") as HTMLInputElement).value
        );
        this.g1volume = parseInt(
          (document.getElementById("g1volume") as HTMLInputElement).value
        );

        res +=
          (this.g1liter * 100 * (this.g1volume / 100) * 0.8 * this.g1anzahl) /
          (+gewicht * wassegehalt);

        res *= 10;
        res = Math.round(res * 100) / 100;

        this.result = res;
        $("#result").css("display", "block");

        break;
      }
      case "2": {
        this.g1anzahl = parseInt(
          (document.getElementById("g1anzahl") as HTMLInputElement).value
        );
        this.g1liter = parseInt(
          (document.getElementById("g1liter") as HTMLInputElement).value
        );
        this.g1volume = parseInt(
          (document.getElementById("g1volume") as HTMLInputElement).value
        );
        this.g2anzahl = parseInt(
          (document.getElementById("g2anzahl") as HTMLInputElement).value
        );
        this.g2liter = parseInt(
          (document.getElementById("g2liter") as HTMLInputElement).value
        );
        this.g2volume = parseInt(
          (document.getElementById("g2volume") as HTMLInputElement).value
        );

        res +=
          ((this.g1liter + this.g2liter) *
            100 *
            ((this.g1volume + this.g2volume) / 100) *
            0.8 *
            (this.g1anzahl + this.g2anzahl)) /
          (+gewicht * wassegehalt);

        res *= 10;
        res = Math.round(res * 100) / 100;

        this.result = res;
        $("#result").css("display", "block");

        break;
      }
      case "3": {
        this.g1anzahl = parseInt(
          (document.getElementById("g1anzahl") as HTMLInputElement).value
        );
        this.g1liter = parseInt(
          (document.getElementById("g1liter") as HTMLInputElement).value
        );
        this.g1volume = parseInt(
          (document.getElementById("g1volume") as HTMLInputElement).value
        );
        this.g2anzahl = parseInt(
          (document.getElementById("g2anzahl") as HTMLInputElement).value
        );
        this.g2liter = parseInt(
          (document.getElementById("g2liter") as HTMLInputElement).value
        );
        this.g2volume = parseInt(
          (document.getElementById("g2volume") as HTMLInputElement).value
        );
        this.g3anzahl = parseInt(
          (document.getElementById("g3anzahl") as HTMLInputElement).value
        );
        this.g3liter = parseInt(
          (document.getElementById("g3liter") as HTMLInputElement).value
        );
        this.g3volume = parseInt(
          (document.getElementById("g3volume") as HTMLInputElement).value
        );

        res +=
          ((this.g1liter + this.g2liter + this.g3liter) *
            100 *
            ((this.g1volume + this.g2volume + this.g3volume) / 100) *
            0.8 *
            (this.g1anzahl + this.g2anzahl + this.g3anzahl)) /
          (+gewicht * wassegehalt);

        res *= 10;
        res = Math.round(res * 100) / 100;

        this.result = res;
        $("#result").css("display", "block");

        break;
      }
      case "4": {
        this.g1anzahl = parseInt(
          (document.getElementById("g1anzahl") as HTMLInputElement).value
        );
        this.g1liter = parseInt(
          (document.getElementById("g1liter") as HTMLInputElement).value
        );
        this.g1volume = parseInt(
          (document.getElementById("g1volume") as HTMLInputElement).value
        );
        this.g2anzahl = parseInt(
          (document.getElementById("g2anzahl") as HTMLInputElement).value
        );
        this.g2liter = parseInt(
          (document.getElementById("g2liter") as HTMLInputElement).value
        );
        this.g2volume = parseInt(
          (document.getElementById("g2volume") as HTMLInputElement).value
        );
        this.g3anzahl = parseInt(
          (document.getElementById("g3anzahl") as HTMLInputElement).value
        );
        this.g3liter = parseInt(
          (document.getElementById("g3liter") as HTMLInputElement).value
        );
        this.g3volume = parseInt(
          (document.getElementById("g3volume") as HTMLInputElement).value
        );
        this.g4anzahl = parseInt(
          (document.getElementById("g4anzahl") as HTMLInputElement).value
        );
        this.g4liter = parseInt(
          (document.getElementById("g4liter") as HTMLInputElement).value
        );
        this.g4volume = parseInt(
          (document.getElementById("g4volume") as HTMLInputElement).value
        );

        res +=
          ((this.g1liter + this.g2liter + this.g3liter + this.g4liter) *
            100 *
            ((this.g1volume + this.g2volume + this.g3volume + this.g4volume) /
              100) *
            0.8 *
            (this.g1anzahl + this.g2anzahl + this.g3anzahl + this.g4anzahl)) /
          (+gewicht * wassegehalt);

        res *= 10;
        res = Math.round(res * 100) / 100;

        this.result = res;
        $("#result").css("display", "block");

        break;
      }
      case "5": {
        this.g1anzahl = parseInt(
          (document.getElementById("g1anzahl") as HTMLInputElement).value
        );
        this.g1liter = parseInt(
          (document.getElementById("g1liter") as HTMLInputElement).value
        );
        this.g1volume = parseInt(
          (document.getElementById("g1volume") as HTMLInputElement).value
        );
        this.g2anzahl = parseInt(
          (document.getElementById("g2anzahl") as HTMLInputElement).value
        );
        this.g2liter = parseInt(
          (document.getElementById("g2liter") as HTMLInputElement).value
        );
        this.g2volume = parseInt(
          (document.getElementById("g2volume") as HTMLInputElement).value
        );
        this.g3anzahl = parseInt(
          (document.getElementById("g3anzahl") as HTMLInputElement).value
        );
        this.g3liter = parseInt(
          (document.getElementById("g3liter") as HTMLInputElement).value
        );
        this.g3volume = parseInt(
          (document.getElementById("g3volume") as HTMLInputElement).value
        );
        this.g4anzahl = parseInt(
          (document.getElementById("g4anzahl") as HTMLInputElement).value
        );
        this.g4liter = parseInt(
          (document.getElementById("g4liter") as HTMLInputElement).value
        );
        this.g4volume = parseInt(
          (document.getElementById("g4volume") as HTMLInputElement).value
        );
        this.g5anzahl = parseInt(
          (document.getElementById("g5anzahl") as HTMLInputElement).value
        );
        this.g5liter = parseInt(
          (document.getElementById("g5liter") as HTMLInputElement).value
        );
        this.g5volume = parseInt(
          (document.getElementById("g5volume") as HTMLInputElement).value
        );

        res +=
          ((this.g1liter +
            this.g2liter +
            this.g3liter +
            this.g4liter +
            this.g5liter) *
            100 *
            ((this.g1volume +
              this.g2volume +
              this.g3volume +
              this.g4volume +
              this.g5volume) /
              100) *
            0.8 *
            (this.g1anzahl +
              this.g2anzahl +
              this.g3anzahl +
              this.g4anzahl +
              this.g5anzahl)) /
          (+gewicht * wassegehalt);

        res *= 10;
        res = Math.round(res * 100) / 100;
        this.result = res;
        $("#result").css("display", "block");

        break;
      }
      case "6": {
        this.g1anzahl = parseInt(
          (document.getElementById("g1anzahl") as HTMLInputElement).value
        );
        this.g1liter = parseInt(
          (document.getElementById("g1liter") as HTMLInputElement).value
        );
        this.g1volume = parseInt(
          (document.getElementById("g1volume") as HTMLInputElement).value
        );
        this.g2anzahl = parseInt(
          (document.getElementById("g2anzahl") as HTMLInputElement).value
        );
        this.g2liter = parseInt(
          (document.getElementById("g2liter") as HTMLInputElement).value
        );
        this.g2volume = parseInt(
          (document.getElementById("g2volume") as HTMLInputElement).value
        );
        this.g3anzahl = parseInt(
          (document.getElementById("g3anzahl") as HTMLInputElement).value
        );
        this.g3liter = parseInt(
          (document.getElementById("g3liter") as HTMLInputElement).value
        );
        this.g3volume = parseInt(
          (document.getElementById("g3volume") as HTMLInputElement).value
        );
        this.g4anzahl = parseInt(
          (document.getElementById("g4anzahl") as HTMLInputElement).value
        );
        this.g4liter = parseInt(
          (document.getElementById("g4liter") as HTMLInputElement).value
        );
        this.g4volume = parseInt(
          (document.getElementById("g4volume") as HTMLInputElement).value
        );
        this.g5anzahl = parseInt(
          (document.getElementById("g5anzahl") as HTMLInputElement).value
        );
        this.g5liter = parseInt(
          (document.getElementById("g5liter") as HTMLInputElement).value
        );
        this.g5volume = parseInt(
          (document.getElementById("g5volume") as HTMLInputElement).value
        );
        this.g6anzahl = parseInt(
          (document.getElementById("g6anzahl") as HTMLInputElement).value
        );
        this.g6liter = parseInt(
          (document.getElementById("g6liter") as HTMLInputElement).value
        );
        this.g6volume = parseInt(
          (document.getElementById("g6volume") as HTMLInputElement).value
        );

        res +=
          ((this.g1liter +
            this.g2liter +
            this.g3liter +
            this.g4liter +
            this.g5liter +
            this.g6liter) *
            100 *
            ((this.g1volume +
              this.g2volume +
              this.g3volume +
              this.g4volume +
              this.g5volume +
              this.g6volume) /
              100) *
            0.8 *
            (this.g1anzahl +
              this.g2anzahl +
              this.g3anzahl +
              this.g4anzahl +
              this.g5anzahl +
              this.g6anzahl)) /
          (+gewicht * wassegehalt);

        res *= 10;
        res = Math.round(res * 100) / 100;

        this.result = res;
        $("#result").css("display", "block");

        break;
      }
      case "7": {
        this.g1anzahl = parseInt(
          (document.getElementById("g1anzahl") as HTMLInputElement).value
        );
        this.g1liter = parseInt(
          (document.getElementById("g1liter") as HTMLInputElement).value
        );
        this.g1volume = parseInt(
          (document.getElementById("g1volume") as HTMLInputElement).value
        );
        this.g2anzahl = parseInt(
          (document.getElementById("g2anzahl") as HTMLInputElement).value
        );
        this.g2liter = parseInt(
          (document.getElementById("g2liter") as HTMLInputElement).value
        );
        this.g2volume = parseInt(
          (document.getElementById("g2volume") as HTMLInputElement).value
        );
        this.g3anzahl = parseInt(
          (document.getElementById("g3anzahl") as HTMLInputElement).value
        );
        this.g3liter = parseInt(
          (document.getElementById("g3liter") as HTMLInputElement).value
        );
        this.g3volume = parseInt(
          (document.getElementById("g3volume") as HTMLInputElement).value
        );
        this.g4anzahl = parseInt(
          (document.getElementById("g4anzahl") as HTMLInputElement).value
        );
        this.g4liter = parseInt(
          (document.getElementById("g4liter") as HTMLInputElement).value
        );
        this.g4volume = parseInt(
          (document.getElementById("g4volume") as HTMLInputElement).value
        );
        this.g5anzahl = parseInt(
          (document.getElementById("g5anzahl") as HTMLInputElement).value
        );
        this.g5liter = parseInt(
          (document.getElementById("g5liter") as HTMLInputElement).value
        );
        this.g5volume = parseInt(
          (document.getElementById("g5volume") as HTMLInputElement).value
        );
        this.g6anzahl = parseInt(
          (document.getElementById("g6anzahl") as HTMLInputElement).value
        );
        this.g6liter = parseInt(
          (document.getElementById("g6liter") as HTMLInputElement).value
        );
        this.g6volume = parseInt(
          (document.getElementById("g6volume") as HTMLInputElement).value
        );
        this.g7anzahl = parseInt(
          (document.getElementById("g7anzahl") as HTMLInputElement).value
        );
        this.g7liter = parseInt(
          (document.getElementById("g7liter") as HTMLInputElement).value
        );
        this.g7volume = parseInt(
          (document.getElementById("g7volume") as HTMLInputElement).value
        );

        res +=
          ((this.g1liter +
            this.g2liter +
            this.g3liter +
            this.g4liter +
            this.g5liter +
            this.g6liter +
            this.g7liter) *
            100 *
            ((this.g1volume +
              this.g2volume +
              this.g3volume +
              this.g4volume +
              this.g5volume +
              this.g6volume +
              this.g7volume) /
              100) *
            0.8 *
            (this.g1anzahl +
              this.g2anzahl +
              this.g3anzahl +
              this.g4anzahl +
              this.g5anzahl +
              this.g6anzahl +
              this.g7anzahl)) /
          (+gewicht * wassegehalt);

        res *= 10;
        res = Math.round(res * 100) / 100;

        this.result = res;
        $("#result").css("display", "block");

        break;
      }
      case "8": {
        this.g1anzahl = parseInt(
          (document.getElementById("g1anzahl") as HTMLInputElement).value
        );
        this.g1liter = parseInt(
          (document.getElementById("g1liter") as HTMLInputElement).value
        );
        this.g1volume = parseInt(
          (document.getElementById("g1volume") as HTMLInputElement).value
        );
        this.g2anzahl = parseInt(
          (document.getElementById("g2anzahl") as HTMLInputElement).value
        );
        this.g2liter = parseInt(
          (document.getElementById("g2liter") as HTMLInputElement).value
        );
        this.g2volume = parseInt(
          (document.getElementById("g2volume") as HTMLInputElement).value
        );
        this.g3anzahl = parseInt(
          (document.getElementById("g3anzahl") as HTMLInputElement).value
        );
        this.g3liter = parseInt(
          (document.getElementById("g3liter") as HTMLInputElement).value
        );
        this.g3volume = parseInt(
          (document.getElementById("g3volume") as HTMLInputElement).value
        );
        this.g4anzahl = parseInt(
          (document.getElementById("g4anzahl") as HTMLInputElement).value
        );
        this.g4liter = parseInt(
          (document.getElementById("g4liter") as HTMLInputElement).value
        );
        this.g4volume = parseInt(
          (document.getElementById("g4volume") as HTMLInputElement).value
        );
        this.g5anzahl = parseInt(
          (document.getElementById("g5anzahl") as HTMLInputElement).value
        );
        this.g5liter = parseInt(
          (document.getElementById("g5liter") as HTMLInputElement).value
        );
        this.g5volume = parseInt(
          (document.getElementById("g5volume") as HTMLInputElement).value
        );
        this.g6anzahl = parseInt(
          (document.getElementById("g6anzahl") as HTMLInputElement).value
        );
        this.g6liter = parseInt(
          (document.getElementById("g6liter") as HTMLInputElement).value
        );
        this.g6volume = parseInt(
          (document.getElementById("g6volume") as HTMLInputElement).value
        );
        this.g7anzahl = parseInt(
          (document.getElementById("g7anzahl") as HTMLInputElement).value
        );
        this.g7liter = parseInt(
          (document.getElementById("g7liter") as HTMLInputElement).value
        );
        this.g7volume = parseInt(
          (document.getElementById("g7volume") as HTMLInputElement).value
        );
        this.g8anzahl = parseInt(
          (document.getElementById("g8anzahl") as HTMLInputElement).value
        );
        this.g8liter = parseInt(
          (document.getElementById("g8liter") as HTMLInputElement).value
        );
        this.g8volume = parseInt(
          (document.getElementById("g8volume") as HTMLInputElement).value
        );

        res +=
          ((this.g1liter +
            this.g2liter +
            this.g3liter +
            this.g4liter +
            this.g5liter +
            this.g6liter +
            this.g7liter +
            this.g8liter) *
            100 *
            ((this.g1volume +
              this.g2volume +
              this.g3volume +
              this.g4volume +
              this.g5volume +
              this.g6volume +
              this.g7volume +
              this.g8volume) /
              100) *
            0.8 *
            (this.g1anzahl +
              this.g2anzahl +
              this.g3anzahl +
              this.g4anzahl +
              this.g5anzahl +
              this.g6anzahl +
              this.g7anzahl +
              this.g8anzahl)) /
          (+gewicht * wassegehalt);

        res *= 10;
        res = Math.round(res * 100) / 100;
        this.result = res;
        $("#result").css("display", "block");
        break;
      }
      default: {
        break;
      }
    }
  }

  checkDrink() {
    if (this.selectedOption == "1") {
      this.isDrink1Visible = false;
      this.isDrink2Visible = false;
      this.isDrink3Visible = false;
      this.isDrink4Visible = false;
      this.isDrink5Visible = false;
      this.isDrink6Visible = false;
      this.isDrink7Visible = false;
      this.isDrink8Visible = false;
      this.isDrink1Visible = true;
    }
    if (this.selectedOption == "2") {
      this.isDrink1Visible = false;
      this.isDrink2Visible = false;
      this.isDrink3Visible = false;
      this.isDrink4Visible = false;
      this.isDrink5Visible = false;
      this.isDrink6Visible = false;
      this.isDrink7Visible = false;
      this.isDrink8Visible = false;
      this.isDrink1Visible = true;
      this.isDrink2Visible = true;
    }
    if (this.selectedOption == "3") {
      this.isDrink1Visible = false;
      this.isDrink2Visible = false;
      this.isDrink3Visible = false;
      this.isDrink4Visible = false;
      this.isDrink5Visible = false;
      this.isDrink6Visible = false;
      this.isDrink7Visible = false;
      this.isDrink8Visible = false;
      this.isDrink1Visible = true;
      this.isDrink2Visible = true;
      this.isDrink3Visible = true;
    }
    if (this.selectedOption == "4") {
      this.isDrink1Visible = false;
      this.isDrink2Visible = false;
      this.isDrink3Visible = false;
      this.isDrink4Visible = false;
      this.isDrink5Visible = false;
      this.isDrink6Visible = false;
      this.isDrink7Visible = false;
      this.isDrink8Visible = false;
      this.isDrink1Visible = true;
      this.isDrink2Visible = true;
      this.isDrink3Visible = true;
      this.isDrink4Visible = true;
    }
    if (this.selectedOption == "5") {
      this.isDrink1Visible = false;
      this.isDrink2Visible = false;
      this.isDrink3Visible = false;
      this.isDrink4Visible = false;
      this.isDrink5Visible = false;
      this.isDrink6Visible = false;
      this.isDrink7Visible = false;
      this.isDrink8Visible = false;
      this.isDrink1Visible = true;
      this.isDrink2Visible = true;
      this.isDrink3Visible = true;
      this.isDrink4Visible = true;
      this.isDrink5Visible = true;
    }
    if (this.selectedOption == "6") {
      this.isDrink1Visible = false;
      this.isDrink2Visible = false;
      this.isDrink3Visible = false;
      this.isDrink4Visible = false;
      this.isDrink5Visible = false;
      this.isDrink6Visible = false;
      this.isDrink7Visible = false;
      this.isDrink8Visible = false;
      this.isDrink1Visible = true;
      this.isDrink2Visible = true;
      this.isDrink3Visible = true;
      this.isDrink4Visible = true;
      this.isDrink5Visible = true;
      this.isDrink6Visible = true;
    }
    if (this.selectedOption == "7") {
      this.isDrink1Visible = false;
      this.isDrink2Visible = false;
      this.isDrink3Visible = false;
      this.isDrink4Visible = false;
      this.isDrink5Visible = false;
      this.isDrink6Visible = false;
      this.isDrink7Visible = false;
      this.isDrink8Visible = false;
      this.isDrink1Visible = true;
      this.isDrink2Visible = true;
      this.isDrink3Visible = true;
      this.isDrink4Visible = true;
      this.isDrink5Visible = true;
      this.isDrink6Visible = true;
      this.isDrink7Visible = true;
    }
    if (this.selectedOption == "8") {
      this.isDrink1Visible = false;
      this.isDrink2Visible = false;
      this.isDrink3Visible = false;
      this.isDrink4Visible = false;
      this.isDrink5Visible = false;
      this.isDrink6Visible = false;
      this.isDrink7Visible = false;
      this.isDrink8Visible = false;
      this.isDrink1Visible = true;
      this.isDrink2Visible = true;
      this.isDrink3Visible = true;
      this.isDrink4Visible = true;
      this.isDrink5Visible = true;
      this.isDrink6Visible = true;
      this.isDrink7Visible = true;
      this.isDrink8Visible = true;
    }
  }
}
