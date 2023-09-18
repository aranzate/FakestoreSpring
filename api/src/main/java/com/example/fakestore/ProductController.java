package com.example.fakestore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    @Autowired
    private DefaultProductService service;

    @GetMapping("/product")
    public List<Product> find() {
        return service.find();
    }

    @GetMapping("/product/{id}")
    public Optional<Product> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping("/product")
    @ResponseStatus(HttpStatus.CREATED)
    public Product create(@RequestBody Product product) {
        return service.create(product);
    }

    @PutMapping("/product/{id}")
    public Product update(@PathVariable Long id, @RequestBody Map<String, Object> payload) {
        return service.update(id, (int) payload.get("quantity"));
    }

    @DeleteMapping("/product/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
