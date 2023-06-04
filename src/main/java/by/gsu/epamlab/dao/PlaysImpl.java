package by.gsu.epamlab.dao;

import by.gsu.epamlab.beans.Author;
import by.gsu.epamlab.beans.Genre;
import by.gsu.epamlab.beans.Play;
import by.gsu.epamlab.exceptions.PlaysDAOException;
import by.gsu.epamlab.managers.ConnectionManager;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import static by.gsu.epamlab.constants.Constants.*;

public class PlaysImpl {

    public static List<Play> getPlays() throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            List<Play> plays = new ArrayList<Play>();
            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(SELECT_PLAYS);

            try (ResultSet result = preparedStatement.executeQuery()) {

                while (result.next()) {

                    Genre genre = new Genre(result.getInt(ONE), result.getString(TWO));
                    Author author = new Author(result.getInt(THREE), result.getString(FOUR), result.getString(FIVE));
                    Play play = new Play(result.getInt(SIX), result.getString(SEVEN), author, genre, result.getString(EIGHT));

                    plays.add(play);
                }
            }

            return plays;

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
            preparedStatement = connection.prepareStatement(DELETE_PLAY);

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

    public static int add(Play play) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(INSERT_PLAY, Statement.RETURN_GENERATED_KEYS);

            preparedStatement.setString(ONE, play.getName());
            preparedStatement.setInt(TWO, play.getAuthor().getId());
            preparedStatement.setInt(THREE, play.getGenre().getId());
            preparedStatement.setString(FOUR, play.getInfo());

            int count = preparedStatement.executeUpdate();
            if (count != ONE) {
                throw new PlaysDAOException("add more then 1 record: " + count);
            }

            ResultSet resultSet = preparedStatement.getGeneratedKeys();
            resultSet.next();

            return resultSet.getInt(ONE);

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

    public static Play getById(int id) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        Play play = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(SELECT_PLAYS_BY_ID);
            preparedStatement.setInt(ONE, id);

            try (ResultSet rs = preparedStatement.executeQuery()) {

                while (rs.next()) {
                    Genre genre = new Genre(rs.getInt(ONE), rs.getString(TWO));
                    Author author = new Author(rs.getInt(THREE), rs.getString(FOUR), rs.getString(FIVE));
                    play = new Play(rs.getInt(SIX), rs.getString(SEVEN), author, genre, rs.getString(EIGHT));
                }
            }

            return play;

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

    public static void update(Play play) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(UPDATE_PLAY);

            preparedStatement.setString(ONE, play.getName());
            preparedStatement.setInt(TWO, play.getAuthor().getId());
            preparedStatement.setInt(THREE, play.getGenre().getId());
            preparedStatement.setString(FOUR, play.getInfo());
            preparedStatement.setInt(FIVE, play.getId());

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