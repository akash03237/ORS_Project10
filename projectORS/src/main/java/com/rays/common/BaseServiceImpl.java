package com.rays.common;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.rays.exception.DatabaseException;
import com.rays.exception.DuplicateRecordException;



/**
 * @author Akash Soni
 *
 * @param <T>
 * @param <D>
 */
public abstract class BaseServiceImpl<T extends BaseDTO, D extends BaseDAOInt<T>> {

	private static Logger log = LoggerFactory.getLogger(BaseServiceImpl.class);

	@Autowired
	protected D baseDao;

	@Transactional(readOnly = true)
	public T findById(long id, UserContext userContext) {
		T dto = baseDao.findByPK(id, userContext);
		// T dto baseDao.findByPK(Class<T>, pk)
		return dto;
	}
	
	@Transactional(readOnly = true)
	public T findByUniqueKey(String att, String val, UserContext userContext) {
		T dto = baseDao.findByUniqueKey(att, val, userContext);
		return dto;
	}

	@Transactional(readOnly = true)
	public List<T> search(T dto, int pageNo, int pageSize, UserContext userContext) {
		System.out.println("Search run in Baseservice......Akash");
		return baseDao.search(dto, pageNo, pageSize, userContext);
	}
	
	/*
	 * public List<T> searchMany(T dto, int pageNo, int pageSize, UserContext
	 * userContext) { System.out.println("searchMany run in Baseservice"); return
	 * baseDao.searchMany(dto, pageNo, pageSize, userContext); }
	 */
	

	@Transactional(readOnly = true)
	public List<T> search(T dto, UserContext userContext) {
		System.out.println("baseservice Search run.....Akash ");
		return baseDao.search(dto, userContext);  
		
	}

	@Transactional(readOnly = false)
	public long add(T dto, UserContext userContext) throws DuplicateRecordException {
		// check duplicate
		System.out.println("add() run in BaseSecrvice......Akash ");
		long pk = baseDao.add(dto, userContext);
		return pk;
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public void update(T dto, UserContext userContext) throws DuplicateRecordException {
		baseDao.update(dto, userContext);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public long save(T dto, UserContext userContext) throws DuplicateRecordException {
		Long id = dto.getId();
		if (id != null && id > 0) {
			update(dto, userContext);
		} else {
			id = add(dto, userContext);
		}
		return id;
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public T delete(long id, UserContext userContext) {
		log.debug("Base Service delete Start");
		T dto = findById(id, userContext);
		if (dto == null) {
			throw new DatabaseException("Record not found");
		}
		baseDao.delete(dto, userContext);
		log.debug("Base Service delete End");
		return dto;
	}

}
