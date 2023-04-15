package com.rays.service;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.common.UserContext;
import com.rays.dao.CollegeDAOInt;
import com.rays.dto.CollegeDTO;
import com.rays.exception.DuplicateRecordException;

/**
 * Session facade of Role Service. It is transactional, apply declarative
 * transactions with help of Spring AOP.
 * 
 * If unchecked exception is propagated from a method then transaction is rolled
 * back.
 * 
 * Default propagation value is Propagation.REQUIRED and readOnly = false
 * @author Akash Soni
 */
@Service
@Transactional
public class CollegeServiceImpl extends BaseServiceImpl<CollegeDTO, CollegeDAOInt> implements CollegeServiceInt {

	private static Logger log = Logger.getLogger(CollegeServiceImpl.class);

	@Transactional(readOnly = true)
	public CollegeDTO findByName(String name, UserContext context) {
		CollegeDTO dto = baseDao.findByUniqueKey("name", name, context);
		return dto;
	}

}