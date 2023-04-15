package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.common.attachment.AttachmentServiceInt;
import com.rays.dto.CollegeDTO;
import com.rays.dto.CourseDTO;
import com.rays.dto.FacultyDTO;

import com.rays.dto.SubjectDTO;
import com.rays.form.FacultyForm;
import com.rays.service.CollegeServiceInt;
import com.rays.service.CourseServiceInt;
import com.rays.service.FacultyServiceInt;

import com.rays.service.SubjectServiceInt;


/**
 * @author Akash Soni
 *
 */
@RestController
@RequestMapping(value = "Faculty")
public class FacultyCtl extends BaseCtl<FacultyForm, FacultyDTO, FacultyServiceInt> {
	

	@Autowired
	private CourseServiceInt courseService;
	
	@Autowired
	private SubjectServiceInt subjectService;
	
	@Autowired
	private CollegeServiceInt collegeService;

	@GetMapping("/preload")
	public ORSResponse preload() {

	System.out.println("preload of facultyctl...........");
	ORSResponse res = new ORSResponse(true);
	List<DropdownList> list = courseService.search(new CourseDTO(), userContext);
	List<DropdownList> list1= subjectService.search(new SubjectDTO(), userContext);
	List<DropdownList> list2= collegeService.search(new CollegeDTO(), userContext);
	res.addResult("courseList", list);
	res.addResult("subjectList", list1);
	res.addResult("collegeList", list2);
	//System.out.println(list1+"list1...........");
	System.out.println(res+"...........>>");
	// System.out.println(list+" "+list1+" "+list2+"...........>>");
	return res;
	}
}
