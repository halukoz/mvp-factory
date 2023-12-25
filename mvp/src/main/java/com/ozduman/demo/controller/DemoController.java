package com.ozduman.demo.controller;

import com.ozduman.demo.model.Person;
import com.ozduman.demo.model.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class DemoController {

    @PostMapping("/messages")
    public String getMessage(@RequestBody Person person) {
        return "Hello from docker! " + person.getFirstName() + ", " + person.getLastName() + ", " + person.getJob();
    }

    @GetMapping("/test")
    @ResponseBody
    public ResponseEntity<?>  getTestMessage() {

        return new ResponseEntity<>(new Test("Hello Ich bin Haluk"), HttpStatus.OK);
    }

}
