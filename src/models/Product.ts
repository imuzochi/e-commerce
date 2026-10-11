interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Reviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}



class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Reviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    thumbnail: string;
    images: string[];

    constructor(
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        tags: string[],
        brand: string,
        sku: string,
        weight: number,
        dimensions: Dimensions,
        warrantyInformation: string,
        shippingInformation: string,
        availabilityStatus: string,
        reviews: Reviews[],
        returnPolicy: string,
        minimumOrderQuantity: number,
        meta: Meta,
        thumbnail: string,
        images: string[]
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.tags = tags;
        this.brand = brand;
        this.sku = sku;
        this.weight = weight;
        this.dimensions = dimensions;
        this.warrantyInformation = warrantyInformation;
        this.shippingInformation = shippingInformation;
        this.availabilityStatus = availabilityStatus;
        this.reviews = reviews;
        this.returnPolicy = returnPolicy;
        this.minimumOrderQuantity = minimumOrderQuantity;
        this.meta = meta;
        this.thumbnail = thumbnail;
        this.images = images;
    };

    displayDetails() {
       console.log(`${this.title} is ${this.description} and costs ${this.price} with a discount of ${this.discountPercentage}%. It also has a rating of ${this.rating} and there are ${this.stock} left in stock.`);
    };

    getPriceWithDiscount() {
        return (this.price * (1 - (this.discountPercentage / 100)));
    }

}