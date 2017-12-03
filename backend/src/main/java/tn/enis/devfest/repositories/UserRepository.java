package tn.enis.devfest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.enis.devfest.entitites.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	User findByLogin(String login);
	User findByLoginAndPw(String login,String pw);
}
