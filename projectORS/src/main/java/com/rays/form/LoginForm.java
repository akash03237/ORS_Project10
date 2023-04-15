package com.rays.form;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.rays.common.BaseForm;

/**
 * Contains login form elements and their declarative input validations.
 * @author Akash Soni
 */

public class LoginForm extends BaseForm {
	//message= "please enter loginId"
	@NotEmpty(message= "loginId is required")
	@Email
	private String loginId;

	//please enter password
	@NotEmpty(message= "password is required")
	private String password;

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

}
