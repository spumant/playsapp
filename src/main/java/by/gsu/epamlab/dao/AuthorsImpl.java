package by.gsu.epamlab.dao;

import by.gsu.epamlab.beans.Author;
import by.gsu.epamlab.exceptions.PlaysDAOException;
import by.gsu.epamlab.managers.ConnectionManager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static by.gsu.epamlab.constants.Constants.*;


public class AuthorsImpl {

    public static List<Author> getAuthors() throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            List<Author> authors = new ArrayList<>();
            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(SELECT_AUTHORS);

            try (ResultSet result = preparedStatement.executeQuery()) {

                while (result.next()) {

                    Author author = new Author(result.getInt(ONE), result.getString(TWO), result.getString(THREE));

                    authors.add(author);
                }
            }
            return authors;

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

    public static void delete(int id) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(DELETE_AUTHOR);

            preparedStatement.setInt(ONE, id);

            int count = preparedStatement.executeUpdate();
            if (count != ONE) {
                throw new PlaysDAOException("delete more then 1 record: " + count);

            }
        } catch (SQLException e) {
            throw new PlaysDAOException("delete failed! ", e);
        } finally {
            try {
                ConnectionManager.closeStatement(preparedStatement);
                ConnectionManager.closeConnection(connection);
            } catch (PlaysDAOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void add(Author author) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(INSERT_AUTHOR);

            preparedStatement.setString(ONE, author.getName());
            preparedStatement.setString(TWO, author.getInfo());

            int count = preparedStatement.executeUpdate();
            if (count != ONE) {
                throw new PlaysDAOException("add more then 1 record: " + count);
            }
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

    public static Author getById(int id) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        Author author = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(SELECT_AUTHOR_BY_ID);
            preparedStatement.setInt(ONE, id);

            try (ResultSet rs = preparedStatement.executeQuery()) {

                while (rs.next()) {
                    author = new Author(rs.getInt(ONE), rs.getString(TWO), rs.getString(THREE));
                }
            }

            return author;

        } catch (SQLException e) {
            throw new PlaysDAOException("get all byId failed! ", e);
        } finally {
            try {
                ConnectionManager.closeStatement(preparedStatement);
                ConnectionManager.closeConnection(connection);
            } catch (PlaysDAOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void update(Author author) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(UPDATE_AUTHOR);

            preparedStatement.setString(ONE, author.getName());
            preparedStatement.setString(TWO, author.getInfo());
            preparedStatement.setInt(THREE, author.getId());

            int count = preparedStatement.executeUpdate();
            if (count != ONE) {
                throw new PlaysDAOException("update more then 1 record: " + count);
            }
        } catch (SQLException e) {
            throw new PlaysDAOException("update failed! ", e);
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
