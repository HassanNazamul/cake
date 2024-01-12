package com.cake.cake.data;

import org.springframework.data.repository.CrudRepository;

import com.cake.cake.model.Users;

public interface UserRepository extends CrudRepository<Users, Integer> {

}
