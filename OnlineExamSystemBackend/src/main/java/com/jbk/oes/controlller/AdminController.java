package com.jbk.oes.controlller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jbk.oes.modal.Question;
import com.jbk.oes.modal.User;
import com.jbk.oes.services.AdminService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@GetMapping("/getAllUsers")
	public List<User> getAllUsers() {
		return adminService.getAllUsers();
	}

	@PostMapping("/addQuestion")
	public ResponseEntity<Void> createExam(@RequestBody Question question) {

		System.err.println(question);

		return new ResponseEntity<>(HttpStatus.CREATED);

	}

	@PostMapping("/createExam")
	public ResponseEntity<Void> createExam(@RequestBody List<Question> questions) {

		Boolean status = adminService.createExam(questions);
		questions.forEach(t -> System.out.println(t));

		if (status) {
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} else {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		}

	}
	
	
	@DeleteMapping("/deleteUser/{username}")
	public void deleteUser(@PathVariable String username) {
		adminService.deleteUser(username);
	}

}
