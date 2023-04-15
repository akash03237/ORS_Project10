package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.CollegeDTO;
import com.rays.dto.CourseDTO;
import com.rays.form.CourseForm;
import com.rays.service.CourseServiceInt;



/**
 * @author Akash Soni
 *
 */
@RestController
@RequestMapping(value = "Course")
public class CourseCtl extends BaseCtl<CourseForm, CourseDTO, CourseServiceInt>  {
	
	/*
	 * @GetMapping("/preload") public ORSResponse preload() { ORSResponse res = new
	 * ORSResponse(true); return res; }
	 */
	@Autowired
	private CourseServiceInt courseService;
	
	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload");
		ORSResponse res = new ORSResponse(true);
		CourseDTO dto = new CourseDTO();
		
		List<DropdownList> list = courseService.search(dto, userContext);
		res.addResult("courseList", list);
		return res;
	}

}
