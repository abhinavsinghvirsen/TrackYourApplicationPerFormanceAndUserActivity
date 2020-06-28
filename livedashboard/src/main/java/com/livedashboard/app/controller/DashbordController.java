package com.livedashboard.app.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.livedashboard.app.controller.service.LiveDasbhordService;
import com.livedashboard.app.dto.UserActivityDto;
import com.livedashboard.app.utils.HttpReqUtils;

@RestController
//@CrossOrigin("http://localhost:8080")
public class DashbordController {
	@Autowired
	private SimpMessagingTemplate webSocket;
	
	@Autowired
	private LiveDasbhordService liveDasbhordService;
    
	String topic="/topic/userdashboard";
	

	
	@PostMapping("/userdatav")
	public String catchUserActivity(@RequestBody UserActivityDto userActivityDto) throws InterruptedException {		
		
		   System.out.println("-------------------------------"+HttpReqUtils.getClientIpAddressIfServletRequestExist());
		/*
		 * Process Data For DB BIG DATA OR influx time scale etc
		 * 
		 * 
		 * */
		    userActivityDto.setIp(HttpReqUtils.getClientIpAddressIfServletRequestExist());
			HashMap<String, List<UserActivityDto>> responseDataFrame=liveDasbhordService.dataFormationForLiveDashboard(userActivityDto);
			webSocket.convertAndSend(topic,responseDataFrame );
	    
		    return "Stastic Recived!";
	}

}
