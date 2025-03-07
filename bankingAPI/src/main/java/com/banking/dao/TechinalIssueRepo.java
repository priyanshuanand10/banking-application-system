package com.banking.dao;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.banking.model.TechnicalIssue;

public interface TechinalIssueRepo extends ReactiveMongoRepository<TechnicalIssue, String> {

}
