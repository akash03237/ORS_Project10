package com.rays.form;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

public class UserRegistrationForm {

	@NotEmpty(message= "please enter first name")
	private String firstName;
	/**
	 * Last Name of User
	 */
	@NotEmpty(message= "please enter last name")
	private String lastName;

	@Email
	@NotEmpty(message= "please enter email")
	private String login;
	/**
	 * Password of User
	 */
	@NotEmpty(message= "please enter password")
	private String password;

	/**
	 * Date of Birth of User
	 */

	private Date dob;
	
	
	/**
	 * MobielNo of User
	 */
	@NotEmpty(message= "please enter phone")
	@Pattern(regexp="(^$|[0-9]{10})")
	private String phone;

	/**
	 * Gender of User
	 */
	@NotEmpty(message= "please enter gender")
	private String gender;
	
	
	@Pattern(regexp="(^$|[0-9]{10})")
	private String alternateMobile;

	public String getAlternateMobile() {
		return alternateMobile;
	}

	public void setAlternateMobile(String alternateMobile) {
		this.alternateMobile = alternateMobile;
	}


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

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

}
