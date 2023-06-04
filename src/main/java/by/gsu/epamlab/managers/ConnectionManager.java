package by.gsu.epamlab.managers;

import by.gsu.epamlab.exceptions.PlaysDAOException;

import java.io.PrintWriter;
import java.sql.*;

import static by.gsu.epamlab.constants.Constants.*;


public class ConnectionManager {

    public static Connection createConnection() throws PlaysDAOException {
        try {
            Class.forName(DRIVER);
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException e) {
            throw new PlaysDAOException(NOT_FIND_DRIVER, e);
        } catch (SQLException e) {
            System.out.println(e);
            throw new PlaysDAOException(CONNECTION_FAILED, e);
        }
    }

    public static void close(Connection connection, Statement statement, ResultSet resultSet) throws PlaysDAOException {
        closeResultSet(resultSet);
        closeStatement(statement);
        closeConnection(connection);
    }

    public static void closeAll(Connection connection, PreparedStatement preparedStatement, Statement statement) throws PlaysDAOException {
        closeStatement(statement, preparedStatement);
        closeConnection(connection);
    }

    public static void closeConnection(Connection connection) throws PlaysDAOException {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                throw new PlaysDAOException(CONNECTION_NOT_CLOSED, e);
            }
        }
    }

    public static void closeStatement(Statement statement) throws PlaysDAOException {
        if (statement != null) {
            try {
                statement.close();
            } catch (SQLException e) {
                throw new PlaysDAOException(STATEMENT_NOT_CLOSED, e);
            }
        }
    }

    public static void closeStatement(Statement statement, PreparedStatement preparedStatement) throws PlaysDAOException {
        if (statement != null) {
            try {
                statement.close();
            } catch (SQLException e) {
                throw new PlaysDAOException(STATEMENT_NOT_CLOSED, e);
            }
        }
        if (preparedStatement != null) {
            try {
                preparedStatement.close();
            } catch (SQLException e) {
                throw new PlaysDAOException(PREPARED_STATEMENT_NOT_CLOSED, e);
            }
        }
    }

    public static void closeResultSet(ResultSet resultSet) throws PlaysDAOException {
        if (resultSet != null) {
            try {
                resultSet.close();
            } catch (SQLException e) {
                throw new PlaysDAOException(RESULT_SET_NOT_CLOSED, e);
            }
        }
    }
}

