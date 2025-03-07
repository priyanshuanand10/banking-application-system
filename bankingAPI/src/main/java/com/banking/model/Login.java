package com.banking.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "login")
public class Login {

	@Id
	@Field(name = "username")
	private String uname;
	
	@Field(name = "password")
	private String pass;
	
	private String email;
	
	@Field(name = "phone number")
	private String phno;
}
