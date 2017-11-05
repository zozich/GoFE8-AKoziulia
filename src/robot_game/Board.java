package robot_game;

import java.util.ArrayList;
import java.util.List;

public class Board {
  private List<Point> holes = new ArrayList<>();
  private List<Point> boxes = new ArrayList<>();
  private List<Point> gold = new ArrayList<>();
  private List<Point> exits = new ArrayList<>();
  private List<Point> walls = new ArrayList<>();
  private Point me = new Point(8, 2);

  public Board() {
    holes.add(new Point(4, 1));
    holes.add(new Point(3, 3));
    holes.add(new Point(10, 3));
    holes.add(new Point(2, 5));
    holes.add(new Point(4, 6));
    holes.add(new Point(5, 10));

    boxes.add(new Point(6, 2));
    boxes.add(new Point(2, 4));
    boxes.add(new Point(4, 8));
    boxes.add(new Point(4, 11));

    gold.add(new Point(10, 4));
    gold.add(new Point(2, 7));
    gold.add(new Point(6, 10));
    gold.add(new Point(3, 11));

    exits.add(new Point(5, 6));

    // outer walls
    walls.add(new Point(0, 1));
    walls.add(new Point(0, 2));
    walls.add(new Point(0, 3));
    walls.add(new Point(0, 4));
    walls.add(new Point(0, 5));
    walls.add(new Point(0, 6));
    walls.add(new Point(0, 7));
    walls.add(new Point(0, 8));
    walls.add(new Point(1, 9));
    walls.add(new Point(2, 9));
    walls.add(new Point(2, 10));
    walls.add(new Point(1, 11));
    walls.add(new Point(1, 12));
    walls.add(new Point(1, 13));
    walls.add(new Point(2, 14));
    walls.add(new Point(3, 14));
    walls.add(new Point(4, 14));
    walls.add(new Point(5, 14));
    walls.add(new Point(6, 13));
    walls.add(new Point(6, 12));
    walls.add(new Point(7, 12));
    walls.add(new Point(8, 11));
    walls.add(new Point(8, 10));
    walls.add(new Point(9, 11));
    walls.add(new Point(10, 10));
    walls.add(new Point(10, 9));
    walls.add(new Point(9, 8));
    walls.add(new Point(8, 8));
    walls.add(new Point(7, 8));
    walls.add(new Point(7, 7));
    walls.add(new Point(8, 7));
    walls.add(new Point(9, 7));
    walls.add(new Point(10, 7));
    walls.add(new Point(11, 6));
    walls.add(new Point(11, 5));
    walls.add(new Point(11, 4));
    walls.add(new Point(11, 3));
    walls.add(new Point(11, 2));
    walls.add(new Point(11, 1));
    walls.add(new Point(10, 0));
    walls.add(new Point(9, 0));
    walls.add(new Point(8, 0));
    walls.add(new Point(7, 0));
    walls.add(new Point(6, 0));
    walls.add(new Point(5, 0));
    walls.add(new Point(4, 0));
    walls.add(new Point(3, 0));
    walls.add(new Point(2, 0));
    walls.add(new Point(1, 0));

    //inner walls
    walls.add(new Point(4, 5));
    walls.add(new Point(5, 5));
    walls.add(new Point(6, 5));
    walls.add(new Point(7, 5));
    walls.add(new Point(8, 5));
    walls.add(new Point(9, 5));
    walls.add(new Point(9, 4));
    walls.add(new Point(8, 4));
    walls.add(new Point(7, 4));
    walls.add(new Point(6, 4));
    walls.add(new Point(5, 3));
    walls.add(new Point(4, 3));
    walls.add(new Point(4, 4));
  }

  public List<Point> getHoles() {
    return holes;
  }

  public List<Point> getBoxes() {
    return boxes;
  }

  public List<Point> getExits() {
    return exits;
  }

  public List<Point> getWalls() {
    return walls;
  }

  public List<Point> getGold() {
    return gold;
  }

  public Point getMe() {
    return me;
  }

  public boolean gameWon() {
    return me.equals(exits.get(0));
  }

  public void applyCommand(Command command, Direction direction) {
    if (command == Command.DO_NOTHING) {
      return;
    }

    if (command == Command.GO) {
      switch (direction) {
        case UP:
          this.getMe().setY(this.getMe().getY()-1);
          break;
        case DOWN:
          this.getMe().setY(this.getMe().getY()+1);
          break;
        case LEFT:
          this.getMe().setX(this.getMe().getX()-1);
          break;
        case RIGHT:
          this.getMe().setX(this.getMe().getX()+1);
          break;
      }
    }

    if (command == Command.JUMP_TO) {
      switch (direction) {
        case UP:
          this.getMe().setY(this.getMe().getY()-2);
          break;
        case DOWN:
          this.getMe().setY(this.getMe().getY()+2);
          break;
        case LEFT:
          this.getMe().setX(this.getMe().getX()-2);
          break;
        case RIGHT:
          this.getMe().setX(this.getMe().getX()+2);
          break;
      }
    }

    if (this.gold.contains(me)) {
      this.gold.remove(me);
    }
  }
}
