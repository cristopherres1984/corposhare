package com.gemalto.gemdrive.webbackend.api;

import com.gemalto.gemdrive.webbackend.Dostep;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * @author adrzewiecki
 */
@WebMvcTest
@Import(Dostep.class)
@ExtendWith(SpringExtension.class)
class UserApiTest {

    @Autowired
    private MockMvc mvc;

    @Test
    void userEndpointProtected() throws Exception {
        mvc.perform(get("/api/user")).andExpect(status().isUnauthorized());
    }

    @Test
    void loginSucceeds() throws Exception {
        mvc.perform(get("/api/user").with(httpBasic("user", "pass"))).andExpect(status().isOk());
    }
}