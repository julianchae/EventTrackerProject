package com.skilldistillery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Dog;

public interface DogRepository extends JpaRepository<Dog, Integer> {

	
}
