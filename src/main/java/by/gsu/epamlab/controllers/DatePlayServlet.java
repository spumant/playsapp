package by.gsu.epamlab.controllers;

import by.gsu.epamlab.beans.DatePlay;
import by.gsu.epamlab.dao.DatesPlayImpl;
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


public class DatePlayServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            request.setCharacterEncoding(UTF_8);
            response.setCharacterEncoding(UTF_8);

            String action = request.getParameter("action");

            switch (action) {

                case "listDatesOfPlay": {

                    List<DatePlay> dates = DatesPlayImpl.getDatesPlayByPlayId(Integer.parseInt(request.getParameter("playId")));
                    String jsonDates = Json.getDates(dates);
                    PrintWriter out = response.getWriter();
                    out.println(jsonDates);

                    break;
                }
                case "forwardDatesPlay": {

                    List<DatePlay> dates = DatesPlayImpl.getDatesPlayByPlayId(Integer.parseInt(request.getParameter("playId")));
                    request.setAttribute("datePlayId", request.getParameter("datePlayId"));
                    request.setAttribute("genre", request.getParameter("genre"));
                    request.setAttribute("author", request.getParameter("author"));
                    request.setAttribute("authorInfo", request.getParameter("authorInfo"));
                    request.setAttribute("playInfo", request.getParameter("playInfo"));
                    request.setAttribute("playName", request.getParameter("playName"));
                    request.setAttribute("dates", dates);
                    request.getRequestDispatcher("/orders.jsp").forward(request, response);

                    break;
                }
                case "deleteDatePlay": {

                    int id = Integer.parseInt(request.getParameter("id"));
                    DatesPlayImpl.delete(id);

                    break;
                }
                case "addDatePlay": {

                    int playId = Integer.parseInt(request.getParameter("playId"));
                    String date = request.getParameter("datePlay");
                    DatePlay datePlay = new DatePlay(playId, date);
                    DatesPlayImpl.add(datePlay);

                    break;
                }
                case "saveEditDatePlay": {

                    if (!request.getParameter("id").isEmpty()) {
                        int id = Integer.parseInt(request.getParameter("id"));
                        int playId = Integer.parseInt(request.getParameter("playId"));
                        String date = request.getParameter("datePlay");
                        DatePlay datePlay = new DatePlay(id, playId, date);
                        DatesPlayImpl.update(datePlay);
                    } else {
                        int playId = Integer.parseInt(request.getParameter("playId"));
                        String date = request.getParameter("datePlay");
                        DatePlay datePlay = new DatePlay(playId, date);
                        DatesPlayImpl.add(datePlay);
                    }

                    break;
                }
            }
        } catch (PlaysDAOException e) {
            throw new ServletException(e);
        }
    }
}
