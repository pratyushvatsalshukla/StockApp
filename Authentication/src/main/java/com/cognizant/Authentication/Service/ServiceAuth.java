package com.cognizant.Authentication.Service;

import com.cognizant.Authentication.Exception.UserNotFoundException;

public interface ServiceAuth {
	boolean getAuthenticUser(String email,String password) throws UserNotFoundException;
	
	
}
