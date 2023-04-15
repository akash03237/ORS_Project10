package com.rays.form;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.UserDTO;

/**
 * Contains User form elements and their declarative input validations.
 * 
 * @author Akash Soni
 */
public class UserForm extends BaseForm {

	@NotEmpty(message = "please enter first name")
	private String firstName;

	@NotEmpty(message = "please enter last name")
	private String lastName;

	@NotEmpty(message = "please enter loginId")
	private String loginId;

	@NotEmpty(message = "please enter password")
	private String password;
 
	@Email
	private String email;

	@NotNull(message = "please enter status")
	private String status;

	private String roleName = null;

	@NotNull(message = "please enter roll")
	@Min(1)
	private Long roleId;

	@NotNull(message = "please enter phone")
	@Pattern(regexp = "(^$|[0-9]{10})")
	private String phone;

	@NotNull(message = "please enter alternate phone")
	private String alternateMobile;
	
	@NotNull(message = "please enter dob")
	private Date dob;

	@NotNull(message = "please enter gender")
	private String gender;

	private Long imageId;

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

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAlternateMobile() {
		return alternateMobile;
	}

	public void setAlternateMobile(String alternateMobile) {
		this.alternateMobile = alternateMobile;
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

	public Long getImageId() {
		return imageId;
	}

	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}

	public String getName() {
		return firstName + " " + lastName;
	}

	public void setName(String firstName) {
		this.firstName = firstName;
	}

	@Override
	public BaseDTO getDto() {

		UserDTO dto = initDTO(new UserDTO());
		dto.setFirstName(firstName);
		dto.setLastName(lastName);
		dto.setEmail(loginId);
		dto.setLoginId(loginId);
		dto.setPassword(password);
		dto.setRoleId(roleId);
		dto.setRoleName(roleName);
		dto.setAlternateMobile(alternateMobile);
		dto.setDob(dob);
		dto.setGender(gender);
		dto.setPhone(phone);
		dto.setStatus(status);
		dto.setImageId(imageId);
		return dto;
	}

}
