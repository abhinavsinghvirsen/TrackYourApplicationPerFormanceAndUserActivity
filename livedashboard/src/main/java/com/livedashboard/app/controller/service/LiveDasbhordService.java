package com.livedashboard.app.controller.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.livedashboard.app.dto.UserActivityDto;

@Service
public class LiveDasbhordService {
	
	
	public static HashMap<String, List<UserActivityDto>> preparedData=new HashMap();
	
	public HashMap<String, List<UserActivityDto>> dataFormationForLiveDashboard(UserActivityDto userActivityDto) {
		
		
	 if(preparedData.size()>0 &&  preparedData.containsKey(userActivityDto.getService())) {			
			
			List<UserActivityDto>  ls=preparedData.get(userActivityDto.getService());
			
			ls.add(userActivityDto);		
			
		}else {
			
			List<UserActivityDto>  ls=new ArrayList();	
			ls.add(userActivityDto);
			preparedData.put(userActivityDto.getService(), ls);		
		}	
		
		return preparedData;
		
		
	}

}
