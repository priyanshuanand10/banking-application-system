package com.banking.dao;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.banking.model.UserLoginPassword;

public interface UserLoginPassRepo extends ReactiveMongoRepository<UserLoginPassword, Long> {

}
