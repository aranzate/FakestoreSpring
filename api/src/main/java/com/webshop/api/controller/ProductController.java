package com.webshop.api.controller;

import com.webshop.api.model.Product;
import com.webshop.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public String add(@RequestBody Product product) {
        productService.saveProduct(product);
        return "Product successfully added.";
    }
    @GetMapping("/getAll")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
}
