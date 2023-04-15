package com.rays.service;

import com.rays.common.BaseServiceInt;
import com.rays.common.UserContext;
import com.rays.dto.CollegeDTO;
import com.rays.dto.CourseDTO;


public interface CourseServiceInt extends BaseServiceInt<CourseDTO> {

	public CourseDTO findByName(String name, UserContext context);
}
