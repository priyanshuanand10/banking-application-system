package com.banking.dao;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.banking.model.User;

@Repository
public interface UserRepo extends ReactiveMongoRepository<User, Long> {

}
