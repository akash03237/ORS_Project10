package com.rays.common;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.rays.dto.MarksheetDTO;
import com.rays.dto.UserDTO;

/**
 * Base controller class contains get, search, save, delete REST APIs
 * 
 * @author Akash Soni
 */
public abstract class BaseCtl<F extends BaseForm, T extends BaseDTO, S extends BaseServiceInt<T>> {

	/**
	 * Form operations
	 */
	protected static final String OP_SAVE = "Save";
	protected static final String OP_NEW = "New";
	protected static final String OP_DELETE = "Delete";
	protected static final String OP_CANCEL = "Cancel";
	protected static final String OP_ERROR = "Error";
	protected static final String OP_NEXT = "Next";
	protected static final String OP_PREVIOUS = "Previous";
	protected static final String OP_LOGOUT = "Logout";
	protected static final String OP_GO = "Go";
	protected static final String OP_GET = "Get";

	@Autowired
	protected S baseService;

	@Value("${page.size}")
	private int pageSize = 0;

	/**
	 * Contains context of logged-in user
	 */
	protected UserContext userContext = null;
	/**
	 * Get user context from session
	 * 
	 * @param session
	 */
	@ModelAttribute
	public void setUserContext(HttpSession session) {
		System.out.println("inside setUserContext --");
		userContext = (UserContext) session.getAttribute("userContext");
		if (userContext == null) {
			UserDTO dto = new UserDTO();
			dto.setLoginId("root@sunilos.com");
			dto.setFirstName("demo firstName");
			dto.setLastName("demo lastName");
			dto.setOrgId(0L);
			dto.setRoleId(1L);
			dto.setOrgName("root");
			userContext = new UserContext(dto);
		}

	}

	/**
	 * Default get mapping
	 * 
	 * @return
	 */
	@GetMapping
	public ORSResponse get() {
		System.out.println("BaseCtl Get() method run");
		ORSResponse res = new ORSResponse(true);
		res.addData("I am okay " + this.getClass() + " --" + new Date());
		return res;
	}

	/**
	 * Get entity by primary key ID
	 * 
	 * @param id
	 * @return
	 */
	@GetMapping("get/{id}")
	public ORSResponse get(@PathVariable long id) {
		System.out.println("BaseCtl Get() method run.......Akash");
		ORSResponse res = new ORSResponse(true);
		T dto = baseService.findById(id, userContext);
		if (dto != null) {
			res.addData(dto);
		} else {

			res.setSuccess(false);
			//res.addMessage("Record not found");
		}
		return res;
	}

	/**
	 * Delete entity by primary key ID
	 * 
	 * @param id
	 * @return
	 */
	@GetMapping("delete/{id}")
	public ORSResponse delete(@PathVariable long id) {
		System.out.println("BaseCtl Delete() method run........Akash");
		ORSResponse res = new ORSResponse(true);
		try {
			T dto = baseService.delete(id, userContext);
			res.addData(dto);
			System.out.println("Record Deleted Successfully");
		} catch (Exception e) {
			res.setSuccess(false);
			res.addMessage(e.getMessage());
		}
		return res;
	}

	@PostMapping("deleteMany/{ids}")
	public ORSResponse deleteMany(@PathVariable String[] ids, @RequestParam("pageNo") String pageNo,
			@RequestBody F form) {
		System.out.println("BaseCtl DeleteMany() method....Akash... run");
		ORSResponse res = new ORSResponse(true);
		try {

			// System.out.println("deleteMany Page No is ******---" + pageNo);

			for (String id : ids) {
				System.out.println("Records To be Deleted :: " + id);
				baseService.delete(Long.parseLong(id), userContext);

			}
			T dto = (T) form.getDto();
			// System.out.println("dto ::" + dto.getClass());
			// if(dto!=null)

			List<T> list = baseService.search(dto, Integer.parseInt(pageNo), pageSize, userContext);

			// System.out.println("List ::" + list);

//			for (T id : list) {
//				System.out.println("Records  :: " + id.toString());				
//			}

			res.addData(baseService.search(dto, Integer.parseInt(pageNo), pageSize, userContext));
			res.setSuccess(true);
			res.addMessage("Records Deleted Successfully");
			System.out.println("Records Deleted Successfully by Akash");

		} catch (Exception e) {
			res.setSuccess(false);
			res.addMessage(e.getMessage());
		}
		return res;
	}

