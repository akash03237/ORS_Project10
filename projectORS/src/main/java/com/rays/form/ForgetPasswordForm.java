package com.rays.form;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import com.rays.common.BaseForm;

/**
 * Contains Forget Password form elements and their declarative input
 * validations.
 * @author Akash Soni
 */
public class ForgetPasswordForm extends BaseForm {

	@NotEmpty
	@Email
	private String login;

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

}
