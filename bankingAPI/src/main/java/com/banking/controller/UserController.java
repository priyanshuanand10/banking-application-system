package com.banking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banking.dto.UserDto;
import com.banking.model.History;
import com.banking.model.User;
import com.banking.model.UserDetail;
import com.banking.model.UserLoginPassword;
import com.banking.service.UserService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping("/getAllDetails/{accountnumber}")
	public Mono<UserDetail> getAllDetailsOfUser(@PathVariable(name = "accountnumber") long acc) {
		return service.getUserDetails(acc);
	}

	@PutMapping("/update/{accountnumber}")
	public Mono<UserDetail> updateUserDetails(@PathVariable(name = "accountnumber") long acc,
			@RequestBody UserDto ud) {
		return service.upateUser(acc, ud);
	}

	@DeleteMapping("/delete/{accountnumber}")
	public Mono<Void> deleteUser(@PathVariable(name = "accountnumber") long acc) {
		return service.deleteById(acc);
	}

	@GetMapping("/getAllUSerInfo/{accountnumber}")
	public Mono<User> getAllUserInfro(@PathVariable(name = "accountnumber") long acc) {
		return service.getAllUserDetails(acc);
	}

	@GetMapping("/withdraw/{accountnumber}/{amount}")
	public Mono<UserDetail> withdraw(@PathVariable(name = "accountnumber") long acc,
			@PathVariable(name = "amount") double amount) {
		return service.withdraw(acc, amount);
	}

	@GetMapping("/deposite/{accountnumber}/{amount}")
	public Mono<UserDetail> deposite(@PathVariable(name = "accountnumber") long acc,
			@PathVariable(name = "amount") double amount) {
		return service.deposite(acc, amount);
	}

	@GetMapping("/history/{accountnumber}")
	public Mono<List<History>> history(@PathVariable(name = "accountnumber") long acc) {
		return service.history(acc);
	}

	@GetMapping("/transfer/{accountnumber1}/{accountnumber2}/{amount}")
	public Flux<UserDetail> history(@PathVariable(name = "accountnumber1") long acc1,
			@PathVariable(name = "accountnumber2") long acc2, @PathVariable(name = "amount") double amount) {
		System.out.println(acc1 + " " + acc2 + " " + amount);
		return service.tranfer(acc1, acc2, amount);
	}
	
	@PostMapping("/userlogin")
	public boolean usercreadentialcheck(@RequestBody UserLoginPassword ulp)
	{
		return service.usercreadentialcheck(ulp);
	}
	

}
