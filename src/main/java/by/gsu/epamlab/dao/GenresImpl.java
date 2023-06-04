package by.gsu.epamlab.dao;


import by.gsu.epamlab.beans.Genre;
import by.gsu.epamlab.exceptions.PlaysDAOException;
import by.gsu.epamlab.managers.ConnectionManager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static by.gsu.epamlab.constants.Constants.*;

public class GenresImpl {

    public static List<Genre> getGenres() throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            List<Genre> genres = new ArrayList<>();
            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(SELECT_GENRES);

            try (ResultSet result = preparedStatement.executeQuery()) {

                while (result.next()) {

                    Genre genre = new Genre(result.getInt(ONE), result.getString(TWO));

                    genres.add(genre);
                }
            }

            return genres;

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
            preparedStatement = connection.prepareStatement(DELETE_GENRE);

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

    public static void add(Genre genre) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(INSERT_GENRE);

            preparedStatement.setString(ONE, genre.getName());

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


    public static Genre getById(int id) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        Genre genre = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(SELECT_GENRE_BY_ID);
            preparedStatement.setInt(ONE, id);

            try (ResultSet rs = preparedStatement.executeQuery()) {

                while (rs.next()) {
                    genre = new Genre(rs.getInt("id"), rs.getString("name"));
                }
            }

            return genre;

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

    public static void update(Genre genre) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(UPDATE_GENRE);

            preparedStatement.setString(ONE, genre.getName());
            preparedStatement.setInt(TWO, genre.getId());

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
