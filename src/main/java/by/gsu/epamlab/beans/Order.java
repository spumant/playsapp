package by.gsu.epamlab.beans;

public class Order {

    private int id;
    private int dateplayId;
    private String place;

    public Order() {
    }

    public Order(int id, int dateplayId, String place) {
        this.id = id;
        this.dateplayId = dateplayId;
        this.place = place;
    }

    public Order(int dateplayId, String place) {
        this.dateplayId = dateplayId;
        this.place = place;
    }

    public Order(String place) {
        this.place = place;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDateplayId() {
        return dateplayId;
    }

    public void setDateplayId(int dateplayId) {
        this.dateplayId = dateplayId;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }
}
