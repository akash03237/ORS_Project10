package com.rays.form;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.MarksheetDTO;

public class MarksheetForm extends BaseForm{
		
	   @NotEmpty(message= "please enter rollNo")
	   private String rollNo;
		
//	   @NotNull(message= "please enter Student Name")
	   @Min(value = 1,message = "please enter Student Name")	   
	   private long studentId;  
			  
	  
	   private String name;
	   
	   @NotNull(message= "please enter physics number")
	   @Max(99)
	   @Min(0)
	   private Integer physics;
	   
	   @NotNull(message= "please enter chemistry number")
	   @Max(99)
	   @Min(0)
	   private Integer chemistry;
	   
	   @NotNull(message= "please enter maths number")
	   @Max(99)
	   @Min(0)
	   private Integer maths;
		private Long imageId;

	public String getRollNo() {
		return rollNo;
	}
	public void setRollNo(String rollNo) {
		this.rollNo = rollNo;
	}
	public long getStudentId() {
		return studentId;
	}
	public void setStudentId(long studentId) {
		this.studentId = studentId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getPhysics() {
		return physics;
	}
	public void setPhysics(Integer physics) {
		this.physics = physics;
	}
	public Integer getChemistry() {
		return chemistry;
	}
	public void setChemistry(Integer chemistry) {
		this.chemistry = chemistry;
	}
	public Integer getMaths() {
		return maths;
	}
	public void setMaths(Integer maths) {
		this.maths = maths;
	}

	public Long getImageId() {
		return imageId;
	}

	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}


	@Override
	public BaseDTO getDto() {

	MarksheetDTO dto = initDTO(new MarksheetDTO());
	dto.setChemistry(chemistry);
	dto.setMaths(maths);
	dto.setPhysics(physics);
	dto.setName(name);
	dto.setRollNo(rollNo);
	dto.setStudentId(studentId);
	
	return dto;
	
}
}
