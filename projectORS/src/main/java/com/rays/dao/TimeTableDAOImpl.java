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
import com.rays.dto.RoleDTO;
import com.rays.dto.SubjectDTO;
import com.rays.dto.TimeTableDTO;
import com.rays.dto.UserDTO;
/**
 * @author Akash Soni
 *
 */
@Repository
public class TimeTableDAOImpl extends BaseDAOImpl<TimeTableDTO> implements TimeTableDAOInt{

	@Override
	protected List<Predicate> getWhereClause(TimeTableDTO dto, CriteriaBuilder builder, Root<TimeTableDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();
		System.out.println("wherre clause run start");
		if (!isEmptyString(dto.getSubjectName())) {

			whereCondition.add(builder.like(qRoot.get("subjectName"), dto.getSubjectName() + "%"));
			System.out.println("subjectName"+ dto.getSubjectName());
		}
		if (!isEmptyString(dto.getCourseName())) {

			whereCondition.add(builder.like(qRoot.get("courseName"), dto.getCourseName() + "%"));
			System.out.println("subjectName"+ dto.getSubjectName());
		}
		
		System.out.println("wherclause run end");
		return whereCondition;
	}

	@Override
	public Class<TimeTableDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return TimeTableDTO.class;
	}

	@Autowired
	SubjectDAOInt subjectService;
	
	@Autowired 
	CourseDAOInt courseService;
	
	@Override
	protected void populate(TimeTableDTO dto, UserContext userContext) {
		SubjectDTO subjectDto = subjectService.findByPK(dto.getSubjectId(), userContext);
		if (subjectDto != null) {
			dto.setSubjectName(subjectDto.getSubjectName());}
		
		CourseDTO courseDto = courseService.findByPK(dto.getCourseId(), userContext);
		if (courseDto != null) {
			dto.setCourseName(courseDto.getCourseName());
		}
		
		
		}
	}

