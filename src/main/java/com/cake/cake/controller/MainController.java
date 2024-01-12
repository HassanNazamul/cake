package com.cake.cake.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

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

    // register page and link is available on the login page (line:89)
    @RequestMapping("/register")
    public String register() {
        return "register";
    }

}
