﻿import { jsPDF } from "jspdf";
var font =
var callAddFont = function () {
  this.addFileToVFS("calibril-normal.ttf", font);
  this.addFont("calibril-normal.ttf", "calibril", "normal");
};
jsPDF.API.events.push(["addFonts", callAddFont]);