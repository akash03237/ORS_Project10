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
import com.rays.dto.CollegeDTO;
import com.rays.dto.CourseDTO;
import com.rays.dto.FacultyDTO;
import com.rays.dto.RoleDTO;
import com.rays.dto.SubjectDTO;
import com.rays.dto.UserDTO;
 /**
 * @author Akash Soni
 *
 */
@Repository
public class FacultyDAOImpl extends BaseDAOImpl<FacultyDTO> implements FacultyDAOInt  {

	@Override
	protected List<Predicate> getWhereClause(FacultyDTO dto, CriteriaBuilder builder, Root<FacultyDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getCollegeName())) {

			whereCondition.add(builder.like(qRoot.get("collegeName"), dto.getCollegeName() + "%"));
		}

		if (!isEmptyString(dto.getCourseName())) {

			whereCondition.add(builder.like(qRoot.get("courseName"), dto.getCourseName() + "%"));
		}

		if (!isEmptyString(dto.getSubjectName())) {

			whereCondition.add(builder.like(qRoot.get("subjectName"), dto.getSubjectName() + "%"));
		}

		return whereCondition;
	}
	

	@Override
	public Class<FacultyDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return FacultyDTO.class;
	}
	
	@Autowired
	CollegeDAOInt collegeDao;
	
	@Autowired
	CourseDAOInt courseDao;
	
	@Autowired
	SubjectDAOInt subjectDao;
	
	@Override
	protected void populate(FacultyDTO dto, UserContext userContext) {
		if (dto.getCollegeId() > 0) {
			CollegeDTO collegeDto = collegeDao.findByPK(dto.getCollegeId(), userContext);
			dto.setCollegeName(collegeDto.getName());
			System.out.println(dto.getCollegeName()+"CollegeNAMe-------");
		}
		if (dto.getCourseId() > 0) {
			CourseDTO courseDto = courseDao.findByPK(dto.getCourseId(), userContext);
			dto.setCourseName(courseDto.getCourseName());
			System.out.println(dto.getCourseName()+"CourseName----");
		}
		if (dto.getSubjectId()> 0) {
			SubjectDTO subjectDto = subjectDao.findByPK(dto.getSubjectId(), userContext);
			dto.setSubjectName(subjectDto.getSubjectName());
			System.out.println(dto.getSubjectName()+"SubjectName----");
		}
	}

}
