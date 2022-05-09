package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.entities.Dog;

public interface DogRepository extends JpaRepository<Dog, Integer> {

	List<Dog> findByNameLikeOrBreedLike(@Param("k")String keyword1,@Param("k") String keyword2);
	
	List<Dog> findByWeightBetween(Integer low, Integer high);
}
