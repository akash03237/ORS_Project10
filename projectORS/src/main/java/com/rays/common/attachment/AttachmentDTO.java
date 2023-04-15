package com.rays.common.attachment;

import java.io.IOException;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

/**
 * Contains attached file information and data
 * @author Akash Soni
 */

@Entity
@Table(name = "ST_ATTACHMENT")

public class AttachmentDTO extends AttachmentBaseDTO {

	public AttachmentDTO() {
		super();
	}

	public AttachmentDTO(MultipartFile file) {
		name = file.getOriginalFilename();
		type = file.getContentType();
		
		System.out.println("file Name :: " +name);
		System.out.println(type);
		try {
			doc = file.getBytes();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Contains file data
	 */
	@Lob
	@Column(name = "DOC")
	private byte[] doc;

	public byte[] getDoc() {
		return doc;
	}

	public void setDoc(byte[] doc) {
		this.doc = doc;
	}

}