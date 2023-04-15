package com.rays.ctl;

import java.util.Enumeration;
import java.util.LinkedHashSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.apache.tomcat.util.bcel.classfile.EnumElementValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rays.common.BaseCtl;
import com.rays.common.MenuItem;
import com.rays.common.ORSResponse;
import com.rays.common.UserContext;
import com.rays.common.attachment.AttachmentDTO;
import com.rays.common.attachment.AttachmentServiceInt;
import com.rays.config.JwtTokenUtil;
import com.rays.dto.UserDTO;
import com.rays.form.LoginForm;
import com.rays.form.UserForm;
import com.rays.form.UserRegistrationForm;

import com.rays.service.UserServiceInt;


/**
 * Login controller provides API for Sign Up, Sign In and Forgot password
 * operations
 * @author Akash Soni
 */
/**
 * @author hp
 *
 */
/**
 * @author hp
 *
 */
@RestController
@RequestMapping(value = "Auth")
public class LoginCtl extends BaseCtl<UserForm, UserDTO, UserServiceInt> {

	/**
	 * Finds user by login id
	 * 
	 * @param loginId
	 * @return
	 */

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserDetailsService jwtService;
	
	@Autowired
	AttachmentServiceInt attachmentService;

	@GetMapping("login/{loginId}")
	public ORSResponse get(@PathVariable String loginId) {
		ORSResponse res = new ORSResponse(true);
		UserDTO dto = baseService.findByLoginId(loginId, userContext);
		System.out.println("User " + dto);
		if (dto != null) {
			UserDTO userDTO = new UserDTO();
			userDTO.setFirstName(dto.getFirstName());
			userDTO.setLastName(dto.getLastName());
			userDTO.setLoginId(dto.getLoginId());
			res.addData(userDTO);
		} else {
			res.setSuccess(false);
			res.addMessage("Record not found");
		}
		return res;
	}
	
	
	
	

	@PostMapping("login")
	public ORSResponse login(@RequestBody @Valid LoginForm form, BindingResult bindingResult, HttpSession session,HttpServletRequest request)throws Exception {

		ORSResponse res = validate(bindingResult);

		if (!res.isSuccess()) {
			return res;
		}

		UserDTO dto = baseService.authenticate(form.getLoginId(), form.getPassword());
		if (dto == null) {
			System.out.println("dto == null ");
			res.setSuccess(false);
			res.addMessage("Invalid ID or Password");
		} else {	
			UserContext context = new UserContext(dto);
			
//			 session.setAttribute("userContext", context); 				
			
			session.setAttribute("test", dto.getFirstName()); 
			
			res.setSuccess(true);
			res.addData(dto);
			 res.addResult("jsessionid", session.getId()); 
			res.addResult("loginId", dto.getLoginId());
			res.addResult("role", dto.getRoleName());
			res.addResult("fname", dto.getFirstName());
			res.addResult("lname", dto.getLastName());
			
			/* System.out.println("jsessionid " + session.getId()); */
			System.out.println("Before calling userDetail authenticate");
			
			final UserDetails userDetails = jwtService.loadUserByUsername(form.getLoginId());
			
			final String token = jwtTokenUtil.generateToken(userDetails);
			
			res.addResult("token", token);
			return res;
			
		}
		
		return res;
	}
	

	/**
	 * Emails password to user
	 * 
	 * @return
	 */
	@GetMapping("fp/{login}")
	public ORSResponse forgotPassword(@PathVariable String login, HttpServletRequest request) {
		System.out.println("Forget password get run " + login);
		Enumeration<String> e = request.getHeaderNames();
		String key = null;
		while (e.hasMoreElements()) {
			key = e.nextElement();
			System.out.println(key + " = " + request.getHeader(key));
		}

		ORSResponse res = new ORSResponse(true);
		UserDTO dto = this.baseService.forgotPassword(login);
		if (dto == null) {
			res.setSuccess(false);
			res.addMessage("Invalid Login Id");
		} else {
			res.setSuccess(true);
			res.addMessage("Password has been sent to email id");
		}
		return res;
	}

	/**
	 * Register new user
	 * 
	 * @param form
	 * @param bindingResult
	 * @return
	 */
	@PostMapping("signUp")
	public ORSResponse signUp(@RequestBody @Valid UserRegistrationForm form, BindingResult bindingResult) {
		System.out.println("Sign Up Called");
		ORSResponse res = validate(bindingResult);

		if (!res.isSuccess()) {
			res.addMessage("Please fill following empty fields");
			return res;
		}

		UserDTO dto = baseService.findByLoginId(form.getLogin(), userContext);

		if (dto != null) {
			res.setSuccess(false);
			res.addMessage("Login Id already exists");
			return res;
		}

		dto = new UserDTO();
		dto.setFirstName(form.getFirstName());
		dto.setLastName(form.getLastName());
		dto.setLoginId(form.getLogin());
		dto.setEmail(form.getLogin());
		dto.setGender(form.getGender());
		dto.setDob(form.getDob());
		System.out.println(form.getDob() + "--->>>>>");
		dto.setPhone(form.getPhone());

		System.out.println(dto.getPhone() + "phone-->>>>>");
		dto.setPassword(form.getPassword());
		System.out.println(dto.getPassword() + "Password--------->>>>>>");
		dto.setStatus("Inactive");
		System.out.println(form.getPhone() + "phone--->>s");
		dto.setAlternateMobile(form.getAlternateMobile());
		System.out.println(dto.getAlternateMobile() + "alternate phone--->");
		dto.setRoleId(2L);

		baseService.register(dto);

		res.setSuccess(true);
		res.addMessage("User has been registered");
		return res;
	}

