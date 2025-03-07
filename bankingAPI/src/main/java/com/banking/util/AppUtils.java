package com.banking.util;

import org.springframework.beans.BeanUtils;

import com.banking.dto.UserDto;
import com.banking.model.User;

public class AppUtils {

	public static User dtoToEntity(UserDto udto) {
		User u = new User();
		BeanUtils.copyProperties(udto, u);
		return u;
	}

	public static UserDto entityToDto(User u) {
		UserDto udto = new UserDto();
		BeanUtils.copyProperties(u, udto);
		return udto;
	}
	
	private AppUtils() throws IllegalAccessException
	{
		throw new IllegalAccessException("Utility class ");
	}

}
