package com.thedestination.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thedestination.backend.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}