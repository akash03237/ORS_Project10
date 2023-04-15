package com.rays.service;

import java.util.List;

import com.rays.common.BaseServiceInt;
import com.rays.common.UserContext;
import com.rays.dto.MarksheetDTO;

/**
 * College Service interface.
 * @author Akash Soni
 */

public interface MarksheetServiceInt extends BaseServiceInt<MarksheetDTO> {

	/**
	 * Finds marksheet by name.
	 * 
	 * @param name
	 * @return
	 */
	public MarksheetDTO findByName(String name, UserContext context);

	/**
	 * Finds marksheet by Roll No
	 * 
	 * @param rollNo
	 * @return
	 */
	public MarksheetDTO findByRollNo(String rollNo, UserContext context);

	/**
	 * Gets merit list of students
	 * 
	 * @return
	 */
	public List<MarksheetDTO> getMeritList(UserContext context);
}