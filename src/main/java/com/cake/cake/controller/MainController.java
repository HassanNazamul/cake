package com.cake.cake.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cake.cake.data.UserRepository;
import com.cake.cake.model.Users;

@Controller
public class MainController {

    // Got the object of UserRepository class
    @Autowired
    UserRepository userRepository;

    // Home/landing page
    @RequestMapping("/")
    public String index() {
        return "index";
    }

    // login page and button is available on the home page Nav bar
    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    // register page and link is available on the login page (line:89 | login.html)
    // sending empty user object to be filled upon registratiob by the user in
    // registration
    // form (line: 57| register.html)
    @RequestMapping("/register")
    public String register(Model model) {
        model.addAttribute("user", new Users());
        return "register";
    }

    // debugging purpose
    @ResponseBody
    @RequestMapping("/signUpDone")
    public Users signUpDone(Model model, @ModelAttribute Users users) {
        userRepository.save(users);
        return users;
    }

}
