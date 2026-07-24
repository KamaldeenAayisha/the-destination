package com.thedestination.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.thedestination.backend.entity.Booking;
import com.thedestination.backend.repository.BookingRepository;


@RestController
@RequestMapping("/bookings")
@CrossOrigin
public class BookingController {


    @Autowired
    private BookingRepository bookingRepository;


    @PostMapping("/create")
    public Booking createBooking(@RequestBody Booking booking){

        booking.setStatus("PENDING");

        return bookingRepository.save(booking);
    }


    @GetMapping("/all")
    public List<Booking> getBookings(){

        return bookingRepository.findAll();
    }

}