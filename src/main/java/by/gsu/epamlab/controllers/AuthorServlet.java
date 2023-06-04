package by.gsu.epamlab.controllers;

import by.gsu.epamlab.beans.Author;
import by.gsu.epamlab.dao.AuthorsImpl;
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


public class AuthorServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            request.setCharacterEncoding(UTF_8);
            response.setCharacterEncoding(UTF_8);

            String action = request.getParameter("action");

            switch (action) {

                case "listAuthors": {

                    List<Author> authors = AuthorsImpl.getAuthors();
                    String jsonAuthors = Json.getAuthors(authors);
                    PrintWriter out = response.getWriter();
                    out.println(jsonAuthors);

                    break;
                }
                case "deleteAuthor": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    AuthorsImpl.delete(id);

                    break;
                }
                case "addAuthor": {

                    String name = request.getParameter("name");
                    String info = request.getParameter("info");
                    Author author = new Author(name,info);
                    AuthorsImpl.add(author);

                    break;
                }
                case "editAuthor": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    Author author = AuthorsImpl.getById(id);
                    String jsonAuthor = Json.getAuthor(author);

                    PrintWriter out = response.getWriter();
                    out.println(jsonAuthor);

                    break;
                }
                case "saveEditAuthor": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    String name = request.getParameter("name");
                    String info = request.getParameter("info");
                    Author author = new Author(id, name, info);
                    AuthorsImpl.update(author);

                    break;
                }
            }
        } catch (PlaysDAOException e) {
            throw new ServletException(e);
        }
    }
}
