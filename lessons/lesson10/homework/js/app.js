// task1

class Product {
  static prodcutCount;
  static price = 0;
  constructor(id, name, price) {
    Product.prodcutCount++;
    Product.price += price;
  }

  totalPrice() {
    console.log(Product.price);
  }
}

class CareProduct extends Product {
  warrantyPeriod;
  constructor(prodcutCount, price, day) {
    super(prodcutCount, price);
    this.price = price;
    this.prodcutCount = prodcutCount;
    this.warrantyPeriod = day;
  }

  totalPrice() {
    switch (this.warrantyPeriod) {
      case 1:
        this.price = this.price / 2;
        break;
      case 2:
        this.price = this.price * 0.6;
        break;
      case 3:
        this.price = this.price * 0.7;
        break;
      case 4:
        this.price = this.price * 0.8;
        break;
      case 5:
        this.price = this.price * 0.9;
        break;
      default:
        console.log("Kafolat muddati tugagan");
    }
  }
}

let product = new Product(1, "Olma", 1200);
let product2 = new Product(1, "Olma", 2100);
let care = new CareProduct(2);

product2.totalPrice();

care.totalPrice();

// task2

/*
2. name va departments (array) xususiyatlariga ega boвЂ™lgan 
Universitet nomli class yarating. Ushbu classga yangi 
bo'lim(department) qo'shish, bo'limni olib tashlash va 
barcha bo'limlarni ko'rsatish metodlarini yozing. 
Universitet classidan object yarating, 5ta yangi bo'lim 
qo'shing va 2 ta boвЂ™limni olib tashlang.
Qolgan boвЂ™limlar roвЂ™yxatini chiqaring.
*/

class Universitet {
  constructor(nomi) {
    this.nomi = nomi;
    this.departments = [];
  }

  add(department) {
    this.departments.push(department);
  }

  remove(department) {
    this.departments = this.departments.filter((dep) => dep !== department);
  }

  show() {
    console.log("Bo'limlar:", this.departments.join(", "));
  }
}

const myUniversity = new Universitet("Oliy Ta'lim Universiteti");

myUniversity.add("Informatika");
myUniversity.add("Matematika");
myUniversity.add("Kimyo");
myUniversity.add("Biologiya");

console.log("O'chirishdan oldin:");
myUniversity.show();

myUniversity.remove("Kimyo");
myUniversity.remove("Biologiya");

console.log("O'chirishdan keyin:");
myUniversity.show();
