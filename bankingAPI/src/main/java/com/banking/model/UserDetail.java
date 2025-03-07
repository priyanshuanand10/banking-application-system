package com.banking.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDetail {
	private String fullnname;
	private int age;
	private String dob;
	private Double balance;
	private String email;
	
}
