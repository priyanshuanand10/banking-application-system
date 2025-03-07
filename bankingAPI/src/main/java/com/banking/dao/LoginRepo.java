package com.banking.dao;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.banking.model.Login;

@Repository
public interface LoginRepo extends ReactiveMongoRepository<Login, String> {

}
