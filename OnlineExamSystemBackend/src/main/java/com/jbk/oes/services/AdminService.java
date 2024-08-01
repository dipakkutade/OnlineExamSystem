package com.jbk.oes.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jbk.oes.dao.QuestionDAO;
import com.jbk.oes.dao.UserDAO;
import com.jbk.oes.modal.Question;
import com.jbk.oes.modal.User;

@Service
public class AdminService {

	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private QuestionDAO questionDAO;
	
	
	public List<User> getAllUsers() {
		return userDAO.getAllUsers();
	}


	public Boolean createExam(List<Question> questions) {
		
		Boolean status = questionDAO.createExam(questions);
		
		return status;
	}


	public void deleteUser(String username) {
		userDAO.deleteUser(username);		
	}
	
	 
}
