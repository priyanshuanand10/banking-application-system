package com.banking.dto;

import java.util.List;

import com.banking.model.Address;
import com.banking.model.History;
import com.banking.model.UserDetail;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDto {
	private long accountnumber;
	private UserDetail userdetails;
	private Address address;
	private List<History> history;

}
