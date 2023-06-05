/////////////////////GENRE_FUNCTIONS//////////////////////////
function addGenre(genre) {

    var elements = genre.firstElementChild.getElementsByTagName('input');

    for (var i = 0; i < elements.length; i++) {
        var input = elements[i];

        ////////////////////////////////////////
        var ajaxHttpRequest = getXMLHttpRequest();
        ajaxHttpRequest.open("GET", "genres" + "?action=addGenre&name=" + input.value + "&sid=" + Math.random(), false);
        ajaxHttpRequest.send(null);
        ////////////////////////////////////////
    }

    initialListGenres();
}

function initialEditGenre(id) {

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.onreadystatechange = getReadyState_EDIT_GENRE(ajaxHttpRequest);
    ajaxHttpRequest.open("GET", "genres" + "?action=editGenre&id=" + id + "&sid=" + Math.random(), false);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    switchForm('edit_genre');
}

function saveEditGenre() {

    var editGenreIdInput = document.getElementById('editGenreIdInput').value;
    var editGenreNameInput = document.getElementById('editGenreNameInput').value;

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.open("GET", "genres" + "?action=saveEditGenre&id=" + editGenreIdInput + "&name=" + editGenreNameInput + "&sid=" + Math.random(), false);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    initialListGenres();
}

function deleteGenre(id) {

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.open("GET", "genres" + "?action=deleteGenre&id=" + id + "&sid=" + Math.random(), false);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    initialListGenres();
}

function createGenre() {
    var inputs_div = document.getElementById('genre_inputs');
    var input = document.createElement('input');
    var text = document.createTextNode(" ");
    var img = document.createElement('IMG');
    img.setAttribute('src', 'basket.gif');
    img.onclick = function () {
        removeGenre(input);
    }
    var br = document.createElement('br');

    input.setAttribute("type", "text");
    input.setAttribute("required", "");
    inputs_div.appendChild(input);
    inputs_div.appendChild(text);
    inputs_div.appendChild(img);
    inputs_div.appendChild(br);
}

function removeGenre(element) {
    element.parentNode.removeChild(element.nextElementSibling.nextElementSibling);
    element.parentNode.removeChild(element.nextElementSibling);
    element.parentNode.removeChild(element);
}

function initialGenre() {

    switchForm('add_genre');
}

function initialListGenres() {

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.onreadystatechange = getReadyState_LISTGENRES(ajaxHttpRequest);
    ajaxHttpRequest.open("GET", "genres" + "?action=listGenres&sid=" + Math.random(), true);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    switchForm('getListGenres');
}

function getListGenres(json) {

    var tableListGenres = document.getElementById('table-ListGenres');
    tableListGenres.innerHTML = "";

    for (var key in json) {

        ////////////////CREATE_GENRES_ELEMENT///////////////////////
        var trGenre = document.createElement("tr");

        var thGenreId = document.createElement("th");

        var tdGenreName = document.createElement("td");

        var thGenreEdit = document.createElement("th");
        var thGenreDelete = document.createElement("th");

        var inputGenreEdit = document.createElement("input");
        var inputGenreDelete = document.createElement("input");
        ////////////////////////////////////////////////////


        ///////////////////CREATE_GENRES_ROW//////////////////////////
        tableListGenres.appendChild(trGenre);

        trGenre.appendChild(thGenreId);
        thGenreId.appendChild(document.createTextNode(json[key].id));

        trGenre.appendChild(tdGenreName);
        tdGenreName.appendChild(document.createTextNode(json[key].name));

        trGenre.appendChild(thGenreEdit);
        thGenreEdit.appendChild(inputGenreEdit);
        inputGenreEdit.setAttribute("type", "button");
        inputGenreEdit.setAttribute("onclick", "javascript:initialEditGenre(" + json[key].id + ")");
        inputGenreEdit.setAttribute("value", "Edit");

        trGenre.appendChild(thGenreDelete);
        thGenreDelete.appendChild(inputGenreDelete);
        inputGenreDelete.setAttribute("type", "button");
        inputGenreDelete.setAttribute("onclick", "javascript:deleteGenre(" + json[key].id + ")");
        inputGenreDelete.setAttribute("value", "Delete");
        /////////////////////////////////////////////////////////////
    }
}
///////////////////////////////////////////////////////////////////////////////


