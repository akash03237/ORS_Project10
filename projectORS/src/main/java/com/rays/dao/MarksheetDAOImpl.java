package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.common.UserContext;
import com.rays.dto.MarksheetDTO;
import com.rays.dto.StudentDTO;
/**
 * @author Akash Soni
 *
 */
@Repository
public class MarksheetDAOImpl extends BaseDAOImpl<MarksheetDTO> implements MarksheetDAOInt {

	@Autowired
	StudentDAOInt studentDao = null;

	@Override
	public List<MarksheetDTO> getMeritList() {
		
		
	System.out.println("marksheetDao merit marksheett run start");
//	List list = super.runHQL("from MarksheetDTO order by (physics+chemistry+maths) desc limit 0,10", null);
		List list = super.marksheetMeritList("from MarksheetDTO order by (physics+chemistry+maths) desc", null);
	return list;
		}

	@Override
	protected List<Predicate> getWhereClause(MarksheetDTO dto, CriteriaBuilder builder, Root<MarksheetDTO> qRoot) {

		// Create where conditions
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getName())) {

			whereCondition.add(builder.like(qRoot.get("name"), dto.getName() + "%"));
		}

		if (!isEmptyString(dto.getRollNo())) {

			whereCondition.add(builder.like(qRoot.get("rollNo"), dto.getRollNo() + "%"));
		}

		if (!isZeroNumber(dto.getStudentId())) {

			whereCondition.add(builder.equal(qRoot.get("studentId"), dto.getStudentId()));
		}
		
		if (!isZeroNumber(dto.getId())) {

			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		return whereCondition;
	}

	@Override
	protected void populate(MarksheetDTO dto, UserContext userContext) {
		if (dto.getStudentId() != null) {
			System.out.println("MarksheetDao---"+dto.getStudentId());
			StudentDTO studentDTO = studentDao.findByPK(dto.getStudentId(), userContext);
			if (studentDTO != null) {
				dto.setName(studentDTO.getFirstName() + " " + studentDTO.getLastName());
			}
		}
	}

	@Override
	public Class<MarksheetDTO> getDTOClass() {
		return MarksheetDTO.class;
	}

}
