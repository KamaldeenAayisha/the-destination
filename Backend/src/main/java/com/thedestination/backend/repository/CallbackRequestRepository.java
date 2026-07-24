package com.thedestination.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thedestination.backend.entity.CallbackRequest;

@Repository
public interface CallbackRequestRepository
        extends JpaRepository<CallbackRequest, Long> {
}