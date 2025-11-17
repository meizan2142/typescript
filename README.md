## Interface এবং Type-এর মধ্যে পার্থক্য: 
* Interface শুধুমাত্র object-এর কাঠামো বা shape নির্ধারণ করতে ব্যবহৃত হয় । আর Type ব্যবহার করা হয় Primitive, Union, Tuple, * * Function-type ইত্যাদি এগুলোর জন্য।
* একাধিকবার একই নামের interface declare করলে সবগুলো merge হয়ে যায়। আর Type-এর ক্ষেত্রে এটি সম্ভব নয়, একই নামের type declare করলে error হয়।
* Interface-এ intersection ব্যবহার করা যায় না। আর Type-এর মধ্যে intersection ব্যবহার করে অনেকগুলো value-type একসাথে দেওয়া যায়। যেমন: type Book = string | number | boolean


## Enums in Typescript: 
* TypeScript-এ enum ব্যবহার করা হয় নির্দিষ্ট কিছু মানকে একজোট করতে। যখন কোডে কোনও মান বারবার ব্যবহার করতে হবে এবং সেই মানগুলোর জন্য readable ও meaningful নাম দরকার হয়—তখন enum খুবই কাজে লাগে।

### String enum
```ts
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = "PENDING"
}
const currentStatus = Status.Success;
console.log(currentStatus);
```

### Numeric enum
```ts
enum CarName {
    Honda,
    Toyota,
    Alto,
    Swift,
}
console.log(CarName);
console.log("Value of Alto is : "+ CarName.Alto);
```