////////////////////AUTHOR_FUNCTIONS/////////////////////////////
function addAuthor(author) {

    var elements = author.getElementsByClassName('authorName');

    for (var i = 0; i < elements.length; i++) {

        var name = author.getElementsByClassName('authorName')[i].value;
        var info = author.getElementsByClassName('authorInfo')[i].value;

        ////////////////////////////////////////
        var ajaxHttpRequest = getXMLHttpRequest();
        ajaxHttpRequest.open("GET", "authors" + "?action=addAuthor&name=" + name + "&info=" + info + "&sid=" + Math.random(), false);
        ajaxHttpRequest.send(null);
        ////////////////////////////////////////
    }

    initialListAuthors();
}

function initialEditAuthor(id) {

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.onreadystatechange = getReadyState_EDIT_AUTHOR(ajaxHttpRequest);
    ajaxHttpRequest.open("GET", "authors" + "?action=editAuthor&id=" + id + "&sid=" + Math.random(), false);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    switchForm('edit_author');
}

function saveEditAuthor() {

    var editAuthorIdInput = document.getElementById('editAuthorIdInput').value;
    var editAuthorNameInput = document.getElementById('editAuthorNameInput').value;
    var editAuthorInfoInput = document.getElementById('editAuthorInfoInput').value;


    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.open("GET", "authors" + "?action=saveEditAuthor&id=" + editAuthorIdInput + "&name=" + editAuthorNameInput + "&info=" + editAuthorInfoInput + "&sid=" + Math.random(), false);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    initialListAuthors();
}

function deleteAuthor(id) {

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.open("GET", "authors" + "?action=deleteAuthor&id=" + id + "&sid=" + Math.random(), false);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    initialListAuthors();
}

function createAuthor() {
    var inputs_div = document.getElementById('author_inputs');
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var text1 = document.createTextNode(" ");
    var text = document.createTextNode(" ");
    var img = document.createElement('IMG');
    img.setAttribute('src', 'basket.gif');
    img.onclick = function () {
        removeAuthor(input2);
    }
    var br = document.createElement('br');

    input1.setAttribute("type", "text");
    input1.setAttribute("class", "authorName");
    input1.setAttribute("required", "");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "authorInfo");
    input2.setAttribute("required", "");
    inputs_div.appendChild(input1);
    inputs_div.appendChild(text1);
    inputs_div.appendChild(input2);
    inputs_div.appendChild(text);
    inputs_div.appendChild(img);
    inputs_div.appendChild(br);
}

function removeAuthor(element) {
    element.parentNode.removeChild(element.previousElementSibling);
    element.parentNode.removeChild(element.nextElementSibling.nextElementSibling);
    element.parentNode.removeChild(element.nextElementSibling);
    element.parentNode.removeChild(element);
}

function initialAuthor() {

    switchForm('add_author');
}

function initialListAuthors() {

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.onreadystatechange = getReadyState_LISTAUTHORS(ajaxHttpRequest);
    ajaxHttpRequest.open("GET", "authors" + "?action=listAuthors&sid=" + Math.random(), true);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    switchForm('getListAuthors');
}

