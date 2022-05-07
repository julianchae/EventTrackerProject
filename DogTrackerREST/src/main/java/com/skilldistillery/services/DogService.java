package com.skilldistillery.services;

import java.util.List;


import com.skilldistillery.entities.Dog;



public interface DogService {
	
	List<Dog>index();

	Dog findById(int id);

	Dog createDog(Dog dog);

	boolean deleteDog(int id);
	
	Dog updateDog(int id, Dog dog);
}
