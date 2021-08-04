// // interface 和 type 相类似，但并不完全一致
// interface Person {
//   // readonly name: string // 只读
//   name: string;
//   age?: number;
//   [propName: string]: any;
//   say(): string;
// }

// // 接口的继承
// interface Teacher extends Person {
//   teach(): string;
// }

// // 接口定义函数
// interface SayHi {
//   (word: string): string
// }

// const getPersonName = (person: Person): void => {
//   console.log(person.name)
// }

// const setPersonName = (person: Teacher, name: string): void => {
//   person.name = name
// }

// const person = {
//   name: 'WJ',
//   sex: 'male',
//   say () {
//     return 'say hello'
//   },
//   teach () {
//     return '123'
//   }
// }

// getPersonName(person)
// setPersonName(person, 'HSW')

// //  类应用接口就需要定义接口存在的属性
// class User implements Person {
//   name = 'WJ';
//   say () {
//     return '123'
//   }
// }

// const say: SayHi = (word: string) => {
//   return word
// }
