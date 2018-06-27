function Phone(brand, price, color) {
	this.brand = brand; //by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color +
		" and the price is " + this.price + ".");
}
Phone.prototype.applyDiscount = function(discount) {
	this.price = this.price - discount;
}
var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung", 2000, "black");
var onePlusOne = new Phone("OnePlusOne", 1800, "gold")
iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
onePlusOne.applyDiscount(100);
onePlusOne.printInfo();