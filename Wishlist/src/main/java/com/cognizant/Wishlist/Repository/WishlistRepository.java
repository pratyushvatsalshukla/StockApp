package com.cognizant.Wishlist.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.Wishlist.Exception.WishListNotFoundException;
import com.cognizant.Wishlist.Model.WishlistStock;
@Repository
public interface WishlistRepository extends JpaRepository<WishlistStock, Long>{
	Optional<WishlistStock> findByEmailAndName(String email, String name);
	List<WishlistStock> findByEmail(String email);
	


	
	
}