	/**
	 * Search entities by form attributes
	 * 
	 * @param form
	 * @return
	 */
	@RequestMapping(value = "/search", method = { RequestMethod.GET, RequestMethod.POST })
	public ORSResponse search(@RequestBody F form) {

		System.out.println("BaseCtl Search Running");
		// Calculate next page number
		String operation = form.getOperation();
		int pageNo = form.getPageNo();

		if (OP_NEXT.equals(operation)) {
			pageNo++;
		} else if (OP_PREVIOUS.equals(operation)) {
			pageNo--;
		}

		// 0 is first page index
		pageNo = (pageNo < 0) ? 0 : pageNo;
		form.setPageNo(pageNo);
		System.out.println("Page No is :: " + pageNo + "   Page size is :: " + pageSize);
		T dto = (T) form.getDto();
		ORSResponse res = new ORSResponse(true);
		res.addData(baseService.search(dto, pageNo, pageSize, userContext));
		return res;
	}

	@RequestMapping(value = "/search/{pageNo}", method = { RequestMethod.GET, RequestMethod.POST })
	public ORSResponse search(@RequestBody F form, @PathVariable int pageNo) {

		/* Called on loading, next, previous and search operation * */
		System.out.println("BaseCtl Search method with pageNo :: " + pageNo + "   Page size is :: " + pageSize);

		// 0 is first page index
		pageNo = (pageNo < 0) ? 0 : pageNo;

		System.out.println("Operation :: " + form.getOperation());

		T dto = (T) form.getDto();

		ORSResponse res = new ORSResponse(true);

		res.addData(baseService.search(dto, pageNo, pageSize, userContext));

		List nextList = baseService.search(dto, pageNo + 1, pageSize, userContext);
		res.addResult("nextList", nextList.size());
		return res;
	}

	@PostMapping("/save")
	public ORSResponse save(@Valid @RequestBody F form, BindingResult bindingResult) {
		System.out.println("228save() run in BaseCtl :: +Akash " + form);
		ORSResponse res = validate(bindingResult);

		if (res.isSuccess() == false) {
			return res;
		}

		try {
			T dto = (T) form.getDto();
			System.out.println("237----------->" + dto);
			if (dto.getId() != null && dto.getId() > 0) {
				baseService.update(dto, userContext);
			} else {
			
				System.out.println("before calling add of baseservice");
				
				
				if (dto.getUniqueKey()!=null && !dto.getUniqueKey().equals("")) {
				
					System.out.println("243----------->" + dto);
					
					
					T existDto = (T) baseService.findByUniqueKey(dto.getUniqueKey(), dto.getUniqueValue(),
							userContext);
					if (existDto != null) {
						System.out.println("247----------->" + existDto);
					
						res.addMessage(dto.getLabel() + " already exist");
						res.setSuccess(false);
						return res;
					}
				}

				baseService.add(dto, userContext);
			}
			res.addData(dto.getId());
		} catch (Exception e) {
			res.setSuccess(false);
			res.addMessage(e.getMessage());
			e.printStackTrace();
		}
		return res;
	}

	/**
	 * Gets input error messages and put into REST response
	 * 
	 * @param bindingResult
	 * @return
	 */
	public ORSResponse validate(BindingResult bindingResult) {
		ORSResponse res = new ORSResponse(true);
		System.out.println("inside the validate method of baseCtl.Akash");
		if (bindingResult.hasErrors()) {

			res.setSuccess(false);
			

			Map<String, String> errors = new HashMap<String, String>();

			List<FieldError> list = bindingResult.getFieldErrors();
			// Lambda expression Java 8 feature
			list.forEach(e -> {
				errors.put(e.getField(), e.getDefaultMessage());
				
				                                                    System.out.println(".....validate");
				                                                    System.out.println("Field :: " + e.getField() + "  Message :: " + e.getDefaultMessage());
			
			});
			res.addInputErrors(errors);
		}
		return res;

	}

}
