package com.banking.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banking.dao.UserLoginPassRepo;
import com.banking.dao.UserRepo;
import com.banking.dto.UserDto;
import com.banking.model.History;
import com.banking.model.Login;
import com.banking.model.User;
import com.banking.model.UserDetail;
import com.banking.model.UserLoginPassword;
import com.banking.util.AppUtils;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class UserService {

	@Autowired
	private UserRepo repo;

	@Autowired
	private UserLoginPassRepo ulprepo;

	public Mono<UserDetail> getUserDetails(long acc) {
		return repo.findById(acc).map(p -> p.getUserdetails());

	}

	public Mono<User> getAllUserDetails(long acc) {
		return repo.findById(acc);

	}

	public LocalDateTime getCurrectDateTime() {

		LocalDateTime now = LocalDateTime.now(ZoneId.of("Asia/Kolkata"));
		System.out.println(now);

		return now;

	}

	public Mono<UserDetail> upateUser(long acc, UserDto ud) {
		return repo.findById(acc).map(p -> p).doOnNext(e -> {
			e.setAccountnumber(acc);
			e.setUserdetails(ud.getUserdetails());
		}).flatMap(repo::save).map(r -> r.getUserdetails());

	}

	public Mono<Void> deleteById(long acc) {
		return repo.deleteById(acc);

	}

	public Mono<UserDetail> withdraw(long acc, double amount) {
		return repo.findById(acc).doOnNext(e -> {

			if (e.getUserdetails().getBalance() - amount > 0) {
				e.getUserdetails().setBalance(e.getUserdetails().getBalance() - amount);
				e.getHistory().add(new History("withdraw", amount, getCurrectDateTime()));

			}
		}).flatMap(repo::save).map(p -> p.getUserdetails());

	}

	public Mono<List<History>> history(long acc) {
		return repo.findById(acc).map(p -> p.getHistory());

	}

	public Mono<UserDetail> deposite(long acc, double amount) {
		return repo.findById(acc).doOnNext(p -> {
			p.getUserdetails().setBalance(p.getUserdetails().getBalance() + amount);
			p.getHistory().add(new History("deposite", amount, getCurrectDateTime()));

		}).flatMap(repo::save).map(q -> q.getUserdetails());
	}

	public Flux<UserDetail> tranfer(long acc1, long acc2, double amount) {

		Mono<UserDetail> u1 = repo.findById(acc1).doOnNext(p -> {
			p.getUserdetails().setBalance(p.getUserdetails().getBalance() - amount);
			p.getHistory().add(new History("transfered to " + acc2, amount, getCurrectDateTime()));
		}).flatMap(repo::save).map(q -> q.getUserdetails());

		Mono<UserDetail> u2 = repo.findById(acc2).doOnNext(p -> {
			p.getUserdetails().setBalance(p.getUserdetails().getBalance() + amount);
			p.getHistory().add(new History("transfered from " + acc1, amount, getCurrectDateTime()));
		}).flatMap(repo::save).map(q -> q.getUserdetails());

		List<Mono<UserDetail>> li = new ArrayList<>();

		li.add(u1);
		li.add(u2);

		return Flux.concat(li);

	}

	public boolean usercreadentialcheck(UserLoginPassword l) {

		boolean x = false;
		try {
			if (l.getAccountnumber() == 0 || l.getPassword() == null) {
				return false;
			}

			long accountnumber = l.getAccountnumber();
			String pass = l.getPassword();

//			Login newuser = new Login();
			UserLoginPassword newuser = new UserLoginPassword();

			ulprepo.findById(accountnumber).defaultIfEmpty(new UserLoginPassword()).subscribe(t -> {
				newuser.setAccountnumber(t.getAccountnumber());
				newuser.setPassword(t.getPassword());
			});
			try {
				Thread.sleep(10);
			} catch (InterruptedException e) {

				e.printStackTrace();
			}

			if (newuser.getAccountnumber() == accountnumber && newuser.getPassword().equals(pass))
				x = true;
			else
				x = false;
		} catch (Exception e) {

		}
		return x;

	}
}
