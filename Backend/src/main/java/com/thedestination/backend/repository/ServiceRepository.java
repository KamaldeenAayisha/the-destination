package com.thedestination.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.thedestination.backend.entity.Service;

public interface ServiceRepository extends JpaRepository<Service, Integer> {

}