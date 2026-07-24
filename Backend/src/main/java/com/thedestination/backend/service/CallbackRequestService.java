package com.thedestination.backend.service;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.thedestination.backend.entity.CallbackRequest;
import com.thedestination.backend.repository.CallbackRequestRepository;

@Service
public class CallbackRequestService {

    private static final Set<String> ALLOWED_STATUSES = Set.of(
            "PENDING",
            "CONTACTED",
            "COMPLETED",
            "CANCELLED"
    );

    private final CallbackRequestRepository callbackRequestRepository;

    public CallbackRequestService(
            CallbackRequestRepository callbackRequestRepository) {
        this.callbackRequestRepository = callbackRequestRepository;
    }

    // Create a callback request
    public CallbackRequest createCallbackRequest(
            CallbackRequest callbackRequest) {

        callbackRequest.setId(null);
        callbackRequest.setStatus("PENDING");

        return callbackRequestRepository.save(callbackRequest);
    }

    // Get all callback requests
    public List<CallbackRequest> getAllCallbackRequests() {
        return callbackRequestRepository.findAll();
    }

    // Get callback request by ID
    public CallbackRequest getCallbackRequestById(Long id) {
        return callbackRequestRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Callback request not found with ID: " + id
                        )
                );
    }

    // Update callback status
    public CallbackRequest updateCallbackStatus(
            Long id,
            String status) {

        CallbackRequest callbackRequest =
                getCallbackRequestById(id);

        String formattedStatus = status.trim().toUpperCase();

        if (!ALLOWED_STATUSES.contains(formattedStatus)) {
            throw new IllegalArgumentException(
                    "Invalid callback status: " + status
            );
        }

        callbackRequest.setStatus(formattedStatus);

        return callbackRequestRepository.save(callbackRequest);
    }

    // Delete callback request
    public void deleteCallbackRequest(Long id) {
        CallbackRequest callbackRequest =
                getCallbackRequestById(id);

        callbackRequestRepository.delete(callbackRequest);
    }
}