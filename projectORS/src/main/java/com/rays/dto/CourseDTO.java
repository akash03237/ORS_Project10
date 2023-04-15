package com.rays.dto;

import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;
/**
 * @author Akash Soni
 *
 */
@Entity
@Table(name = "ST_COURSE")
public class CourseDTO extends BaseDTO {
	
	@Column(name = "COURSE_ID", length = 50)
	private long courseId;

	@Column(name = "COURSE_NAME", length = 50)
	private String courseName;

	@Column(name = "DURATION", length = 50)
	private String duration;
	
	@Column(name="DESCRIPTION", length= 50)
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

	public String getKey() {
		return id + "";
	}
	
	@Override
	public String getValue() {
		return courseName;
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("courseName", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("courseId", courseId);
		return map;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "courseName";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return courseName;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "Course Name";
	}

}
