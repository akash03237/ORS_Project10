package com.rays.common.message;

import com.rays.common.BaseServiceInt;
import com.rays.common.UserContext;

/**
 * College Service interface.
 * @author Akash Soni
 */

public interface MessageServiceInt extends BaseServiceInt<MessageDTO> {

	/**
	 * Finds Role by name.
	 * 
	 * @param name
	 * @return
	 * 
	 */
	public MessageDTO findByTitle(String name, UserContext userContext);

	public MessageDTO findByCode(String code, UserContext userContext);

}
