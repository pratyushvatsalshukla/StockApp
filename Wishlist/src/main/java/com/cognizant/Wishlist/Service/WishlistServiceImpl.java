package com.cognizant.Wishlist.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.Wishlist.Exception.StockExistAlreadyException;
import com.cognizant.Wishlist.Exception.WishListNotFoundException;
import com.cognizant.Wishlist.Model.WishlistStock;
import com.cognizant.Wishlist.Repository.WishlistRepository;

@Service
public class WishlistServiceImpl implements WishlistService{
	 @Autowired
	    WishlistRepository wishlistRepository;
	    @Override
	    public WishlistStock addWishlistStock(WishlistStock wishlistStock) throws StockExistAlreadyException {
	        Optional<WishlistStock> existingProduct = wishlistRepository
	                .findByEmailAndSymbol(wishlistStock.getEmail(),wishlistStock.getSymbol());
	        if (existingProduct.isPresent()) {
	            throw new StockExistAlreadyException("Stock already exist");
	        }
	        else {
	            wishlistRepository.save(wishlistStock);
	            return wishlistStock;
	        }
	    }
	    
	    @Override
	    public List<WishlistStock> getAllWishlistStocks(String email){
	        List<WishlistStock> allStocks = wishlistRepository.findByEmail(email);
	        return allStocks;
	    }
	    @Override
		public String deleteWishlist(long wishlistid) {
			// TODO Auto-generated method stub
			wishlistRepository.deleteById(wishlistid);
			return "Wishlist Deleted";
		}
}
