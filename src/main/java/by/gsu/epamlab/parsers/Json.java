package by.gsu.epamlab.parsers;

import by.gsu.epamlab.beans.*;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


import java.util.List;

public class Json {

    public static String getPlays(List<Play> plays) {

        Gson gson = new Gson();
        return gson.toJson(plays);
    }

    public static String getDates(List<DatePlay> plays) {

        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
        return gson.toJson(plays);
    }

    public static String getOrders(List<Order> orders) {

        Gson gson = new Gson();
        return gson.toJson(orders);
    }

    public static String getGenres(List<Genre> genres) {

        Gson gson = new Gson();
        return gson.toJson(genres);
    }

    public static String getGenre(Genre genre) {

        Gson gson = new Gson();
        return gson.toJson(genre);
    }

    public static String getAuthors(List<Author> authors) {

        Gson gson = new Gson();
        return gson.toJson(authors);
    }

    public static String getAuthor(Author author) {

        Gson gson = new Gson();
        return gson.toJson(author);
    }

    public static String getPlay(Play play) {

        Gson gson = new Gson();
        return gson.toJson(play);
    }
}
