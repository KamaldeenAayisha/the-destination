package com.thedestination.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.thedestination.backend.entity.Service;
import com.thedestination.backend.repository.ServiceRepository;


@RestController
@RequestMapping("/services")
@CrossOrigin
public class ServiceController {


    @Autowired
    private ServiceRepository serviceRepository;


    @PostMapping("/add")
    public Service addService(@RequestBody Service service){

        return serviceRepository.save(service);

    }


    @GetMapping("/all")
    public List<Service> getAllServices(){

        return serviceRepository.findAll();

    }
}