package by.gsu.epamlab.dao;

import by.gsu.epamlab.beans.DatePlay;
import by.gsu.epamlab.exceptions.PlaysDAOException;
import by.gsu.epamlab.managers.ConnectionManager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static by.gsu.epamlab.constants.Constants.*;

public class DatesPlayImpl {

    public static List<DatePlay> getDatesPlayByPlayId(int playId) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            List<DatePlay> dates = new ArrayList<>();
            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(SELECT_DATE_BY_PLAY_ID);
            preparedStatement.setInt(ONE, playId);
            try (ResultSet result = preparedStatement.executeQuery()) {
                while (result.next()) {

                    DatePlay datePlay = new DatePlay(result.getInt(ONE), result.getInt(TWO), result.getDate(THREE));

                    dates.add(datePlay);
                }
            }
            return dates;
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
            preparedStatement = connection.prepareStatement(DELETE_DATE);

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

    public static void add(DatePlay datePlay) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(INSERT_DATE);

            preparedStatement.setInt(ONE, datePlay.getPlayId());
            preparedStatement.setString(TWO, datePlay.getStringDateNonFormat());

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

    public static void update(DatePlay datePlay) throws PlaysDAOException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {

            connection = ConnectionManager.createConnection();
            preparedStatement = connection.prepareStatement(UPDATE_DATE);

            preparedStatement.setInt(ONE, datePlay.getPlayId());
            preparedStatement.setString(TWO, datePlay.getStringDateNonFormat());
            preparedStatement.setInt(THREE, datePlay.getId());

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
