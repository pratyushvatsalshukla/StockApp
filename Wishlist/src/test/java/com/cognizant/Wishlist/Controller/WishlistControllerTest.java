//package com.cognizant.Wishlist.Controller;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.*;
//
//import java.util.Arrays;
//import java.util.List;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//
//import com.cognizant.Wishlist.Exception.StockExistAlreadyException;
//import com.cognizant.Wishlist.Model.WishlistStock;
//import com.cognizant.Wishlist.Service.WishlistService;
//
//public class WishlistControllerTest {
//
//    // Mocking the WishlistService
//    private WishlistService wishlistService = mock(WishlistService.class);
//
//    private WishlistController wishlistController = new WishlistController();
//
//    @Test
//    public void testAddWishlistStock_Success() throws StockExistAlreadyException {
//        // Arrange
//        WishlistStock wishlistStock = new WishlistStock();
//        wishlistStock.setEmail("test@example.com");
//
//        // Mocking the service to simulate a successful addition
//        doNothing().when(wishlistService).addWishlistStock(wishlistStock);
//
//        // Act
//        ResponseEntity<?> response = wishlistController.addWishlistStock(wishlistStock, "test@example.com");
//
//        // Assert
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//        assertEquals(wishlistStock, response.getBody());
//    }
//
////    @Test
////    public void testAddWishlistStock_Conflict() {
////        // Arrange
////        WishlistStock wishlistStock = new WishlistStock();
////        wishlistStock.setEmail("test@example.com");
////
////        // Mocking the service to simulate an existing stock conflict
////        doThrow(new StockExistAlreadyException("Stock already exists")).when(wishlistService)
////                .addWishlistStock(wishlistStock);
////
////        // Act
////        ResponseEntity<?> response = wishlistController.addWishlistStock(wishlistStock, "test@example.com");
////
////        // Assert
////        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
////        assertEquals("Stock already exists", response.getBody());
////    }
//
//    @Test
//    public void testGetAllWishlistByEmail_Success() {
//        // Arrange
//        String email = "test@example.com";
//        List<WishlistStock> wishlistStocks = Arrays.asList(new WishlistStock(), new WishlistStock());
//
//        // Mocking the service to simulate a successful retrieval
//        when(wishlistService.getAllWishlistStocks(email)).thenReturn(wishlistStocks);
//
//        // Act
//        ResponseEntity<?> response = wishlistController.getAllWishlistByEmail(email);
//
//        // Assert
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//        assertEquals(wishlistStocks, response.getBody());
//    }
//
//    @Test
//    public void testDeleteWishlist_Success() {
//        // Arrange
//        long wishlistId = 1L;
//
//        // Mocking the service to simulate a successful deletion
//        when(wishlistService.deleteWishlist(wishlistId)).thenReturn("Wishlist stock deleted successfully");
//
//        // Act
//        ResponseEntity<String> response = wishlistController.deleteWishlist(wishlistId);
//
//        // Assert
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//        assertEquals("Wishlist stock deleted successfully", response.getBody());
//    }
//
//    // Add more test cases as needed for different scenarios and edge cases.
//}
//
