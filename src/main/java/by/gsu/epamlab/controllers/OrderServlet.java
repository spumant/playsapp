package by.gsu.epamlab.controllers;

import by.gsu.epamlab.beans.Order;
import by.gsu.epamlab.dao.OrdersImpl;
import by.gsu.epamlab.exceptions.PlaysDAOException;
import by.gsu.epamlab.parsers.Json;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import static by.gsu.epamlab.constants.Constants.UTF_8;


public class OrderServlet extends HttpServlet {


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            request.setCharacterEncoding(UTF_8);
            response.setCharacterEncoding(UTF_8);

            String action = request.getParameter("action");

            switch (action) {

                case "orders":

                    String datePlaId = request.getParameter("datePlayId");
                    List<Order> orders;
                    orders = OrdersImpl.getOrdersByDatePlayId(Integer.parseInt(datePlaId));
                    String jsonPurchases = Json.getOrders(orders);

                    PrintWriter out = response.getWriter();
                    out.println(jsonPurchases);

                    break;
                case "saveOrder":

                    int datePlaIdForAddPlace = Integer.parseInt(request.getParameter("datePlayId"));
                    String place = request.getParameter("place");
                    Order order = new Order(datePlaIdForAddPlace,place);
                    OrdersImpl.addOrder(order);

                    break;
            }
        } catch (PlaysDAOException e) {
            throw new ServletException(e);
        }

    }
}