function getListAuthors(json) {

    var tableListAuthors = document.getElementById('table-ListAuthors');
    tableListAuthors.innerHTML = "";

    for (var key in json) {

        ////////////////CREATE_AUTHORS_ELEMENT///////////////////////
        var trAuthor = document.createElement("tr");

        var thAuthorId = document.createElement("th");

        var tdAuthorName = document.createElement("td");
        var tdAuthorInfo = document.createElement("td");

        var thAuthorEdit = document.createElement("th");
        var thAuthorDelete = document.createElement("th");

        var inputAuthorEdit = document.createElement("input");
        var inputAuthorDelete = document.createElement("input");
        ////////////////////////////////////////////////////


        ///////////////////CREATE_AUTHORS_ROW//////////////////////////
        tableListAuthors.appendChild(trAuthor);

        trAuthor.appendChild(thAuthorId);
        thAuthorId.appendChild(document.createTextNode(json[key].id));

        trAuthor.appendChild(tdAuthorName);
        tdAuthorName.appendChild(document.createTextNode(json[key].name));

        trAuthor.appendChild(tdAuthorInfo);
        tdAuthorInfo.appendChild(document.createTextNode(json[key].info));

        trAuthor.appendChild(thAuthorEdit);
        thAuthorEdit.appendChild(inputAuthorEdit);
        inputAuthorEdit.setAttribute("type", "button");
        inputAuthorEdit.setAttribute("onclick", "javascript:initialEditAuthor(" + json[key].id + ")");
        inputAuthorEdit.setAttribute("value", "Edit");

        trAuthor.appendChild(thAuthorDelete);
        thAuthorDelete.appendChild(inputAuthorDelete);
        inputAuthorDelete.setAttribute("type", "button");
        inputAuthorDelete.setAttribute("onclick", "javascript:deleteAuthor(" + json[key].id + ")");
        inputAuthorDelete.setAttribute("value", "Delete");
        /////////////////////////////////////////////////////////////
    }
}
/////////////////////////////////////////////////////////////////


////////////////////PLAY_FUNCTIONS/////////////////////////////
var inputs = 0;

function addPlay(play) {

    var tbodyPlays = play.getElementsByClassName('tbodyPlay');
    var tablePlayDates = play.getElementsByClassName('tablePlayDate');

    for (var i = 1; i < tbodyPlays.length; i++) {

        var genre = play.getElementsByClassName('playGenre')[i].value;
        var author = play.getElementsByClassName('playAuthor')[i].value;
        var name = play.getElementsByClassName('playName')[i].value;
        var info = play.getElementsByClassName('playInfo')[i].value;

        var postfix = "&genre=" + genre + "&author=" + author + "&name=" + name + "&info=" + info;

        ////////////////////////////////////////
        var ajaxHttpRequestAddPlay = getXMLHttpRequest();
        ajaxHttpRequestAddPlay.open("GET", "init" + "?action=addPlay" + postfix + "&sid=" + Math.random(), false);
        ajaxHttpRequestAddPlay.send(null);
        ////////////////////////////////////////

        var playId = ajaxHttpRequestAddPlay.responseText;

        for (var k = 0; k < tbodyPlays[i].getElementsByClassName('count')[0].id; k++) {

            var datePlay = tablePlayDates[i].getElementsByClassName('playDate')[k].value;

            ////////////////////////////////////////
            var ajaxHttpRequestAddDatePlay = getXMLHttpRequest();
            ajaxHttpRequestAddDatePlay.open("GET", "datePlays" + "?action=addDatePlay&playId=" + playId + "&datePlay=" + datePlay + "&sid=" + Math.random(), false);
            ajaxHttpRequestAddDatePlay.send(null);
            ////////////////////////////////////////
        }
    }

    initialListPlays();
}

