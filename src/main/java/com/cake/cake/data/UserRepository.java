package com.cake.cake.data;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.cake.cake.model.Users;

@RepositoryRestResource(path = "users")
public interface UserRepository extends CrudRepository<Users, Integer> {

    // To get User email using Rest API CAll
    @RestResource(path = "email", rel = "email")
    @Query("SELECT new com.cake.cake.data.UserEmailDTO(u.email) FROM Users u WHERE u.email = :value")
    UserEmailDTO findByEmail(@Param("value") String email);
}
