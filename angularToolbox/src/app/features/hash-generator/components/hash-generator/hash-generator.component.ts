import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormsModule,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";

// IMPORTS FOR HASHING LIBRARIES
import * as sha512 from "js-sha512";
import { HashGenerator } from "../../models/hash-generator";
import { sha256 } from "js-sha256";

@Component({
  selector: "app-hash-generator",
  templateUrl: "./hash-generator.component.html",
  styleUrls: ["./hash-generator.component.scss"]
})
export class HashGeneratorComponent implements OnInit {
  hashGenerator: HashGenerator;

  hashInputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.hashGenerator = new HashGenerator();
  }

  ngOnInit() {
    this.hashInputForm = this.formBuilder.group({
      password: [null, Validators.required]
    });
  }

  createSHA_512() {
    this.hashGenerator.hash512 = sha512.sha512(this.hashGenerator.password512);
    document.getElementById("hashOutput512").style.display = "block";
  }

  createSHA_256() {
    this.hashGenerator.hash256 = sha256(this.hashGenerator.password256);
    /*

    var shajs = require("sha.js");
    this.hashGenerator.hash256 = new shajs.sha256()
      .update(this.hashGenerator.password256)
      .digest("hex");
      */
    document.getElementById("hashOutput256").style.display = "block";
  }
}
