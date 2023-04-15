package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.CourseDTO;
import com.rays.dto.StudentDTO;
import com.rays.dto.SubjectDTO;
import com.rays.form.StudentForm;
import com.rays.form.SubjectForm;
import com.rays.service.CourseServiceInt;
import com.rays.service.StudentServiceInt;
import com.rays.service.SubjectServiceInt;
/**
 * @author Akash Soni
 *
 */
@RestController
@RequestMapping(value = "Subject")
public class SubjectCtl extends BaseCtl<SubjectForm, SubjectDTO, SubjectServiceInt> {

	
	@Autowired
	private CourseServiceInt courseService;
	
	@Autowired
	private SubjectServiceInt subjectService;
	
	@GetMapping("/preload")
	public ORSResponse preload() {
		ORSResponse res = new ORSResponse(true);
		List<DropdownList> list = courseService.search(new CourseDTO(), userContext);
		List<DropdownList> list1= subjectService.search(new SubjectDTO(), userContext);
		res.addResult("subjectList",list1);
		res.addResult("courseList", list);
		return res;
	}
	
	@GetMapping("name/{name}")
	public ORSResponse get(@PathVariable String name) {
	ORSResponse res = new ORSResponse(true);
	SubjectDTO dto = baseService.findByName(name, userContext);
	System.out.println("Role " + dto);
	if (dto != null) {
	res.addData(dto);
	} else {
	res.setSuccess(false);
	res.addMessage("Record not found");
	}
	return res;
	}
}
