package com.rays.service;

import com.rays.common.BaseServiceInt;
import com.rays.common.UserContext;
import com.rays.dto.StudentDTO;

/**
 * College Service interface.
 * @author Akash Soni
 */

public interface StudentServiceInt extends BaseServiceInt<StudentDTO> {

	/**
	 * Finds a Role by name.
	 * 
	 * @param roleName
	 * @return
	 */
	public StudentDTO findByEmail(String email, UserContext context);

}