package com.livedashboard.app.dto;

import java.sql.Timestamp;

public class UserActivityDto {

	String url;
	
	String browser;
	
	String os;
	
	String pageview;

	String service;
	
	Timestamp ts;
	
	String reponsedata;
	
	String ip;
	
	/**
	 * @return the ip
	 */
	public String getIp() {
		return ip;
	}

	/**
	 * @param ip the ip to set
	 */
	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public Timestamp getTs() {
		return ts;
	}

	public void setTs(Timestamp ts) {
		this.ts = ts;
	}

	public String getReponsedata() {
		return reponsedata;
	}

	public void setReponsedata(String reponsedata) {
		this.reponsedata = reponsedata;
	}
	public String getBrowser() {
		return browser;
	}

	public void setBrowser(String browser) {
		this.browser = browser;
	}
	public String getOs() {
		return os;
	}

	public void setOs(String os) {
		this.os = os;
	}
	public String getPageview() {
		return pageview;
	}

	public void setPageview(String pageview) {
		this.pageview = pageview;
	}
	

}
