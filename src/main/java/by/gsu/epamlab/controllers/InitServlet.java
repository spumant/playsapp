package by.gsu.epamlab.controllers;

import by.gsu.epamlab.beans.Author;
import by.gsu.epamlab.beans.Genre;
import by.gsu.epamlab.beans.Play;
import by.gsu.epamlab.dao.PlaysImpl;
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


public class InitServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            request.setCharacterEncoding(UTF_8);
            response.setCharacterEncoding(UTF_8);

            String action = request.getParameter("action");

            switch (action) {

                case "listPlays": {
                    List<Play> plays = PlaysImpl.getPlays();
                    String jsonPlays = Json.getPlays(plays);
                    PrintWriter out = response.getWriter();
                    out.println(jsonPlays);

                    break;
                }
                case "deletePlay": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    PlaysImpl.delete(id);

                    break;
                }
                case "addPlay": {

                    String name = request.getParameter("name");
                    int authorId = Integer.parseInt(request.getParameter("author"));
                    int genreId = Integer.parseInt(request.getParameter("genre"));
                    String info = request.getParameter("info");
                    Author author = new Author();
                    author.setId(authorId);
                    Genre genre = new Genre();
                    genre.setId(genreId);
                    Play play = new Play(name, author, genre, info);
                    int id = PlaysImpl.add(play);

                    PrintWriter out = response.getWriter();
                    out.println(id);

                    break;
                }
                case "editPlay": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    Play play = PlaysImpl.getById(id);
                    String jsonPlay = Json.getPlay(play);

                    PrintWriter out = response.getWriter();
                    out.println(jsonPlay);

                    break;
                }
                case "saveEditPlay": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    String name = request.getParameter("name");
                    int authorId = Integer.parseInt(request.getParameter("author"));
                    int genreId = Integer.parseInt(request.getParameter("genre"));
                    String info = request.getParameter("info");
                    Author author = new Author();
                    author.setId(authorId);
                    Genre genre = new Genre();
                    genre.setId(genreId);
                    Play play = new Play(id, name, author, genre, info);
                    PlaysImpl.update(play);

                    break;
                }
            }
        } catch (PlaysDAOException e) {
            throw new ServletException(e);
        }


    }
}

