package com.thedestination.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thedestination.backend.entity.CallbackRequest;
import com.thedestination.backend.service.CallbackRequestService;

@RestController
@RequestMapping("/api/callback-requests")
@CrossOrigin(origins = "http://localhost:5173")
public class CallbackRequestController {

    private final CallbackRequestService callbackRequestService;

    public CallbackRequestController(
            CallbackRequestService callbackRequestService) {
        this.callbackRequestService = callbackRequestService;
    }

    // Create a callback request
    @PostMapping
    public ResponseEntity<CallbackRequest> createCallbackRequest(
            @RequestBody CallbackRequest callbackRequest) {

        CallbackRequest savedRequest =
                callbackRequestService.createCallbackRequest(callbackRequest);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedRequest);
    }

    // Get all callback requests
    @GetMapping
    public ResponseEntity<List<CallbackRequest>> getAllCallbackRequests() {

        List<CallbackRequest> callbackRequests =
                callbackRequestService.getAllCallbackRequests();

        return ResponseEntity.ok(callbackRequests);
    }

    // Get one callback request
    @GetMapping("/{id}")
    public ResponseEntity<CallbackRequest> getCallbackRequestById(
            @PathVariable Long id) {

        CallbackRequest callbackRequest =
                callbackRequestService.getCallbackRequestById(id);

        return ResponseEntity.ok(callbackRequest);
    }

    // Update callback request status
    @PutMapping("/{id}/status")
    public ResponseEntity<CallbackRequest> updateCallbackStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> request) {

        String status = request.get("status");

        if (status == null || status.isBlank()) {
            throw new IllegalArgumentException(
                    "Callback request status is required"
            );
        }

        CallbackRequest updatedRequest =
                callbackRequestService.updateCallbackStatus(id, status);

        return ResponseEntity.ok(updatedRequest);
    }

    // Delete callback request
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCallbackRequest(
            @PathVariable Long id) {

        callbackRequestService.deleteCallbackRequest(id);

        return ResponseEntity.noContent().build();
    }
}