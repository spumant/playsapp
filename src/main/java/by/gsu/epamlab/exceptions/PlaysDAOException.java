package by.gsu.epamlab.exceptions;


public class PlaysDAOException extends Exception {

    public PlaysDAOException() {
    }

    public PlaysDAOException(String message) {
        super(message);
    }

    public PlaysDAOException(String message, Throwable cause) {
        super(message, cause);
    }

    public PlaysDAOException(Throwable cause) {
        super(cause);
    }

}
