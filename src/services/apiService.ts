import { Product } from "../models/Product.js"
import { NetworkError, DataError } from "../utils/errorHandler.js";

async function processData() {
    try {
        const response = await fetch('https://dummyjson.com/products/1');

        if (!response.ok) {
            if (Math.random() < 5) {
                throw new DataError("Data Error");
            }
            else {
            throw new NetworkError("Network Error");
            }
        }

        const myProduct = await response.json();
    }
    catch (error) {
        console.log("Fetch error: ", error);
    }
}