function initialEditPlay(id) {

    //init genres and authors of edit_play
    ////////////////////////////////////////
    var ajaxHttpRequestOfGenres = getXMLHttpRequest();
    ajaxHttpRequestOfGenres.onreadystatechange = getReadyState_LISTGENRES_FOR_EDIT_GENRE_OF_PLAY(ajaxHttpRequestOfGenres);
    ajaxHttpRequestOfGenres.open("GET", "genres" + "?action=listGenres&sid=" + Math.random(), false);
    ajaxHttpRequestOfGenres.send(null);
    ////////////////////////////////////////

    ////////////////////////////////////////
    var ajaxHttpRequestOfAuthors = getXMLHttpRequest();
    ajaxHttpRequestOfAuthors.onreadystatechange = getReadyState_LISTAUTHORS_FOR_EDIT_AUTHOR_OF_PLAY(ajaxHttpRequestOfAuthors);
    ajaxHttpRequestOfAuthors.open("GET", "authors" + "?action=listAuthors&sid=" + Math.random(), false);
    ajaxHttpRequestOfAuthors.send(null);
    ////////////////////////////////////////

    //edit_play
    ////////////////////////////////////////
    var ajaxHttpRequestEditPlay = getXMLHttpRequest();
    ajaxHttpRequestEditPlay.onreadystatechange = getReadyState_EDIT_PLAY(ajaxHttpRequestEditPlay);
    ajaxHttpRequestEditPlay.open("GET", "init" + "?action=editPlay&id=" + id + "&sid=" + Math.random(), false);
    ajaxHttpRequestEditPlay.send(null);
    ////////////////////////////////////////

    //////////////////////////////////////
    var ajaxHttpRequestEditListDatesOfPlays = getXMLHttpRequest();
    ajaxHttpRequestEditListDatesOfPlays.onreadystatechange = getReadyState_EDIT_LIST_DATES_OF_PLAYS(ajaxHttpRequestEditListDatesOfPlays);
    ajaxHttpRequestEditListDatesOfPlays.open("GET", "datePlays" + "?action=listDatesOfPlay&playId=" + id + "&sid=" + Math.random(), false);
    ajaxHttpRequestEditListDatesOfPlays.send(null);
    //////////////////////////////////////

    switchForm('edit_play');
}

function saveEditPlay() {

    var playId = document.getElementById("editPlayIdInput").value;
    var genre = document.getElementById("editPlayGenreIdSelect").value;
    var author = document.getElementById("editPlayAuthorIdSelect").value;
    var name = document.getElementById("editPlayNameSelect").value;
    var info = document.getElementById("editPlayInfoTextarea").value;

    var postfix = "&id=" + playId + "&genre=" + genre + "&author=" + author + "&name=" + name + "&info=" + info;

    ////////////////////////////////////////
    var ajaxHttpRequestAddPlay = getXMLHttpRequest();
    ajaxHttpRequestAddPlay.open("GET", "init" + "?action=saveEditPlay" + postfix + "&sid=" + Math.random(), false);
    ajaxHttpRequestAddPlay.send(null);
    ////////////////////////////////////////

    var editDiv = document.getElementById('edit_div');

    for (var k = 0; k < editDiv.getElementsByClassName('count')[0].id; k++) {

        var datePlayId = editDiv.getElementsByClassName('playDate')[k].id;
        var datePlay = editDiv.getElementsByClassName('playDate')[k].value;

        ////////////////////////////////////////
        var ajaxHttpRequestAddDatePlay = getXMLHttpRequest();
        ajaxHttpRequestAddDatePlay.open("GET", "datePlays" + "?action=saveEditDatePlay&id=" + datePlayId + "&playId=" + playId + "&datePlay=" + datePlay + "&sid=" + Math.random(), false);
        ajaxHttpRequestAddDatePlay.send(null);
        ////////////////////////////////////////
    }


    initialListPlays();
}

function deletePlay(id) {

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.open("GET", "init" + "?action=deletePlay&id=" + id + "&sid=" + Math.random(), false);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    initialListPlays();
}

function createPlay() {
    var div = document.getElementById('div');
    var div2 = div.cloneNode(true);
    div2.style.display = "initial";
    div2.setAttribute("id", "div" + inputs);
    div2.getElementsByClassName('playName')[0].required = true;
    div2.getElementsByClassName('playDate')[0].required = true;
    div2.getElementsByClassName('playInfo')[0].required = true;

    if (inputs > 0) {
        var thead = div2.firstChild.nextElementSibling.firstChild.nextElementSibling;
        div2.firstChild.nextElementSibling.removeChild(thead);

        var img = document.createElement('IMG');
        img.setAttribute('src', 'basket.gif');
        img.onclick = function () {
            removePlay(this);
        }
        var tr = div2.firstElementChild.firstElementChild.firstElementChild;
        var cell = tr.insertCell(-1);
        cell.appendChild(img);
    }
    div.parentNode.appendChild(div2);

    inputs++;
}

