package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ServiceResponse;

@RestController
public class AllDataController {

	
	@GetMapping("/getVeg")
	public ResponseEntity<Object> getVegetables() {
		ArrayList<String> vegList = new ArrayList<String>();
		vegList.add("potato");
		vegList.add("tomato");
		vegList.add("onions");
	    
		ServiceResponse<Object> response = new ServiceResponse<Object>("success" ,vegList);
		return new ResponseEntity<Object>(vegList , HttpStatus.OK);
		
	}
	
	@GetMapping("/getSweets")
	public ResponseEntity<Object> getSweets() {
		ArrayList<String> vegList = new ArrayList<String>();
		vegList.add("laddu");
		vegList.add("kaju katli");
		vegList.add("rasogola");
	    
		ServiceResponse<Object> response = new ServiceResponse<Object>("success" ,vegList);
		return new ResponseEntity<Object>(vegList , HttpStatus.OK);
		
	}
	
	@GetMapping("/getGroceries")
	public ResponseEntity<Object> getGroceries() {
		ArrayList<String> vegList = new ArrayList<String>();
		vegList.add("soya");
		vegList.add("pea");
		vegList.add("daal");
	    
		ServiceResponse<Object> response = new ServiceResponse<Object>("success" ,vegList);
		return new ResponseEntity<Object>(vegList , HttpStatus.OK);
		
	}
	
	@GetMapping("/getFlowers")
	public ResponseEntity<Object> getFlowers() {
		ArrayList<String> vegList = new ArrayList<String>();
		vegList.add("lotus");
		vegList.add("rose");
		vegList.add("jasmine");
	    
		ServiceResponse<Object> response = new ServiceResponse<Object>("success" ,vegList);
		return new ResponseEntity<Object>(vegList , HttpStatus.OK);
		
	}
}
