package com.rays.form;

import javax.validation.constraints.NotEmpty;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.CourseDTO;
import com.rays.dto.RoleDTO;
import com.rays.dto.UserDTO;

public class RoleForm extends BaseForm {
	
	public static final int ADMIN = 1;
	public static final int STUDENT = 2;
	public static final int COLLEGE_SCHOOL = 3;
	public static final int KIOSK = 4;
	@NotEmpty(message= "please enter name")
	private String name;
	
	@NotEmpty(message= "please enter description")
	private String description;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	@Override
	public BaseDTO getDto() {

	RoleDTO dto = initDTO(new RoleDTO());
	dto.setDescription(description);
	System.out.println(dto.getDescription()+"___________");
	dto.setName(name);
	return dto;
	
}
	
}
