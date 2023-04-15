package com.rays.service;

import com.rays.common.BaseServiceInt;
import com.rays.common.UserContext;
import com.rays.dto.RoleDTO;

/**
 * College Service interface.
 * 
 * @author Akash Soni
 
 */

public interface RoleServiceInt extends BaseServiceInt<RoleDTO> {

	/**
	 * Finds Role by name.
	 * 
	 * @param name
	 * @return
	 */
	public RoleDTO findByName(String name, UserContext userContext);

}
