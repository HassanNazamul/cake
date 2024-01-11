package com.cake.cake.data;

import org.springframework.data.repository.CrudRepository;

import com.cake.cake.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
