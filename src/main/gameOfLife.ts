export class GameOfLife {
  private grid;

  constructor(initialGrid: number[][]) {
    this.grid = initialGrid;
  }

  public print() {
    return this.grid;
  }
}
