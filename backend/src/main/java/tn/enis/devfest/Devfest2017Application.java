package tn.enis.devfest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class Devfest2017Application {

	public static void main(String[] args) {
		SpringApplication.run(Devfest2017Application.class, args);
	}
}
