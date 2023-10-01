package com.example.fakestore.service;

import com.example.fakestore.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> find();
    Optional<Product> findById(Long id);
    Product create(Product product);
    Product update(Long id, int quantity);
    void delete(Long id);
}
