<%@ page import="by.gsu.epamlab.beans.DatePlay" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<html>

<head>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <script type="text/javascript" src="resources/js/visitor.js"></script>

    <%
        List<DatePlay> datesPlay = (List<DatePlay>) request.getAttribute("dates");
    %>

</head>


<body onLoad="createPlan(<%=request.getAttribute("datePlayId")%>);">

    <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
                <th>Plays:</th>
            </tr>
        </table>
    </div>

    <div class="tbl-content" id="ordersDiv">

        <table class="roundedCorners">
            <tr>
                <td><%=request.getAttribute("genre")%>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="<%=request.getAttribute("authorInfo")%>"
                       target="_blank"><%=request.getAttribute("author")%>
                    </a>
                    <a onClick="viewText(this)" href="#"><%=request.getAttribute("playName")%>
                    </a>
                    <br>
                    <div style="display: none"><%=request.getAttribute("playInfo")%>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <%
                        for (DatePlay datePlay : datesPlay) {
                    %>
                    <a href="#" onclick="createPlan(<%=datePlay.getId()%>)"><%=datePlay.getStringDate()%></a>
                    <%
                        }
                    %>
                </td>
            </tr>
        </table>

        <table class="OrderRoom" id='parterre' border=0>
        </table>

    </div>

    <div class="order_total">
        <table border="0">
            <tr>
                <th>Total :</th><th id='total'>0</th>
            </tr>
        </table>
    </div>

    <div class="order_footer">
        <p>
            <input class="button button1" type="button" value="Order" onclick="addOrder()">
            <input class="button button1" type="reset" value="Cancel" onclick="createPlan(currentDatePlayId);">
        </p>
    </div>

</body>

</html>