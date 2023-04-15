package com.rays.ctl;

import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.common.attachment.AttachmentDTO;
import com.rays.common.attachment.AttachmentServiceInt;
import com.rays.dto.MarksheetDTO;
import com.rays.dto.RoleDTO;
import com.rays.dto.StudentDTO;
import com.rays.dto.UserDTO;
import com.rays.form.MarksheetForm;
import com.rays.service.MarksheetServiceInt;
import com.rays.service.RoleServiceInt;
import com.rays.service.StudentServiceInt;

/**
 * @author Akash Soni
 *
 */
@RestController
@RequestMapping(value = "Marksheet")
public class MarksheetCtl extends BaseCtl<MarksheetForm, MarksheetDTO, MarksheetServiceInt> {

	@Autowired
	private StudentServiceInt studentService;
	@Autowired
	private MarksheetServiceInt marksheetService;

	@Autowired
	AttachmentServiceInt attachmentService;

	@GetMapping("/preload")
	public ORSResponse preload() {
		ORSResponse res = new ORSResponse(true);
		List<StudentDTO> list = studentService.search(new StudentDTO(), userContext);
		res.addResult("studentList", list);
		List<DropdownList> mlist = marksheetService.search(new MarksheetDTO(), userContext);
		res.addResult("marksheetList", mlist);
		return res;
	}

	@GetMapping("rollno/{rollNo}")
	public ORSResponse rollNo(@PathVariable String rollNo) {
		ORSResponse res = new ORSResponse(true);
		MarksheetDTO dto = baseService.findByRollNo(rollNo, userContext);
		if (dto != null) {
			res.addData(dto);
		} else {
			res.setSuccess(false);
			res.addMessage("Record not found");
		}
		return res;
	}

	@PostMapping("/doc/{marksheetId}")
	public ORSResponse upload(@PathVariable Long marksheetId, @RequestParam(required = false) String description,
			@RequestParam("file") MultipartFile file, HttpServletRequest req) {

		AttachmentDTO doc = new AttachmentDTO(file);
		doc.setDescription(description);
		doc.setPath(req.getServletPath());
		doc.setUserId(marksheetId);

		Long pk = attachmentService.save(doc, userContext);

		ORSResponse res = new ORSResponse();
		res.setSuccess(true);
		res.addResult("docId", pk);

		return res;
	}

	/**
	 * Downloads user document
	 * 
	 * @param id
	 * @param response
	 */
	@GetMapping("/doc/{id}")
	public @ResponseBody void download(@PathVariable Long id, HttpServletResponse response) {

		AttachmentDTO attachmentDTO = attachmentService.findById(id, userContext);
		try {
			if (attachmentDTO != null) {
				response.setContentType(attachmentDTO.getType());
				OutputStream out = response.getOutputStream();
				out.write(attachmentDTO.getDoc());
				out.close();
			} else {
				response.getWriter().write("ERROR: File not found");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Uploads user profile picture of logged in user.
	 * 
	 * @param id
	 * @param file
	 * @return
	 */
	@PostMapping("/profilePic")
	public ORSResponse uploadPic(@RequestParam("file") MultipartFile file, HttpServletRequest req) {
		return uploadPic(userContext.getUserId(), file, req);
	}

	/**
	 * Uploads profile picture of given user id
	 * 
	 * @param userId
	 * @param file
	 * @param req
	 * @return
	 */
	@PostMapping("/profilePic/{userId}")
	public ORSResponse uploadPic(@PathVariable Long marksheetId, @RequestParam("file") MultipartFile file,
			HttpServletRequest req) {

		System.out.println("User ID id --------------Akash" + marksheetId);

		MarksheetDTO marksheetDTO = baseService.findById(marksheetId, userContext);

		AttachmentDTO doc = new AttachmentDTO(file);

		doc.setDescription("Profile picture");
		System.out.println(doc.getDescription() + "description");

		doc.setPath(req.getServletPath());
		System.out.println(doc.getPath() + "path-----Akash");
		doc.setUserId(marksheetId);
		System.out.println(doc.getUserId() + "id-----Akash");

		if (marksheetDTO.getImageId() != null && marksheetDTO.getImageId() > 0) {
			doc.setId(marksheetDTO.getImageId());
		}
		System.out.println("before calling save");
		Long imageId = attachmentService.save(doc, userContext);
		System.out.println("after save");
		// Update new image id
		if (marksheetDTO.getImageId() == null || marksheetDTO.getImageId() == 0) {
			marksheetDTO.setImageId(imageId);
			baseService.update(marksheetDTO, userContext);
		}

		ORSResponse res = new ORSResponse();
		res.setSuccess(true);
		res.addResult("imageId", imageId);

		return res;
	}

	@GetMapping("meritlist")
	public ORSResponse getMeritList() {
		System.out.println("getMeritList run on ctl");
		List<MarksheetDTO> list = baseService.getMeritList(userContext);
		ORSResponse res = new ORSResponse(true);
		res.addResult("list",list);
//		System.out.println("Merit list :: " + list);
		return res;
	}

}
