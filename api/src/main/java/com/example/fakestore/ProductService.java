package com.example.fakestore;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> find();
    Optional<Product> findById(Long id);
    Product create(Product product);
    Product update(Long id, int quantity);
    void delete(Long id);
}
