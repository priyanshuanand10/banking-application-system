package com.banking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
import com.banking.model.Login;
import com.banking.model.TechnicalIssue;
import com.banking.model.User;
import com.banking.model.UserDetail;
import com.banking.model.UserLoginPassword;
import com.banking.service.AdminService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

	@Autowired
	private AdminService service;
	
	@PostMapping("/login")
	public String loginSuccess(@RequestBody Login l)
	{
		if(l.getUname()==null||l.getPass()==null)
			return "failed";
		if(service.loginsucess(l))
			return "success";
		else
			return "failed";
		
	}
	
	@PostMapping("/addAdmin")
	public Mono<Login> adminLogin(@RequestBody Login l )
	{
		return service.userLogin(l);
	}
	
	@GetMapping("/getAllAdmin")
	public Flux<Login> getAllAdmins()
	{
		return service.getAllAdmin();
	}
	
	@GetMapping("getAllAdmin/{uname}")
	public Mono<Login> getOneAdminUser(@PathVariable(name = "uname") String uname)
	{
		return service.getOneAdminUser(uname);
	}

	@PostMapping("/addOneUserAPI")
	public Mono<ResponseEntity<UserDto>> addOneUser(@RequestBody UserDto user) {
		return service.addUser(user);
	}

	@PostMapping("/addManyUserAPI")
	public Flux<User> addOneUser(@RequestBody List<User> user) {
		return service.addManyUser(user);
	}
	@PostMapping("/addTechnicalIssue")
	public Mono<TechnicalIssue> addTechnicalIssue(@RequestBody TechnicalIssue t) {
		return service.addTechnicalIssue(t);
	}


	@GetMapping("/getUserDetail" )
	public Flux<UserDetail> getAllUser() {
		return service.getAllUsers();
	}

	@GetMapping("/getUserAllDetail")
	public Flux<UserDto> getAllUserInfo() {
		return service.getAllUsersInfo();
	}

	@GetMapping("/getUserDetail/{accountnumber}")
	public Mono<UserDetail> getAllUserById(@PathVariable(name = "accountnumber") long acc) {
		return service.getUsersByID(acc);
	}

	@GetMapping("/getUserAllDetail/{accountnumber}")
	public Mono<UserDto> getAllUserInfoDyId(@PathVariable(name = "accountnumber") long acc) {
		return service.getUsersInfoById(acc);
	}

	@DeleteMapping("/delete/{accountnumber}")
	public Mono<Void> deleteUserById(@PathVariable(name = "accountnumber") long acc) {
		return service.deleteUserById(acc);

	}

	@PutMapping("/update/{accountnumber}")
	public Mono<UserDto> updateUserById(@PathVariable(name = "accountnumber") long acc, @RequestBody UserDto u) {
		return service.updateUserById(acc, u);
	}
	
	@PostMapping("/userloginpass")
	public String userloginpass(@RequestBody UserLoginPassword u)
	{
		return service.setloginpass(u);
	}

}
