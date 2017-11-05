package robot_game;

import java.util.Collection;
import java.util.Deque;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class Main {

  public static void main(String[] args) throws InterruptedException {
    Board board = new Board();

    int moves = 0;
    while (!board.gameWon()) {
      System.out.println(board.getMe().getX() + " " + board.getMe().getY());
      Thread.sleep(1000);
      Wrapper wrapper = solution(board);
      board.applyCommand(wrapper.getCommand(), wrapper.getDirection());
      moves++;
    }

    System.out.println(board.getMe().getX() + " " + board.getMe().getY());
    System.out.println(moves);
  }

  private static Set<Point> obstacles = new HashSet<>();
  private static Set<Point> walls = new HashSet<>();

  private static Deque<Wrapper> commandList = new LinkedList<>();
  private static Point goal;
  private static boolean boardInit = false;

  private static Wrapper solution(Board board) {
    if (!boardInit) {
      obstacles.addAll(board.getBoxes());
      obstacles.addAll(board.getHoles());
      obstacles.addAll(board.getWalls());

      walls.addAll(board.getWalls());

      boardInit = true;
      return new Wrapper(Command.DO_NOTHING, null);
    }

    List<Point> goals = board.getGold();
    if (goals.isEmpty()) {
      goals = board.getExits();
      obstacles.remove(board.getExits().get(0));
    } else {
      obstacles.add(board.getExits().get(0));
    }

    Point me = board.getMe();

    if (goal == null || !goals.contains(goal) || commandList.isEmpty()) {
      goal = getNearest(board.getMe(), goals);
      calculateDirection(me);
    }

    return commandList.pollLast();
  }

  private static void calculateDirection(Point me) {
    Set<Point> visited = new HashSet<>();
    Deque<Point> path = new LinkedList<>();
    Deque<Wrapper> commands = new LinkedList<>();
    visited.add(me);

    while (!me.equals(goal)) {
      if (canGoLeft(me)) {
        Point next = new Point(me.getX() - 1, me.getY());
        if (!visited.contains(next)) {
          commands.push(new Wrapper(Command.GO, Direction.LEFT));
          path.push(next);
          visited.add(next);
          me = next;
          continue;
        }
      }

      if (canJumpLeft(me)) {
        Point next = new Point(me.getX() - 2, me.getY());
        if (!visited.contains(next)) {
          commands.push(new Wrapper(Command.JUMP_TO, Direction.LEFT));
          path.push(next);
          visited.add(next);
          me = next;
          continue;
        }
      }

      if (canGoRight(me)) {
        Point next = new Point(me.getX() + 1, me.getY());
        if (!visited.contains(next)) {
          commands.push(new Wrapper(Command.GO, Direction.RIGHT));
          path.push(next);
          visited.add(next);
          me = next;
          continue;
        }
      }

      if (canJumpRight(me)) {
        Point next = new Point(me.getX() + 2, me.getY());
        if (!visited.contains(next)) {
          commands.push(new Wrapper(Command.JUMP_TO, Direction.RIGHT));
          path.push(next);
          visited.add(next);
          me = next;
          continue;
        }
      }

      if (canGoUp(me)) {
        Point next = new Point(me.getX(), me.getY() - 1);
        if (!visited.contains(next)) {
          commands.push(new Wrapper(Command.GO, Direction.UP));
          path.push(next);
          visited.add(next);
          me = next;
          continue;
        }
      }

      if (canJumpUp(me)) {
        Point next = new Point(me.getX(), me.getY() - 2);
        if (!visited.contains(next)) {
          commands.push(new Wrapper(Command.JUMP_TO, Direction.UP));
          path.push(next);
          visited.add(next);
          me = next;
          continue;
        }
      }

      if (canGoDown(me)) {
        Point next = new Point(me.getX(), me.getY() + 1);
        if (!visited.contains(next)) {
          commands.push(new Wrapper(Command.GO, Direction.DOWN));
          path.push(next);
          visited.add(next);
          me = next;
          continue;
        }
      }

      if (canJumpDown(me)) {
        Point next = new Point(me.getX(), me.getY() + 2);
        if (!visited.contains(next)) {
          commands.push(new Wrapper(Command.JUMP_TO, Direction.DOWN));
          path.push(next);
          visited.add(next);
          me = next;
          continue;
        }
      }

      path.poll();
      me = path.peek();
      commands.poll();
    }

    commandList = commands;
  }

  private static boolean canGoLeft(Point me) {
    return !obstacles.contains(new Point(me.getX() - 1, me.getY()));
  }

  private static boolean canGoRight(Point me) {
    return !obstacles.contains(new Point(me.getX() + 1, me.getY()));
  }

  private static boolean canGoUp(Point me) {
    return !obstacles.contains(new Point(me.getX(), me.getY() - 1));
  }

  private static boolean canGoDown(Point me) {
    return !obstacles.contains(new Point(me.getX(), me.getY() + 1));
  }

  private static boolean canJumpLeft(Point me) {
    return !walls.contains(new Point(me.getX() - 1, me.getY())) && !obstacles.contains(new Point(me.getX() - 2, me.getY()));
  }

  private static boolean canJumpRight(Point me) {
    return !walls.contains(new Point(me.getX() + 1, me.getY())) && !obstacles.contains(new Point(me.getX() + 2, me.getY()));
  }

  private static boolean canJumpUp(Point me) {
    return !walls.contains(new Point(me.getX(), me.getY() - 1)) && !obstacles.contains(new Point(me.getX(), me.getY() - 2));
  }

  private static boolean canJumpDown(Point me) {
    return !walls.contains(new Point(me.getX(), me.getY() + 1)) && !obstacles.contains(new Point(me.getX(), me.getY() + 2));
  }

  private static Point getNearest(Point me, Collection<Point> points) {
    double minDistance = Double.MAX_VALUE;
    Point nearest = null;

    for (Point point : points) {
      double distance = distance(me, point);
      if (distance < minDistance) {
        nearest = point;
        minDistance = distance;
      }
    }

    return nearest;
  }

  private static double distance(Point point1, Point point2) {
    return Math.sqrt(Math.pow(point1.getX() - point2.getX(), 2) + Math.pow(point1.getY() - point2.getY(), 2));
  }

  static class Wrapper {
    private Command command;
    private Direction direction;

    public Wrapper(Command command, Direction direction) {
      this.command = command;
      this.direction = direction;
    }

    public Command getCommand() {
      return command;
    }

    public Direction getDirection() {
      return direction;
    }
  }
}
