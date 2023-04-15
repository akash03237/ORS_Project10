package com.rays.service;

import com.rays.common.BaseServiceInt;
import com.rays.common.UserContext;

import com.rays.dto.TimeTableDTO;


public interface TimeTableServiceInt extends BaseServiceInt<TimeTableDTO> {

	public TimeTableDTO findByName(String name, UserContext context);
}
