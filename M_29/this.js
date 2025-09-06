class vehicle{
    constructor(type,brand, price){
        this.type = type;
        this.brand = brand;
        this.price = price;
    }
    getThis(){
        console.log(this);
    }
    getPrice(){
        return this.price ;
    }
}

const car1 = new vehicle("Bike", "suziki", 279950 );
car1.getThis();
console.log(car1.getPrice());