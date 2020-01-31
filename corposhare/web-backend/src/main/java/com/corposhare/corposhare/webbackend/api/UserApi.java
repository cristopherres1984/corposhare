package com.gemalto.gemdrive.webbackend.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;


@RestController
public class UserApi {

    @GetMapping("/api/user")
    public Principal user(Principal user) {
        return user;
    }
}
