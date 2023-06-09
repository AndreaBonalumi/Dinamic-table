package com.example.alphashop.repository.impl;

import com.example.alphashop.domain.Car;
import com.example.alphashop.repository.mapper.CarMapper;
import com.example.alphashop.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CarRepositoryImpl implements CarRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public List<Car> selAll() {

        String sql = "select * from Car";
        List<Car> cars = jdbcTemplate.query(sql, new CarMapper());
        return cars;
    }

    @Override
    public List<Car> selAvailable() {
        return null;
    }

    @Override
    public void insertCar(Car car) {

    }

    @Override
    public void deleteCar(int id) {

    }
}
