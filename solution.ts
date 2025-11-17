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
    return books.filter((book) => book.rating >= 4)
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

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
    return products
        .map((product) => {
            const baseTotal = product.price * product.quantity;
            if (product.discount !== undefined) {
                const discountAmount = (baseTotal * product.discount) / 100;
                return baseTotal - discountAmount;
            }

            return baseTotal;
        })
        .reduce((sum, current) => sum + current, 0);
}



