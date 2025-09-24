package com.jupitters.jupittersshops.exceptions;

public class AlreadyExistsException extends RuntimeException {
    public AlreadyExistsException(String message) {
        super(message + " already exists!");
    }
}