function removePlay(o) {
    var p = o.parentNode.parentNode.parentNode.parentNode.parentNode;
    if (p.id == 'div0') {
        return;
    }
    if (p.id != "div") {
        p.parentNode.removeChild(p);
    }
    inputs--;
}

function createDate(o) {

    if (o.id == 0) {
        o.id++;
    }

    if (o.id < 6) {

        var input1 = document.createElement('INPUT');
        input1.setAttribute("type", "date");
        input1.setAttribute("size", "3");
        input1.setAttribute("class", "playDate");
        input1.setAttribute("required", "");

        var input2 = document.createElement('INPUT');
        input2.setAttribute("type", "button");
        input2.setAttribute("onclick", "removeDate(this)");
        input2.setAttribute("value", "X");

        var table = o.parentNode.parentNode.parentNode.parentNode;
        var parentTable = table.nextElementSibling;
        var tr = parentTable.rows[0];
        var cell = tr.insertCell(-1);
        cell.appendChild(input1);
        var cell2 = tr.insertCell(-1);
        cell2.appendChild(input2);

        o.id++;
    }
}

function removeDate(o) {

    o.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('count')[0].id--;

    var p = o.parentNode.previousElementSibling;
    var p2 = o.parentNode;
    p.parentNode.removeChild(p);
    p2.parentNode.removeChild(p2);

}

function initialButton(o) {
    o.parentNode.nextElementSibling.firstChild.style.display = "initial";
}

function initialPlay() {

    ////////////////////////////////////////
    var ajaxHttpRequestOfGenres = getXMLHttpRequest();
    ajaxHttpRequestOfGenres.onreadystatechange = getReadyState_LISTGENRES_FOR_ADD_PLAY(ajaxHttpRequestOfGenres);
    ajaxHttpRequestOfGenres.open("GET", "genres" + "?action=listGenres&sid=" + Math.random(), false);
    ajaxHttpRequestOfGenres.send(null);
    ////////////////////////////////////////

    ////////////////////////////////////////
    var ajaxHttpRequestOfAuthors = getXMLHttpRequest();
    ajaxHttpRequestOfAuthors.onreadystatechange = getReadyState_LISTAUTHORS_FOR_ADD_PLAY(ajaxHttpRequestOfAuthors);
    ajaxHttpRequestOfAuthors.open("GET", "authors" + "?action=listAuthors&sid=" + Math.random(), false);
    ajaxHttpRequestOfAuthors.send(null);
    ////////////////////////////////////////

    switchForm('add_play');

    if (inputs < 1) {
        createPlay();
    }
}

function initialListPlays() {

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.onreadystatechange = getReadyState_LISTPLAYS(ajaxHttpRequest);
    ajaxHttpRequest.open("GET", "init" + "?action=listPlays&sid=" + Math.random(), true);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    switchForm('getListPlays');
}

