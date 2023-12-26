package com.ozduman.demo.controller;

import com.ozduman.demo.model.Person;
import com.ozduman.demo.model.Test;
import com.ozduman.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DemoController {

    @Autowired
    private PersonService personService;

    @PostMapping("/messages")
    public String getMessage(@RequestBody Person person) {
        return "Hello from docker! " + person.getFirstName() + ", " + person.getLastName() + ", " + person.getJob();
    }

    @GetMapping("/test")
    public ResponseEntity<?>  getTestMessage() {

        return new ResponseEntity<>(new Test("Hello Ich bin Haluk"), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Person>>  getAll() {

        return new ResponseEntity<>(personService.findAll(), HttpStatus.OK);
    }

}
