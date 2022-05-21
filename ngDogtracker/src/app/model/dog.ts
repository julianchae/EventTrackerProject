export class Dog {

  id: number;

  name: string;

  breed: string;

  color: string;

  sex: string;

  age: number;

  weight: number;

  fixed: boolean;

  imageUrl: string;


  constructor(  id: number = 0,

    name: string='',

    breed: string= '',

    color: string= '',

    sex: string = '',

    age: number=0,

    weight: number=0,

    fixed: boolean= false,

    imageUrl: string=''
    ){
      this.id = id;
      this.name = name;
      this.breed = breed;
      this.color = color;
      this.sex = sex;
      this.age = age;
      this.weight = weight;
      this.fixed = fixed;
      this.imageUrl = imageUrl;
    }

}
