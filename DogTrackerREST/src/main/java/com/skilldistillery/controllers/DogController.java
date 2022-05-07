package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Dog;
import com.skilldistillery.services.DogService;

@RequestMapping("api")
@RestController
public class DogController {
	
	@Autowired
	DogService serve;
	
	@GetMapping("index")
	public List<Dog>index(){
		return serve.index();
		
	}
	@GetMapping("dogs/{id}")
	public Dog findById(@PathVariable int id,
			HttpServletResponse resp) {
		Dog dog = null;
		dog = serve.findById(id);
		
		if(dog == null) {
			resp.setStatus(404);
		}
		
		
		return dog;
		
		
	}
	@PostMapping("dogs")
	public Dog createDog(@RequestBody Dog dog,
			HttpServletResponse resp, 
			HttpServletRequest req) {
		dog = serve.createDog(dog);
		
		if ( dog == null) {
			resp.setStatus(404);
			
		}else {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(dog.getId());
			resp.setHeader("Location", url.toString());
		}
		return dog;
		
	}
	@DeleteMapping("dogs/{id}")
	public void deleteDog(@PathVariable int id,
			HttpServletResponse resp) {
		
		serve.deleteDog(id);
	
	}
	@PutMapping("dogs/{id}")
	public Dog updateDog(@PathVariable int id,
			@RequestBody Dog dog,
			HttpServletResponse resp) {
		
		try {
			dog = serve.updateDog(id, dog);
			if(dog == null) {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			dog = null;
			e.printStackTrace();
		}
		return dog;
		
	}

}
