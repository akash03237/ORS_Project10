package com.rays.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.CollegeDTO;
import com.rays.dto.UserDTO;

public class CollegeForm extends BaseForm{
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String address;
	
	@NotEmpty
	private String state;
	
	@NotEmpty
	private String city;
	
	@NotNull
	@Pattern(regexp="(^$|[0-9]{10})")
	private String phoneNo;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	
	@Override
	public BaseDTO getDto() {

	CollegeDTO dto = initDTO(new CollegeDTO());
	dto.setName(name);
	dto.setAddress(address);
	dto.setCity(city);
	dto.setState(state);
	dto.setPhoneNo(phoneNo);
		
	return dto;
	
}
}