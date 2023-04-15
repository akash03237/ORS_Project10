package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.CourseDTO;
import com.rays.dto.SubjectDTO;
import com.rays.dto.TimeTableDTO;
import com.rays.form.TimeTableForm;
import com.rays.service.CourseServiceInt;
import com.rays.service.SubjectServiceInt;
import com.rays.service.TimeTableServiceInt;
/**
 * @author Akash Soni
 *
 */
@RestController
@RequestMapping(value = "TimeTable")
public class TimeTableCtl extends BaseCtl<TimeTableForm, TimeTableDTO, TimeTableServiceInt>  {

	@Autowired
	private CourseServiceInt courseService;
	
	
	@Autowired
	private SubjectServiceInt subjectService;
	
	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("preload start");
	ORSResponse res = new ORSResponse(true);
	List<CourseDTO> list = courseService.search(new CourseDTO(), userContext);
	List<SubjectDTO> list1= subjectService.search(new SubjectDTO(), userContext);
	res.addResult("courseList", list);
	res.addResult("subjectList", list1);
	System.out.println("preloaad end here --------");
	return res;
	}
}
