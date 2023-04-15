package com.rays.common.message;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.common.UserContext;

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
public class MessageServiceImpl extends BaseServiceImpl<MessageDTO, MessageDAOInt> implements MessageServiceInt {

	private static Logger log = LoggerFactory.getLogger(MessageServiceImpl.class);

	@Transactional(readOnly = true)
	public MessageDTO findByTitle(String title, UserContext userContext) {
		return baseDao.findByUniqueKey("title", title, userContext);
	}

	@Transactional(readOnly = true)
	public MessageDTO findByCode(String code, UserContext userContext) {
		return baseDao.findByUniqueKey("code", code, userContext);
	}

}
