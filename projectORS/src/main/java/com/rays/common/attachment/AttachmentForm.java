package com.rays.common.attachment;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;

/**
 * Contains Cart form elements and their declarative input validations.
 * @author Akash Soni
 * 
 */
public class AttachmentForm extends BaseForm {

	protected String name = null;

	protected String type = null;

	protected String description = null;

	protected String tags = null;

	protected String path = null;

	protected Long userId = null;

	protected String email =null;
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	private byte[] doc;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getDoc() {
		return doc;
	}

	public void setDoc(byte[] doc) {
		this.doc = doc;
	}

	@Override
	public void populate(BaseDTO bdDto) {
	}

	@Override
	public BaseDTO getDto() {
		return new AttachmentDTO();
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

}
