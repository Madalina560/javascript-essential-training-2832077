/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";

class Handbag extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    brand
  ) {
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    this.brand = brand;
  }
  toggleLid(lidStatus) {
    super.toggleLid(lidStatus);
    if (lidStatus) {
      console.log("Open! Make sure to close when finished!");
    } else {
      console.log("Closed!");
    }
  }
}

const handbag = new Handbag("Handbag", 25, "black", 1, 0, 0, false, "Gucci");
console.log(handbag);

export default Handbag;
