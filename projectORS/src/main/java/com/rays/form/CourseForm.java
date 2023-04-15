package com.rays.form;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.CollegeDTO;
import com.rays.dto.CourseDTO;

public class CourseForm extends BaseForm {

	private long courseId;
	private String courseName;
	private String duration;
	private String description;
	public long getCourseId() {
		return courseId;
	}
	public void setCourseId(long courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	@Override
	public BaseDTO getDto() {

	CourseDTO dto = initDTO(new CourseDTO());
	dto.setCourseId(courseId);
	dto.setCourseName(courseName);
	dto.setDuration(duration);
	dto.setDescription(description);
	return dto;
	
}
	
}
