package com.skilldistillery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DogTrackerRestApplication extends SpringBootServletInitializer{
	
	 @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(DogTrackerRestApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(DogTrackerRestApplication.class, args);
	}

}
