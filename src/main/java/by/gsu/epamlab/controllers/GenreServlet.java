package by.gsu.epamlab.controllers;

import by.gsu.epamlab.beans.Genre;
import by.gsu.epamlab.dao.GenresImpl;
import by.gsu.epamlab.exceptions.PlaysDAOException;
import by.gsu.epamlab.parsers.Json;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import static by.gsu.epamlab.constants.Constants.UTF_8;


public class GenreServlet extends HttpServlet {


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            request.setCharacterEncoding(UTF_8);
            response.setCharacterEncoding(UTF_8);

            String action = request.getParameter("action");

            switch (action) {

                case "listGenres": {

                    List<Genre> genres = GenresImpl.getGenres();
                    String jsonGenres = Json.getGenres(genres);

                    PrintWriter out = response.getWriter();
                    out.println(jsonGenres);

                    break;
                }
                case "deleteGenre": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    GenresImpl.delete(id);

                    break;
                }
                case "addGenre": {

                    Genre genre = new Genre(request.getParameter("name"));
                    GenresImpl.add(genre);

                    break;
                }
                case "editGenre": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    Genre genre = GenresImpl.getById(id);
                    String jsonGenre = Json.getGenre(genre);

                    PrintWriter out = response.getWriter();
                    out.println(jsonGenre);

                    break;
                }
                case "saveEditGenre": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    String name = request.getParameter("name");
                    Genre genre = new Genre(id, name);
                    GenresImpl.update(genre);

                    break;
                }
            }


        } catch (PlaysDAOException e) {
            throw new ServletException(e);
        }


    }
}