function getListPlays(json) {

    var tableListPlays = document.getElementById('table-ListPlays');
    tableListPlays.innerHTML = "";

    for (var key in json) {

        var Play = {
            playId: json[key].id,
            genreId: json[key].genre.id,
            genre: json[key].genre.name,
            authorId: json[key].author.id,
            author: json[key].author.name,
            authorInfo: json[key].author.info,
            playInfo: json[key].info,
            playName: json[key].name
        };

        ////////////////CREATE_PLAY_ELEMENT///////////////////////
        var trPlay = document.createElement("tr");

        var thPlayId = document.createElement("th");
        thPlayId.setAttribute("rowspan", "2");

        var tdPlayName = document.createElement("td");
        var tdPlayAuthor = document.createElement("td");
        var tdPlayGenre = document.createElement("td");
        var tdPlayInfo = document.createElement("td");

        var thPlayEdit = document.createElement("th");
        var thPlayDelete = document.createElement("th");

        var inputPlayEdit = document.createElement("input");
        var inputPlayDelete = document.createElement("input");
        ////////////////////////////////////////////////////

        ///////////////////CREATE_PLAY_ROW//////////////////////////
        tableListPlays.appendChild(trPlay);

        trPlay.appendChild(thPlayId);
        thPlayId.appendChild(document.createTextNode(Play.playId));

        trPlay.appendChild(tdPlayName);
        tdPlayName.appendChild(document.createTextNode(Play.playName));

        trPlay.appendChild(tdPlayAuthor);
        tdPlayAuthor.appendChild(document.createTextNode(Play.author));

        trPlay.appendChild(tdPlayGenre);
        tdPlayGenre.appendChild(document.createTextNode(Play.genre));

        trPlay.appendChild(tdPlayInfo);
        tdPlayInfo.appendChild(document.createTextNode(Play.playInfo));

        trPlay.appendChild(thPlayEdit);
        thPlayEdit.appendChild(inputPlayEdit);
        inputPlayEdit.setAttribute("type", "button");
        inputPlayEdit.setAttribute("onclick", "javascript:initialEditPlay(" + Play.playId + ")");
        inputPlayEdit.setAttribute("value", "Edit");

        trPlay.appendChild(thPlayDelete);
        thPlayDelete.appendChild(inputPlayDelete);
        inputPlayDelete.setAttribute("type", "button");
        inputPlayDelete.setAttribute("onclick", "javascript:deletePlay(" + Play.playId + ")");
        inputPlayDelete.setAttribute("value", "Delete");
        /////////////////////////////////////////////////////////////

        // create dates of PLAY
        //////////////////////////////////////
        var ajaxHttpRequest = getXMLHttpRequest();
        ajaxHttpRequest.onreadystatechange = getReadyState_LIST_DATES_OF_PLAYS(ajaxHttpRequest, tableListPlays, Play);
        ajaxHttpRequest.open("GET", "datePlays" + "?action=listDatesOfPlay&playId=" + Play.playId + "&sid=" + Math.random(), false);
        ajaxHttpRequest.send(null);
        //////////////////////////////////////
    }
}
/////////////////////////////////////////////////////////////////


////////////////////DATEPLAY_FUNCTIONS///////////////////////////////
function deleteDatePlay(id) {

    ////////////////////////////////////////
    var ajaxHttpRequest = getXMLHttpRequest();
    ajaxHttpRequest.open("GET", "datePlays" + "?action=deleteDatePlay&id=" + id + "&sid=" + Math.random(), false);
    ajaxHttpRequest.send(null);
    ////////////////////////////////////////

    initialListPlays();
}
/////////////////////////////////////////////////////////////////


