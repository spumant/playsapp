package by.gsu.epamlab.beans;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import static by.gsu.epamlab.constants.Constants.DATE_FORMAT_PATTERN;
import static by.gsu.epamlab.constants.Constants.DATE_PARSE_PATTERN;

public class DatePlay {

    private int id;
    private int playId;
    private Date date;
    private String stringDateNonFormat;

    public DatePlay() {
    }

    public DatePlay(int id, int playId, Date date) {
        this.id = id;
        this.playId = playId;
        this.date = date;
    }

    public DatePlay(int id, int playId, String stringDateNonFormat) {
        this.id = id;
        this.playId = playId;
        this.stringDateNonFormat = stringDateNonFormat;
    }

    public DatePlay(int playId, String stringDateNonFormat) {
        this.playId = playId;
        this.stringDateNonFormat = stringDateNonFormat;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPlayId() {
        return playId;
    }

    public void setPlayId(int playId) {
        this.playId = playId;
    }

    public Date getDate() {
        return date;
    }

    public String getStringDate() {
        return new SimpleDateFormat(DATE_FORMAT_PATTERN).format(date);
    }

    public String getStringDateNonFormat() {
        return stringDateNonFormat;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setDate(String date) {
        try {
            setDate((Date) new SimpleDateFormat(DATE_PARSE_PATTERN).parse(date));
        } catch (ParseException e) {
            throw new IllegalArgumentException(e);
        }
    }

    public void setStringDateNonFormat(String stringDateNonFormat) {
        this.stringDateNonFormat = stringDateNonFormat;
    }
}
