package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Dog;
import com.skilldistillery.repositories.DogRepository;
@Service
public class DogServiceImpl implements DogService {

	
	@Autowired
	DogRepository repo;
	
	@Override
	public List<Dog> index() {
		
		return repo.findAll();
	}
	@Override
	public Dog findById(int id) {
		Dog dog = new Dog();
		
		Optional<Dog>op= repo.findById(id);
		
		dog = op.get();
		
		return dog;
		}
	

	@Override
	public Dog createDog(Dog dog) {
	
		
		repo.saveAndFlush(dog);
		
		return dog;
	
	}
	@Override
	public boolean deleteDog(int id) {
		boolean dogDeleted = false;
		
		Optional<Dog> op = repo.findById(id);
		if(op.isPresent()) {
			
			repo.deleteById(id);
			dogDeleted = true;
		}
	
		
		return dogDeleted;
	
	}
	@Override
	public Dog updateDog(int id,
			Dog dog) {

		Dog managedDog = new Dog();
		Optional<Dog> op = repo.findById(id);
		
	

		if(op.isPresent()) {
			
			
			managedDog = op.get();
			managedDog.setName(dog.getName());
			managedDog.setAge(dog.getAge());
			managedDog.setBreed(dog.getBreed());
			managedDog.setColor(dog.getColor());
			managedDog.setFixed(dog.isFixed());
			managedDog.setWeight(dog.getWeight());
			managedDog.setImageUrl(dog.getImageUrl());
			repo.saveAndFlush(managedDog);
			return managedDog;
			
			
			
		}
		return null;
		
		
		
	}

}