////////////////////AJAX_FUNCTIONS///////////////////////////////
function switchForm(nameForm) {

    document.getElementById('getListPlays').style.display = "none";
    document.getElementById('add_play').style.display = "none";
    document.getElementById('edit_play').style.display = "none";
    document.getElementById('getListGenres').style.display = "none";
    document.getElementById('add_genre').style.display = "none";
    document.getElementById('edit_genre').style.display = "none";
    document.getElementById('getListAuthors').style.display = "none";
    document.getElementById('add_author').style.display = "none";
    document.getElementById('edit_author').style.display = "none";

    switch (nameForm) {

        case 'getListPlays':
            document.getElementById('getListPlays').style.display = "initial";
            break;
        case 'add_play':
            document.getElementById('add_play').style.display = "initial";
            break;
        case 'edit_play':
            document.getElementById('edit_play').style.display = "initial";
            break;
        case 'getListGenres':
            document.getElementById('getListGenres').style.display = "initial";
            break;
        case 'add_genre':
            document.getElementById('add_genre').style.display = "initial";
            break;
        case 'edit_genre':
            document.getElementById('edit_genre').style.display = "initial";
            break;
        case 'getListAuthors':
            document.getElementById('getListAuthors').style.display = "initial";
            break;
        case 'add_author':
            document.getElementById('add_author').style.display = "initial";
            break;
        case 'edit_author':
            document.getElementById('edit_author').style.display = "initial";
            break;
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

function getReadyState_LISTPLAYS(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringPLAYS = xmlHttpRequest.responseText;
                var jsonObjectPLAYS = JSON.parse(jsonStringPLAYS);

                getListPlays(jsonObjectPLAYS);

            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_EDIT_PLAY(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringPLAYS = xmlHttpRequest.responseText;
                var jsonObjectPLAYS = JSON.parse(jsonStringPLAYS);

                document.getElementById("editPlayIdInput").value = jsonObjectPLAYS.id;
                document.getElementById("editPlayGenreIdSelect").value = jsonObjectPLAYS.genre.id;
                document.getElementById("editPlayAuthorIdSelect").value = jsonObjectPLAYS.author.id;
                document.getElementById("editPlayNameSelect").value = jsonObjectPLAYS.name;
                document.getElementById("editPlayInfoTextarea").value = jsonObjectPLAYS.info;

            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_LISTGENRES(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringGENRES = xmlHttpRequest.responseText;
                var jsonObjectGENRES = JSON.parse(jsonStringGENRES);

                getListGenres(jsonObjectGENRES);

            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_EDIT_GENRE(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringGENRE = xmlHttpRequest.responseText;
                var jsonObjectGENRE = JSON.parse(jsonStringGENRE);

                var editGenreIdInput = document.getElementById('editGenreIdInput');
                editGenreIdInput.setAttribute("value", jsonObjectGENRE.id);

                var editGenreNameInput = document.getElementById('editGenreNameInput');
                editGenreNameInput.setAttribute("value", jsonObjectGENRE.name);

            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_LISTAUTHORS(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringAUTHORS = xmlHttpRequest.responseText;
                var jsonObjectAUTHORS = JSON.parse(jsonStringAUTHORS);

                getListAuthors(jsonObjectAUTHORS);

            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_EDIT_AUTHOR(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringAUTHOR = xmlHttpRequest.responseText;
                var jsonObjectAUTHOR = JSON.parse(jsonStringAUTHOR);

                var editAuthorIdInput = document.getElementById('editAuthorIdInput');
                editAuthorIdInput.setAttribute("value", jsonObjectAUTHOR.id);

                var editAuthorNameInput = document.getElementById('editAuthorNameInput');
                editAuthorNameInput.setAttribute("value", jsonObjectAUTHOR.name);

                var editAuthorInfoInput = document.getElementById('editAuthorInfoInput');
                editAuthorInfoInput.setAttribute("value", jsonObjectAUTHOR.info);

            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_LISTGENRES_FOR_ADD_PLAY(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringGENRES = xmlHttpRequest.responseText;
                var jsonObjectGENRES = JSON.parse(jsonStringGENRES);

                var div = document.getElementById('div');
                var selectPlayGenres = div.getElementsByClassName('playGenre')[0];

                for (var key in jsonObjectGENRES) {

                    var option = document.createElement("option");

                    option.text = jsonObjectGENRES[key].name;
                    option.value = jsonObjectGENRES[key].id;
                    selectPlayGenres.appendChild(option);
                }
            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_LISTGENRES_FOR_EDIT_GENRE_OF_PLAY(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringGENRES = xmlHttpRequest.responseText;
                var jsonObjectGENRES = JSON.parse(jsonStringGENRES);

                var div = document.getElementById('edit_div');
                var selectPlayGenres = div.getElementsByClassName('playGenre')[0];

                for (var key in jsonObjectGENRES) {

                    var option = document.createElement("option");

                    option.text = jsonObjectGENRES[key].name;
                    option.value = jsonObjectGENRES[key].id;
                    selectPlayGenres.appendChild(option);
                }
            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_LISTAUTHORS_FOR_ADD_PLAY(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringAUTHORS = xmlHttpRequest.responseText;
                var jsonObjectAUTHORS = JSON.parse(jsonStringAUTHORS);

                var div = document.getElementById('div');
                var selectPlayAuthors = div.getElementsByClassName('playAuthor')[0];

                for (var key in jsonObjectAUTHORS) {

                    var option = document.createElement("option");

                    option.text = jsonObjectAUTHORS[key].name;
                    option.value = jsonObjectAUTHORS[key].id;
                    selectPlayAuthors.appendChild(option);
                }
            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_LISTAUTHORS_FOR_EDIT_AUTHOR_OF_PLAY(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringAUTHORS = xmlHttpRequest.responseText;
                var jsonObjectAUTHORS = JSON.parse(jsonStringAUTHORS);

                var div = document.getElementById('edit_div');
                var selectPlayAuthors = div.getElementsByClassName('playAuthor')[0];

                for (var key in jsonObjectAUTHORS) {

                    var option = document.createElement("option");

                    option.text = jsonObjectAUTHORS[key].name;
                    option.value = jsonObjectAUTHORS[key].id;
                    selectPlayAuthors.appendChild(option);
                }
            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_LIST_DATES_OF_PLAYS(xmlHttpRequest, tableListPlays, Play) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringDATES = xmlHttpRequest.responseText;
                var jsonObjectDATES = JSON.parse(jsonStringDATES);

                var trDate = document.createElement("tr");

                var tdDate = document.createElement("td");
                tdDate.setAttribute("colspan", "7");

                trDate.appendChild(tdDate);

                tableListPlays.appendChild(trDate);

                for (var key in jsonObjectDATES) {

                    var spanDate = document.createElement("span");

                    var aDate = document.createElement("a");

                    var inputDateDelete = document.createElement("input");
                    inputDateDelete.setAttribute("type", "button");
                    inputDateDelete.setAttribute("onclick", "javascript:deleteDatePlay(" + jsonObjectDATES[key].id + ")");
                    inputDateDelete.setAttribute("value", "X");


                    aDate.appendChild(document.createTextNode(jsonObjectDATES[key].date));
                    spanDate.appendChild(aDate);
                    spanDate.appendChild(document.createTextNode(" "));

                    spanDate.appendChild(inputDateDelete);
                    spanDate.appendChild(document.createTextNode(" "));

                    tdDate.appendChild(spanDate);
                    var playPrefix = "&genre=" + Play.genre + "&author=" + Play.author + "&authorInfo=" + Play.authorInfo + "&playInfo=" + Play.playInfo + "&playName=" + Play.playName;

                    aDate.setAttribute("href", "/datePlays?action=forwardDatesPlay&playId=" + Play.playId + "&datePlayId=" + jsonObjectDATES[key].id + playPrefix);
                }
            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}

function getReadyState_EDIT_LIST_DATES_OF_PLAYS(xmlHttpRequest) {
    return function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                var jsonStringDATES = xmlHttpRequest.responseText;
                var jsonObjectDATES = JSON.parse(jsonStringDATES);

                var editDiv = document.getElementById('edit_div');
                var trDatesOfPlay = document.getElementById("editDatesOfPlay");
                trDatesOfPlay.innerHTML = "";

                for (var key in jsonObjectDATES) {

                    var input1 = document.createElement('INPUT');
                    input1.setAttribute("type", "date");
                    input1.setAttribute("size", "3");
                    input1.setAttribute("class", "playDate");
                    input1.setAttribute("required", "");
                    input1.id = jsonObjectDATES[key].id;
                    input1.value = jsonObjectDATES[key].date;

                    var input2 = document.createElement('INPUT');
                    input2.setAttribute("type", "button");
                    input2.setAttribute("onclick", "removeDate(this); javascript:deleteDatePlay(" + jsonObjectDATES[key].id + ");");
                    input2.setAttribute("value", "X");

                    var cell = trDatesOfPlay.insertCell(-1);
                    cell.appendChild(input1);
                    var cell2 = trDatesOfPlay.insertCell(-1);
                    cell2.appendChild(input2);

                    editDiv.getElementsByClassName('count')[0].id++;
                }
            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}
/////////////////////////////////////////////////////////////////