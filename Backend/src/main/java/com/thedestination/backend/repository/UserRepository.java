package com.thedestination.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.thedestination.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}