package com.rays.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.rays.common.BaseForm;

/**
 * Contains change password form elements and their declarative input validations.
 * @author Akash Soni
 */

public class ChangePasswordForm extends BaseForm {

	@NotEmpty
	@Size(min = 2, max = 10)
	private String oldPassword;

	@NotEmpty
	@Size(min = 2, max = 10)
	private String newPassword;
	
	private String loginId; 

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

}
