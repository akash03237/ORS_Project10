
package com.rays.ctl;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.SessionFactory;
import org.hibernate.engine.jdbc.connections.spi.ConnectionProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.MarksheetDTO;
import com.rays.form.MarksheetForm;
import com.rays.service.MarksheetServiceInt;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;

/**
 * Jasper functionality Controller. Performs operation for Print pdf of
 * MarksheetMeriteList
 *
 * @author Mayank mishra
 */
/**
 * The Class JasperCtl.
 * @author Akash Soni
 */

@Transactional

@RestController
@RequestMapping(value = "Jasper")
public class JasperCtl extends BaseCtl<MarksheetForm, MarksheetDTO, MarksheetServiceInt>{

	/** The session factory. */
	
//	  @Autowired 
	  private SessionFactory sessionFactory=null;
	  
	 /** The context. */
	
	  @Autowired 
	  ServletContext context;
	  
	  @PersistenceContext
	  protected EntityManager entityManager;
	  
	 /**
		 * Display.
		 *
		 * @param request  the request
		 * @param response the response
		 * @throws JRException  the JR exception
		 * @throws SQLException the SQL exception
		 * @throws IOException  Signals that an I/O exception has occurred.
		 */
	  @GetMapping(value="/report",produces = {MediaType.APPLICATION_JSON_VALUE})
	public void display(HttpServletRequest request, HttpServletResponse response)
			throws JRException, SQLException, IOException {
		System.out.println("********************** Jasper Ctl*********************");
		ORSResponse res = new ORSResponse(true);
		String path = context.getRealPath("/resources/report/ReportMeritlist.jrxml");
		
		Connection con = null;
		JasperReport jasperReport = JasperCompileManager.compileReport(path);
		Map<String, Object> map = new HashMap<String, Object>();
		 this.sessionFactory =
				 entityManager.getEntityManagerFactory().unwrap(SessionFactory.class);
		con = sessionFactory.getSessionFactoryOptions().getServiceRegistry().getService(ConnectionProvider.class)
				.getConnection();
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, map, con);
		byte[] pdf = JasperExportManager.exportReportToPdf(jasperPrint);
		response.setContentType("application/pdf");
		response.getOutputStream().write(pdf);
		response.getOutputStream().flush();
		System.out.println("Thanks");
		//return MediaType.APPLICATION_JSON_VALUE;
	}

}
