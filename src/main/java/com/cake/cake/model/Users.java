package com.cake.cake.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Users {

    @Id
    @GeneratedValue
    private int id;

    private String fname;

    private String lname;

    private String email;

    private String password;
}
