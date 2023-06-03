package by.gsu.epamlab.beans;

public class Author {

    private int id;
    private String name;
    private String info;

    public Author() {
    }

    public Author(int id, String name, String info) {
        this.id = id;
        this.name = name;
        this.info = info;
    }

    public Author(String name, String info) {
        this.name = name;
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

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

}
