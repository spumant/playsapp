package by.gsu.epamlab.beans;

public class Play {

    private int id;
    private String name;
    private Author author;
    private Genre genre;
    private String info;

    public Play() {
    }

    public Play(int id, String name, Author author, Genre genre, String info) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.info = info;
    }

    public Play(String name, Author author, Genre genre, String info) {
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.info = info;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
