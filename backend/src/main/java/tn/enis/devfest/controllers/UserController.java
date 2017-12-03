package tn.enis.devfest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Controller;

import tn.enis.devfest.entitites.User;
import tn.enis.devfest.repositories.UserRepository;

@Controller("user")
public class UserController extends CrudController<User,Integer> {

	@Autowired
	private UserRepository userRepository;

	@Override
	protected JpaRepository<User, Integer> getRepository() {
		return (JpaRepository<User, Integer>) userRepository;
	}
	
}
