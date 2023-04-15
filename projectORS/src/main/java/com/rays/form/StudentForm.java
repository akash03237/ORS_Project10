package com.rays.form;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.CourseDTO;
import com.rays.dto.StudentDTO;

public class StudentForm extends BaseForm {

	@NotEmpty(message= "please enter firstname")
	private String firstName;

	@NotEmpty(message= "please enter lastname")
	private String lastName;
	
	@NotEmpty(message= "please enter enroll")
	private String enrolNo;
	
	@NotEmpty(message= "please enter email")
	@Email
	private String email;

	@NotNull(message= "please enter phone")
	@Pattern(regexp="(^$|[0-9]{10})")
	private String phoneNo;

	private Date dob;

	private String gender;

	private long collegeId;
	
	private String collegeName;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhone(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public long getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(long collegeId) {
		this.collegeId = collegeId;
	}

	public String getCollegeName() {
		return collegeName;
	}

	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}

	public String getEnrolNo() {
		return enrolNo;
	}

	public void setEnrolNo(String enrolNo) {
		this.enrolNo = enrolNo;
	}
	
	@Override
	public BaseDTO getDto() {

	StudentDTO dto = initDTO(new StudentDTO());
	
	dto.setCollegeId(collegeId);
	dto.setCreatedBy(collegeName);
	dto.setCollegeName(collegeName);
	dto.setEnrolNo(enrolNo);
	dto.setEmail(email);
	dto.setDob(dob);
	dto.setFirstName(firstName);
	dto.setPhoneNo(phoneNo);
	dto.setLastName(lastName);
	dto.setDob(dob);
	return dto;
	
}
	}

