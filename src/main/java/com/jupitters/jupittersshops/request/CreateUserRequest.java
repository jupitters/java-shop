package com.jupitters.jupittersshops.request;

import lombok.Data;

@Data
public class CreateUserRequest {
    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String password;
}
