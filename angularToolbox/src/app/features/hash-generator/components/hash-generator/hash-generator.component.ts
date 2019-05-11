import { Component, OnInit } from "@angular/core";

// IMPORTS FOR HASHING LIBRARIES
import * as sha512 from "js-sha512";
import { HashGenerator } from "../../models/hash-generator";
//import sha256 from 'crypto-js/sha256';
//import hmacSHA512 from 'crypto-js/hmac-sha512';

@Component({
  selector: "app-hash-generator",
  templateUrl: "./hash-generator.component.html",
  styleUrls: ["./hash-generator.component.scss"]
})
export class HashGeneratorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  createHash() {
    console.log("createHash working");

    var hashModel = new HashGenerator();

    //var hash = sha512.sha512(password);

    //hashModel.hash = hash;
  }
}
