package com.banking.service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.banking.dao.LoginRepo;
import com.banking.dao.TechinalIssueRepo;
import com.banking.dao.UserLoginPassRepo;
import com.banking.dao.UserRepo;
import com.banking.dto.UserDto;
import com.banking.model.History;
import com.banking.model.Login;
import com.banking.model.TechnicalIssue;
import com.banking.model.User;
import com.banking.model.UserDetail;
import com.banking.model.UserLoginPassword;
import com.banking.util.AppUtils;

import reactor.core.Disposable;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class AdminService {

	@Autowired
	private UserRepo repo;

	@Autowired
	private LoginRepo login;
	
	@Autowired
	private TechinalIssueRepo technicalrepo;

	@Autowired
	private UserLoginPassRepo userlogin;
	
	
	public Mono<Login> userLogin(Login l) {
		return login.save(l);
	}

	public Flux<Login> getAllAdmin() {
		return login.findAll();
	}

	public Mono<Login> getOneAdminUser(String uname) {
		return login.findById(uname);

	}
	
	
	
	public LocalDateTime getCurrectDateTime()
	{
		
		 LocalDateTime now = LocalDateTime.now(ZoneId.of("Asia/Kolkata"));
		 DateTimeFormatter formatterLocalDateTime =
	               DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	      String result = formatterLocalDateTime.format(now);
		 
	      LocalDateTime dateTime = LocalDateTime.parse(result, formatterLocalDateTime);
			System.out.println(dateTime);
		
		  return dateTime;
		
	}

	public boolean loginsucess(Login l) {
		boolean x = false;
		try {
			if (l.getUname() == null || l.getPass() == null) {
				return false;
			}

			String uname = l.getUname();
			String pass = l.getPass();

			Login newuser = new Login();
			login.findById(uname).defaultIfEmpty(new Login()).subscribe(t -> {
				newuser.setUname(t.getUname());
				newuser.setPass(t.getPass());

			});
			try {
				Thread.sleep(10);
			} catch (InterruptedException e) {

				e.printStackTrace();
			}

			if (newuser.getUname().equals(uname) && newuser.getPass().equals(pass))
				x = true;
			else
				x = false;
		} catch (Exception e) {

		}
		return x;
	}

	public Mono<ResponseEntity<UserDto>> addUser(UserDto user) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		try {
			Date parse = formatter.parse(user.getUserdetails().getDob());
			user.getUserdetails().setDob(formatter.format (parse));
			
		} catch (Exception e) {
				}

		
		History h = new History("Initial", user.getUserdetails().getBalance(),  getCurrectDateTime() );
		List<History> li = new ArrayList<>();
		li.add(h);
		user.setHistory(li);

		return repo.save(AppUtils.dtoToEntity(user)).map(AppUtils::entityToDto)
				.map(us -> ResponseEntity.status(HttpStatus.ACCEPTED).body(us))
				.defaultIfEmpty(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(new UserDto()));
	}

	public Flux<User> addManyUser(List<User> user) {

		List<User> uitr = new ArrayList<>();
		for (User u : user) {
			History h = new History("Initial", u.getUserdetails().getBalance(),getCurrectDateTime());
			List<History> li = new ArrayList<>();
			li.add(h);
			u.setHistory(li);
			uitr.add(u);
			System.out.println(uitr);

		}

		return repo.saveAll(uitr);
	}

	public Flux<UserDetail> getAllUsers() {
		return repo.findAll().map(User::getUserdetails);

	}

	public Flux<UserDto> getAllUsersInfo() {
		return repo.findAll().map(AppUtils::entityToDto);
	}

	public Mono<UserDetail> getUsersByID(long acc) {
		return repo.findById(acc).map(User::getUserdetails);

	}

	public Mono<UserDto> getUsersInfoById(long acc) {

		return repo.findById(acc).map(AppUtils::entityToDto);
	}

	public Mono<Void> deleteUserById(long acc) {
		return repo.deleteById(acc);
	}

	public Mono<UserDto> updateUserById(long acc, UserDto u) {

//		return repo.findById(acc).flatMap(p -> u.map(AppUtils::dtoToEntity))
//				.doOnNext(e -> e.setAccountnumber(acc))
//				.flatMap(repo::save).map(AppUtils::entityToDto);
		
		return repo.findById(acc).doOnNext(p->{
			
			p.setAccountnumber(acc);
			p.setAddress(u.getAddress());
			p.setUserdetails(u.getUserdetails());
		
		}).flatMap(repo::save).map(AppUtils::entityToDto) ;
	}

	public Mono<TechnicalIssue> addTechnicalIssue(TechnicalIssue t) {
	
		return technicalrepo.save(t);
	}
	
	public String setloginpass(UserLoginPassword u)
	{
	 userlogin.save(u).subscribe();
		return "user password created";
		
	}

}
