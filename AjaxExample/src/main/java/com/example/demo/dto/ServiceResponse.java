package com.example.demo.dto;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ServiceResponse<T> {
public ServiceResponse(String string, ArrayList<String> vegList) {
		System.out.println("success");
	}
}
