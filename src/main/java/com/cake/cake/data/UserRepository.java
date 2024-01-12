package com.cake.cake.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cake.cake.model.Users;

@Repository
public interface UserRepository extends CrudRepository<Users, Integer> {

}
