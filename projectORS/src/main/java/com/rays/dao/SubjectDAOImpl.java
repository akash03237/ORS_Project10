package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.common.UserContext;
import com.rays.dto.CourseDTO;
import com.rays.dto.RoleDTO;
import com.rays.dto.SubjectDTO;
import com.rays.dto.UserDTO;
/**
 * @author Akash Soni
 *
 */
@Repository
public class SubjectDAOImpl extends BaseDAOImpl<SubjectDTO> implements SubjectDAOInt {

	@Override
	protected List<Predicate> getWhereClause(SubjectDTO dto, CriteriaBuilder builder, Root<SubjectDTO> qRoot) {
		// Create where conditions
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getSubjectName())) {

		whereCondition.add(builder.like(qRoot.get("subjectName"), dto.getSubjectName() + "%"));
		}

		if (!isEmptyString(dto.getCourseName())) {

		whereCondition.add(builder.like(qRoot.get("courseName"), dto.getCourseName() + "%"));
		}

		return whereCondition;
	}

	@Override
	public Class<SubjectDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return SubjectDTO.class;
	}

	@Autowired
	CourseDAOInt courseDao;

	@Override
	protected void populate(SubjectDTO dto, UserContext userContext) {
		if (dto.getCourseId() != 0) {
			CourseDTO courseDTO = courseDao.findByPK(dto.getCourseId(), userContext);
			if (courseDTO != null) {
			dto.setCourseName(courseDTO.getCourseName());
			}
			}
	}
	


}
