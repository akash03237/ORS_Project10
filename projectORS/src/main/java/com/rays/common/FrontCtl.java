package com.rays.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.rays.config.JwtTokenUtil;
import com.rays.service.JwtUserDetailsService;

import io.jsonwebtoken.ExpiredJwtException;

/**
 * Front controller verifies if user id logged in
 * 
 * @author Akash Soni
 * 				
 */
@Component
public class FrontCtl extends HandlerInterceptorAdapter {
	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		
		
		/* HttpSession session = request.getSession(); */
		String path = request.getServletPath();
		
		System.out.println(" Front Ctl Called " + path);
		/*
		 * System.out.println(" Session ID " + session.getId());
		 * System.out.println("Usercontext " + session.getAttribute("`"));
		 */

		/*if (!path.startsWith("/Auth/")) {
			System.out.println("inside if condition");
			//System.out.println(session.getAttribute("test")+"-------test____");
			if(session.getId()==null) {
				
				System.out.println("inside if usercontext null");
					
				
				  response.setContentType("application/json");
				  response.setStatus(HttpServletResponse.SC_OK);
				  
				  
				  
				  response.setHeader("Access-Control-Allow-Origin", "*");
				  response.setHeader("Access-Control-Allow-Credentials","true"); 
				  response.setHeader("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT");
				  response.setHeader("Access-Control-Allow-Headers",
				  "set-cookie,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
				  );
				  
				  PrintWriter out = response.getWriter(); 
				  out.print("{\"success\":\"false\",\"error\":\"OOPS! Your session has been expired\"}"
				  ); out.close();
				 System.out.println("going to return false ");
				 
				 return false;
			}
		}
		System.out.println("going to return true");
		return true;
	}

	
*/
		boolean pass= false;
		if (!path.startsWith("/Auth/")) {
		//	System.out.println("inside if condition");
			
		
	                                              	         System.out.println("JWTRequestFilter run success");
		final String requestTokenHeader = request.getHeader("Authorization");
	                                                      	System.out.println(requestTokenHeader+"]]]]]]]]]]---------------");
		String username = null;
		String jwtToken = null;
		// JWT Token is in the form "Bearer token". Remove Bearer word and get only the Token
		if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
			                                                  System.out.println("Inside token != null");
			jwtToken = requestTokenHeader.substring(7);
			try {
				username = jwtTokenUtil.getUsernameFromToken(jwtToken);
				                                             System.out.println(username+" user-------------");
			} catch (IllegalArgumentException e) {
				                                               System.out.println("Unable to get JWT Token");
			} catch (ExpiredJwtException e) {
				                                                System.out.println("JWT Token has expired");
			}
		} else {
		                                                 	System.out.println("JWT Token does not begin with Bearer String");
			
		}

		//Once we get the token validate it.
		if (username != null ) {
			                                                System.out.println("inside user != null");
			UserDetails userDetails = this.jwtUserDetailsService.loadUserByUsername(username);

			// if token is valid configure Spring Security to manually set authentication
			  
			if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {

			
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken
						.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				
				// After setting the Authentication in the context, we specify
				// that the current user is authenticated. So it passes the Spring Security Configurations successfully.
				
				
				
				
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
			pass = true;
		}
		}
		return pass;
	}
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		System.out.println("inside post handler");
		response.setHeader("Access-Control-Allow-Origin", "");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	}
}

