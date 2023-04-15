package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.common.UserContext;
import com.rays.dao.FacultyDAOInt;
import com.rays.dto.FacultyDTO;

@Service
@Transactional
public class FacultyServiceImpl extends BaseServiceImpl<FacultyDTO, FacultyDAOInt> implements FacultyServiceInt  {

	@Override
	public FacultyDTO findByEmail(String email, UserContext context) {
		// TODO Auto-generated method stub
		return null;
	}

}
