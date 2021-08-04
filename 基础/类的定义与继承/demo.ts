class Person {
  name = 'WJ'
  getName () {
    return this.name
  }
}

class Teacher extends Person {
  // 重写
  getName () {
    return 'hahaha'
  }
  getTeacherName () {
    // super.getName() 可以通过super调用父类方法
    return 'WJ'
  }
}

const teacher = new Teacher()
console.log(teacher.getName())
console.log(teacher.getTeacherName())
