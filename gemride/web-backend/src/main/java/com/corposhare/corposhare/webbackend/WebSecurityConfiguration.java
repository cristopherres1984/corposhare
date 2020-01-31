package com.gemalto.gemdrive.webbackend;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

/**
 * @author adrzewiecki
 */
@EnableWebSecurity
@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http
                .httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers("/index.html", "/", "/home", "/login").permitAll()
                .anyRequest().authenticated()
                .and()
                .csrf()
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
        // @formatter:on
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers("/**js", "/**css");
    }

    // TODO make in memory users work
    // @Override
    // protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    //     // @formatter:off
    //     auth.inMemoryAuthentication()
    //             .withUser("Arek").password("pass").roles("user").and()
    //             .withUser("Łukasz").password("pass").roles("user");
    //     // @formatter:on
    // }
}
