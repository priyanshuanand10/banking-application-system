package com.banking.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "userdetails")
public class User {
	@Id
	private long accountnumber;
	private UserDetail userdetails;
	private Address address;
	private List<History> history;
}
