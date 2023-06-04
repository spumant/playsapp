package by.gsu.epamlab.dao;

import by.gsu.epamlab.beans.Order;
import by.gsu.epamlab.exceptions.PlaysDAOException;
import by.gsu.epamlab.managers.ConnectionManager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static by.gsu.epamlab.constants.Constants.*;


public class OrdersImpl {

    public static List<Order> getOrdersByDatePlayId(int datePlayId) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            List<Order> orders = new ArrayList<>();
            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(SELECT_ORDER_BY_DATEPLAY_ID);
            preparedStatement.setInt(ONE, datePlayId);

            try (ResultSet result = preparedStatement.executeQuery()) {

                while (result.next()) {

                    Order order = new Order(result.getString(ONE));

                    orders.add(order);
                }
            }

            return orders;
        } catch (SQLException e) {
            throw new PlaysDAOException("get all failed! ", e);
        } finally {
            try {
                ConnectionManager.closeStatement(preparedStatement);
                ConnectionManager.closeConnection(connection);
            } catch (PlaysDAOException e) {
                e.printStackTrace();
            }
        }

    }

    public static void addOrder(Order order) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(INSERT_ORDERS);
            preparedStatement.setInt(ONE, order.getDateplayId());
            preparedStatement.setString(TWO, order.getPlace());
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            throw new PlaysDAOException("add failed! ", e);
        } finally {
            try {
                ConnectionManager.closeStatement(preparedStatement);
                ConnectionManager.closeConnection(connection);
            } catch (PlaysDAOException e) {
                e.printStackTrace();
            }
        }
    }
}
