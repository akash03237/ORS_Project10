package com.rays.common.message;

import javax.validation.constraints.NotEmpty;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;

/**
 * Contains Role form elements and their declarative input validations.
 * @author Akash Soni
 * 
 */
public class MessageForm extends BaseForm {

	@NotEmpty(message= "please enter subject")
	private String subject = null;

	@NotEmpty(message= "please enter code")
	private String code = null;

	@NotEmpty(message= "please enter type")
	private String type = null;

	@NotEmpty(message= "please enter body")
	private String body = null;

	
	
	private String status = null;

	public String html = null ;

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public BaseDTO getDto() {
		MessageDTO dto = new MessageDTO();
		dto.setId(id);
		dto.setSubject(subject);
		dto.setCode(code);
		dto.setHtml(html);
		dto.setStatus(status);
		dto.setType(type);
		dto.setBody(body);
		return dto;
	}

	@Override
	public void populate(BaseDTO bdDto) {
	}
}
