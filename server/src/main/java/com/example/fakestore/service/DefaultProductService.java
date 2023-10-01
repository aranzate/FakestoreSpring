package com.example.fakestore.service;

import com.example.fakestore.repository.ProductRepository;
import com.example.fakestore.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DefaultProductService implements ProductService {

    @Autowired
    private ProductRepository repository;

    @Override
    public List<Product> find() {
        return repository.findAllByOrderByIdAsc();
    }

    @Override
    public Optional<Product> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Product create(Product product) {
        return repository.save(product);
    }

    @Override
    public Product update(Long id, int quantity) {
        return repository.findById(id)
                .map(existingProduct -> {
                    existingProduct.setQuantity(quantity);
                    return repository.save(existingProduct);
                })
                .orElse(null);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
