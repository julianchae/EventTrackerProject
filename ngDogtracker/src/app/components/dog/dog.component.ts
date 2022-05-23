import { DogService } from './../../services/dog.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/model/dog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

 dogs: Dog[] = [];

 addDogBoolean: boolean = false;

 selected: Dog | null = null;

 intakeDog : Dog = new Dog();

 updatedDog: Dog = new Dog()

  newDog: Dog = new Dog();

  editDog: Dog | null = null;

  keyword: string ='';


  constructor(
    private dogServe : DogService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.loadDogs()
  }

  doesDogHaveImage(image:string){
    if(image){
      return image;
    }else{
      return "https://previews.123rf.com/images/siridhata/siridhata1702/siridhata170200078/71854477-cartoon-dog-vector-illustration.jpg"
    }

  }

findByKeyword(keyword: string){

  this.dogServe.findByKeyword(keyword).subscribe(
  (sucess)=>{
    (this.dogs = sucess)
    console.log(this.dogs)
  },
(err)=> console.log('Observe got an error'+err)

  )
}


  loadDogs(){
    this.dogServe.index().subscribe(
      (sucess) => {
        (this.dogs = sucess)
        console.log(this.dogs)
      },
      (err)=> console.log('Observe got an error'+ err)
    );
  }

  addDog(addedDog: Dog){

this.dogServe.addDog(addedDog).subscribe(
  (success)=> {
    this.newDog = new Dog();
    this.loadDogs();
  }
)
  }
  setEditDog() {
    this.editDog = Object.assign({}, this.selected);
  }
  updateDog(updatedDog: Dog){


this.dogServe.update(updatedDog).subscribe(
  (success)=>{
    this.editDog = null;
this.selected = null;
this.loadDogs();
  }

)
  }


  displayIntake(){
    this.addDogBoolean =!this.addDogBoolean;


  }

  displayDogs() {
    this.selected = null;
    this.editDog = null;
    this.loadDogs();
  }

  deleteDog(id: number){
  this.dogServe.delete(id).subscribe((success)=>{
  this.selected = null;
    this.loadDogs();

  });


  }

  displayDog(dog: Dog){

    this.selected = dog;
    console.log(this.selected)


}
}
