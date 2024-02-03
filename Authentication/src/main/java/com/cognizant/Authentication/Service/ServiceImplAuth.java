package com.cognizant.Authentication.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.Authentication.Exception.UserNotFoundException;
import com.cognizant.Authentication.Model.UserAuth;
import com.cognizant.Authentication.Repository.RepositoryAuth;
@Service
public class ServiceImplAuth implements ServiceAuth {
	@Autowired
   RepositoryAuth authRepository;
	
	@Override
    public boolean getAuthenticUser(String email, String password) throws UserNotFoundException {
        Optional<UserAuth> UserInfo=	authRepository.findByEmailAndPassword(email, password);
        if(UserInfo.isPresent())
            return true;
        else
            throw new UserNotFoundException("User Not Found");
    }
}


