package com.thedestination.backend.service;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.thedestination.backend.entity.Booking;
import com.thedestination.backend.repository.BookingRepository;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    private static final Set<String> ALLOWED_STATUSES = Set.of(
            "PENDING",
            "CONTACTED",
            "CONFIRMED",
            "COMPLETED",
            "CANCELLED"
    );

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Booking createBooking(Booking booking) {
        booking.setId(null);
        booking.setStatus("PENDING");

        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Booking not found with ID: " + id
                        )
                );
    }

    public Booking updateBookingStatus(Long id, String status) {
        Booking booking = getBookingById(id);

        String formattedStatus = status.trim().toUpperCase();

        if (!ALLOWED_STATUSES.contains(formattedStatus)) {
            throw new IllegalArgumentException(
                    "Invalid booking status: " + status
            );
        }

        booking.setStatus(formattedStatus);

        return bookingRepository.save(booking);
    }

    public void deleteBooking(Long id) {
        Booking booking = getBookingById(id);
        bookingRepository.delete(booking);
    }
}