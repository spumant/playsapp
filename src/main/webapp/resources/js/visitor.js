function init() {
    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.onreadystatechange = getReadyStatePLAYS(ajaxHttpRequest);
    ajaxHttpRequest.open("GET", "init" + "?init=&sid=" + Math.random(), true);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////
}

function createTablePlays(json) {
    var divMain = document.getElementById('initdiv');

    for (var key in json) {

        var table = document.createElement("table"),

            tr1 = document.createElement("tr"),
            tr2 = document.createElement("tr"),

            tdGenreName = document.createElement("td"),
            tdAuthorAndPlayName = document.createElement("td"),

            divPlayInfo = document.createElement("div"),

            aAuthorName = document.createElement("a"),
            aPlayName = document.createElement("a"),

            br = document.createElement("br");

        // create first row genre name
        table.setAttribute("class", "roundedCorners");
        table.setAttribute("align", "center");
        divMain.appendChild(table);
        table.appendChild(tr1);

        tr1.appendChild(tdGenreName);
        tdGenreName.appendChild(document.createTextNode(json[key].genre.name));

        // create second row author and play name
        table.appendChild(tr2);

        tr2.appendChild(tdAuthorAndPlayName);

        aAuthorName.setAttribute("href", json[key].author.info);
        aAuthorName.setAttribute("target", "_blank");
        aAuthorName.appendChild(document.createTextNode(json[key].author.name));
        tdAuthorAndPlayName.appendChild(aAuthorName);
        tdAuthorAndPlayName.appendChild(document.createTextNode(" "));

        divPlayInfo.setAttribute("style", "display: none;")
        divPlayInfo.appendChild(document.createTextNode(json[key].info));
        aPlayName.setAttribute("onclick", "viewText(this)");
        aPlayName.setAttribute("href", "#this");
        aPlayName.appendChild(document.createTextNode(json[key].name));
        tdAuthorAndPlayName.appendChild(aPlayName);

        tdAuthorAndPlayName.appendChild(br);

        tdAuthorAndPlayName.appendChild(divPlayInfo);
        tr2.appendChild(tdAuthorAndPlayName);

        var Play = {
            playId: json[key].id,
            genre: json[key].genre.name,
            author: json[key].author.name,
            authorInfo: json[key].author.info,
            playInfo: json[key].info,
            playName: json[key].name
        };

        // create dates of PLAY
        //////////////////////////////////////
        var ajaxHttpRequest = getXMLHttpRequest();
        ajaxHttpRequest.onreadystatechange = getReadyStateDATEPLAYS(ajaxHttpRequest, table, Play);
        ajaxHttpRequest.open("GET", "datePlays" + "?action=initDatesPlay&playId=" + json[key].id + "&sid=" + Math.random(), true);
        ajaxHttpRequest.send(null);
        //////////////////////////////////////
    }

}

var countOrders = 0;
var NUM_ROWS = 3;
var NUM_COLS = 10;
var COLORS = ['#4CAF50', '#00A0D6', '#E2D7CD'];	//free, ordered, paid #F1E3E3 #E2D7CD #FFF3E7
var currentDatePlayId;

function createPlan(datePlayId) {

    currentDatePlayId = datePlayId;
    countOrders = 0;

    //////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.onreadystatechange = getReadyStateORDERS(ajaxHttpRequest);
    ajaxHttpRequest.open("GET", "orders" + "?action=orders&datePlayId=" + datePlayId + "&sid=" + Math.random(), true);
    ajaxHttpRequest.send(null);
    //////////////////////////////////////

    var table = document.getElementById('parterre');
    document.getElementById('total').innerHTML = 0;
    table.innerHTML = "";

    for (var i = 1; i <= NUM_ROWS; i++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        createCell('th', i);
        createCell('th', '&nbsp;');
        for (var j = 1; j <= NUM_COLS; j++) {
            var td = createCell('td', j);
            td.setAttribute('id', 'p' + i + '_' + j);
            td.bgColor = COLORS[0];
            td.onclick = function () {
                var index = this.bgColor == COLORS[2] ? 3 : this.bgColor == COLORS[0] ? 0 : 1;
                this.bgColor = COLORS[Math.abs(1 - index)];

                if (index == 0) {
                    countOrders++;
                }
                if (index == 1) {
                    countOrders--;
                }
                document.getElementById('total').innerHTML = countOrders;
            }
        }
        createCell('th', '&nbsp;');
        createCell('th', i);
    }


    function createCell(tagName, tagValue) {
        var cell = document.createElement(tagName);
        cell.innerHTML = tagValue;
        var tr = table.rows[table.rows.length - 1];
        tr.appendChild(cell);
        return cell;
    }
}

function addOrder() {
    for (var i = 1; i <= NUM_ROWS; i++) {
        for (var j = 1; j <= NUM_COLS; j++) {
            var td = document.getElementById('p' + i + '_' + j);
            if (td.bgColor == COLORS[1]) {
                var ajaxHttpRequest = getXMLHttpRequest();
                // ajaxHttpRequest.onreadystatechange = getReadyStateDATEPLAYS(ajaxHttpRequest, table, Play);
                ajaxHttpRequest.open("GET", "orders" + "?action=saveOrder&datePlayId=" + currentDatePlayId + "&place=" + td.getAttribute("id") + "&sid=" + Math.random(), false);
                ajaxHttpRequest.send(null);


            }
        }
    }
    createPlan(currentDatePlayId);
}

function viewText(thisElement) {
    var div = thisElement.nextElementSibling.nextElementSibling;
    if (div.style.display != "block") {
        div.style.display = "block";
    }
    else {
        div.style.display = "none";
    }
}

function getXMLHttpRequest() {
    var ajaxHttpReq;
    if (window.XMLHttpRequest) {
        ajaxHttpReq = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        ajaxHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
    }
    return ajaxHttpReq;
}

function getReadyStatePLAYS(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonString = xmlHttpRequest.responseText;
                var jsonObject = JSON.parse(jsonString);

                createTablePlays(jsonObject);

            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyStateDATEPLAYS(xmlHttpRequest, table, play) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonString = xmlHttpRequest.responseText;
                var jsonObjectDate = JSON.parse(jsonString);

                var tr = document.createElement("tr"),
                    tdHref = document.createElement("td");
                table.appendChild(tr);
                table.appendChild(tdHref);

                for (var key in jsonObjectDate) {

                    var aHrefDate = document.createElement("a");

                    var playPrefix = "&genre=" + play.genre + "&author=" + play.author + "&authorInfo=" + play.authorInfo + "&playInfo=" + play.playInfo + "&playName=" + play.playName;

                    aHrefDate.setAttribute("href", "/datePlays?action=forwardDatesPlay&playId=" + play.playId + "&datePlayId=" + jsonObjectDate[key].id + playPrefix);
                    aHrefDate.appendChild(document.createTextNode(jsonObjectDate[key].date));
                    tdHref.appendChild(aHrefDate);
                    tdHref.appendChild(document.createTextNode(" "));
                }
            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyStateORDERS(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonString = xmlHttpRequest.responseText;
                var jsonObject = JSON.parse(jsonString);

                for (var key in jsonObject) {
                    var td = document.getElementById(jsonObject[key].place);
                    td.bgColor = COLORS[2];
                }
            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}