	@PostMapping("/profilePic/{userId}")
	public ORSResponse uploadPic(@PathVariable Long userId, @RequestParam("file") MultipartFile file,
			HttpServletRequest req) {

		System.out.println("User ID id --------------" + userId);

		UserDTO userDTO = baseService.findById(userId, userContext);

		AttachmentDTO doc = new AttachmentDTO(file);

		doc.setDescription("Profile picture");
		System.out.println(doc.getDescription() + "description");

		doc.setPath(req.getServletPath());
		System.out.println(doc.getPath() + "path-----");
		doc.setUserId(userId);
		System.out.println(doc.getUserId() + "id-----");

		if (userDTO.getImageId() != null && userDTO.getImageId() > 0) {
			doc.setId(userDTO.getImageId());
		}
		System.out.println("before calling save");
		Long imageId = attachmentService.save(doc, userContext);
		System.out.println("after save");
		// Update new image id
		if (userDTO.getImageId() == null || userDTO.getImageId() == 0) {
			userDTO.setImageId(imageId);
			baseService.update(userDTO, userContext);
		}

		ORSResponse res = new ORSResponse();
		res.setSuccess(true);
		res.addResult("imageId", imageId);

		return res;
	}

	@GetMapping("menu")
	public ORSResponse menu(HttpSession session) {

		LinkedHashSet<MenuItem> menuBar = new LinkedHashSet<MenuItem>();

		MenuItem std = new MenuItem("Student", "/student");
		std.addSubmenu("Add Student", "/student");
		std.addSubmenu("Student List", "/studentlist");
		menuBar.add(std);

		MenuItem coll = new MenuItem("College", "/college");
		coll.addSubmenu("Add College", "/college");
		coll.addSubmenu("College List", "/collegelist");
		menuBar.add(coll);

		MenuItem mess = new MenuItem("Message", "/message");
		mess.addSubmenu("Add Message", "/message");
		mess.addSubmenu("Message List", "/messagelist");
		menuBar.add(mess);

		MenuItem user = new MenuItem("User", "/user");
		user.addSubmenu("Add User", "/user");
		user.addSubmenu("User List", "/userlist");
		menuBar.add(user);

		MenuItem marksheet = new MenuItem("Marksheet", "/marksheet");
		marksheet.addSubmenu("Add Marksheet", "/marksheet");
		marksheet.addSubmenu("Marksheet List", "/marksheetlist");
		marksheet.addSubmenu("Marksheet Merit List", "/marksheetmeritlist");
		marksheet.addSubmenu("Get Marksheet", "/getmarksheet");
		menuBar.add(marksheet);

		MenuItem role = new MenuItem("Role", "/role");
		role.addSubmenu("Add Role", "/role");
		role.addSubmenu("User Role", "/rolelist");
		menuBar.add(role);

		MenuItem course = new MenuItem("Course", "/course");
		role.addSubmenu("Add Course", "/course");
		role.addSubmenu("Course List", "/courselist");
		menuBar.add(course);

		MenuItem faculty = new MenuItem("Faculty", "/faculty");
		faculty.addSubmenu("Add Faculty", "/faculty");
		faculty.addSubmenu("Faculty List", "/facultylist");
		menuBar.add(faculty);

		MenuItem timetable = new MenuItem("TimeTable", "/timetable");
		timetable.addSubmenu("Add TimeTable", "/timetable");
		timetable.addSubmenu("TimeTable List", "/timeTablelist");
		menuBar.add(timetable);

		MenuItem subject = new MenuItem("Subject", "/subject");
		subject.addSubmenu("Add Subject", "/subject");
		subject.addSubmenu("Subject List", "/subjectlist");
		menuBar.add(subject);

		MenuItem current = new MenuItem("Current", "/current");
		current.addSubmenu("My Profile", "/myprofile");
		current.addSubmenu("Change Password", "/changepassword");
		current.addSubmenu("Java Doc", "");
		current.addSubmenu("Log out", "");
		menuBar.add(current);

		ORSResponse res = new ORSResponse(true);
		res.addData(menuBar);
		res.setSuccess(true);
		return res;
	}

}
