function Phone(brand, price, color) {
  this.brand = brand; //by using this, the "brand" property of the object we create will assume the value of the brand argument
  this.price = price;
  this.color = color;
}
Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color +
    " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungGalaxyS6 = new Phone("Samsung", 2000, "black");
var OnePlusOne = new Phone("OnePlusOne", 1800, "gold")
iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();