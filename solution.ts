type InputType = string | number | boolean;
function formatValue(input: InputType): InputType {
    if (typeof input === "string") {
        return input.toUpperCase()
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else if (typeof input === "boolean") {
        if (input === true) {
            return false;
        }
        else {
            return true;
        }
    }
    return input;
}





type LengthType = string | any[];
function getLength(input: LengthType): number {
    if (typeof input === "string") {
        return input.length;
    } else if (Array.isArray(input)) {
        return input.length;
    } else {
        throw new Error("Invalid input type");
    }
}






class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}






type BookType = {
    title: string;
    rating: number;
}
function filterByRating(books: BookType[]): BookType[] {
    return books
        .filter((book) => {
            if (book.rating < 0 || book.rating > 5) {
                throw new Error(`Invalid rating ${book.rating}. Rating must be between 0 and 5.`);
            }
            return book.rating >= 4;
        });
}






type UserType = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(users: UserType[]): UserType[] {
    return users.filter((user) => user.isActive === true)
}






interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book): string {
    const availability = book.isAvailable ? "Yes" : "No";
    const result = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
    return result;
}







type ArrayType = string | number;
function getUniqueValues(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    let result: ArrayType[] = [];
    function addIfNotExists(array: ArrayType[], value: ArrayType): void {
        if (!array.includes(value)) {
            array.push(value);
        }
    }
    for (let item of arr1) {
        addIfNotExists(result, item);
    }
    for (let item of arr2) {
        addIfNotExists(result, item);
    }
    return result;
}







type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};
function calculateTotalPrice(products: Product[]): number {
    return products
        .map((product) => {
            const totalAmount = product.price * product.quantity;
            if (product.discount !== undefined) {
                if (product.discount < 0 || product.discount > 100) {
                    throw new Error(`Invalid discount ${product.discount}. Discount must be between 0 and 100.`)
                }
                const discountAmount = (totalAmount * product.discount) / 100;
                const remainingAmount = totalAmount - discountAmount;
                return remainingAmount;
            }
            return totalAmount;
        })
        .reduce((sum, current) => sum + current, 0);
}