package com.example.fakestore.model;

import jakarta.persistence.Id;

public class User {
    @Id
    private Long id;
    private String username;
    private String name;
    private String email;
}
