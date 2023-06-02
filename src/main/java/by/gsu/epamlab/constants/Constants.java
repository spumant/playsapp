package by.gsu.epamlab.constants;

public final class Constants {

    public static final int ONE = 1;
    public static final int TWO = ONE + ONE;
    public static final int THREE = TWO + ONE;
    public static final int FOUR = THREE + ONE;
    public static final int FIVE = FOUR + ONE;
    public static final int SIX = FIVE + ONE;
    public static final int SEVEN = SIX + ONE;
    public static final int EIGHT = SEVEN + ONE;

    public static final String SELECT_GENRE_BY_ID = "SELECT * FROM genres WHERE id=?";
    public static final String SELECT_GENRES = "SELECT * FROM genres";
    public static final String INSERT_GENRE = "INSERT INTO genres (name) VALUES (?)";
    public static final String UPDATE_GENRE = "UPDATE genres SET name = ? WHERE id= ?";
    public static final String DELETE_GENRE = "DELETE FROM genres WHERE id= ?";
    public static final String TRUNCATE_GENRES = "TRUNCATE TABLE genres;";

    public static final String SELECT_AUTHOR_BY_ID = "SELECT * FROM authors WHERE id=?";
    public static final String SELECT_AUTHORS = "SELECT * FROM authors";
    public static final String INSERT_AUTHOR = "INSERT INTO authors (name, info) VALUES (?,?)";
    public static final String UPDATE_AUTHOR = "UPDATE authors SET name = ?, info = ? WHERE id= ?";
    public static final String DELETE_AUTHOR = "DELETE FROM authors WHERE id= ?";
    public static final String TRUNCATE_AUTHORS = "TRUNCATE TABLE authors;";

    public static final String SELECT_ORDERS = "SELECT * FROM orders";
    public static final String SELECT_ORDER_BY_DATEPLAY_ID = "SELECT place FROM orders WHERE dateId = ?";
    public static final String INSERT_ORDERS = "INSERT INTO orders (dateId, place) values (?, ?)";
    public static final String UPDATE_ORDER = "UPDATE orders SET id = ?, dateId = ? place = ? WHERE id= ?";
    public static final String DELETE_ORDER = "DELETE FROM orders WHERE id= ?";

    public static final String SELECT_PLAYS = "SELECT G.id, G.name, A.id, A.name, A.info, P.id, P.name, P.info FROM plays P " +
            "INNER JOIN authors A ON P.authorId = A.id " +
            "INNER JOIN genres G ON P.genreId = G.id";
    public static final String SELECT_PLAYS_BY_ID = "SELECT G.id, G.name, A.id, A.name, A.info, P.id, P.name, P.info FROM plays P " +
            "INNER JOIN authors A ON P.authorId = A.id " +
            "INNER JOIN genres G ON P.genreId = G.id " +
            "WHERE P.id = ?";
    public static final String INSERT_PLAY = "INSERT INTO plays (name, authorId, genreId, info) values (?,?,?,?)";
    public static final String UPDATE_PLAY = "UPDATE plays SET name= ?, authorId= ?, genreId= ?, info = ? WHERE id= ?";
    public static final String DELETE_PLAY = "DELETE FROM plays WHERE id= ?";

    public static final String SELECT_DATE_BY_PLAY_ID = "SELECT id, playId, date FROM dates where playId = ? order by date;";
    public static final String SELECT_DATES = "SELECT * FROM dates";
    public static final String SELECT_DATE_BY_ID = "SELECT * FROM dates WHERE id = ?";
    public static final String INSERT_DATE = "INSERT INTO dates (playId, date) values (?, ?)";
    public static final String UPDATE_DATE = "UPDATE dates SET playId = ?, date = ? WHERE id= ?";
    public static final String DELETE_DATE = "DELETE FROM dates WHERE id= ?";

    public static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    public static final String URL = "jdbc:mysql://localhost:3306/plays?useSSL=true&useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC";
    public static final String USER = "root";
    public static final String PASSWORD = "monarch99";

    public static final String ID = "id";
    public static final String EMPTY_LINE = "";
    public static final String CONTENT_TYPE = "text/html";
    public static final String UTF_8 = "UTF-8";

    public static final String DATE_PARSE_PATTERN = "yyyy-MM-dd";
    public static final String DATE_FORMAT_PATTERN = "dd.MM";

    public static final String NOT_FIND_DRIVER = "Can not find a driver ";
    public static final String CONNECTION_FAILED = "Connection is not established! Check the login email and password, please! ";
    public static final String CONNECTION_NOT_CLOSED = "Connection was not closed.";
    public static final String STATEMENT_NOT_CLOSED = "Statement was not closed.";
    public static final String PREPARED_STATEMENT_NOT_CLOSED = "PreparedStatement was not closed.";
    public static final String RESULT_SET_NOT_CLOSED = "ResultSet was not closed.";

}
