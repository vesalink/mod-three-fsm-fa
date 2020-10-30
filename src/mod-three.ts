export class binaryModThreeFSM {
  public static INITIAL_STATE: string = "S0";
  public currentState: string;
  public finalState: string | null;

  constructor() {
    this.currentState = binaryModThreeFSM.INITIAL_STATE;
    this.finalState = null;
  }

  /**
   * Calculate modulus 3 of binary representation of integer
   * Uses Finite State Machine (FSM)
   * Depends of the final state we can calculate the modulus 3: "S0" - 0, "S1" - 1, "S2" - 2
   *
   * @param {string} input String of 1's or 0's - binary
   *
   * @returns {number} Result of modulus 3 of representation of integer
   */
  public modThree(input: string): number {
    if (input === "" || input === null) {
      return 0;
    }
    const stringArray: Array<string> = [...input];
    stringArray.map((bit) => {
      this.finalState = this.transitions(bit, this.currentState);
    });
    return this.finalState === "S0" ? 0 : this.finalState === "S1" ? 1 : 2;
  }

  /**
   * Transition function
   *
   * @param {string} input Bit as a string "1" or "0"
   *
   * @param {string} currentState Current state of Finite automation
   *
   * @returns {string} Next state of Finite automation
   */
  public transitions(input: string, currentState: string): string {
    if (
      (currentState === "S0" && input === "0") ||
      (currentState === "S1" && input === "1")
    ) {
      this.currentState = "S0";
    } else if (
      (currentState === "S0" && input === "1") ||
      (currentState === "S2" && input === "0")
    ) {
      this.currentState = "S1";
    } else if (
      (currentState === "S1" && input === "0") ||
      (currentState === "S2" && input === "1")
    ) {
      this.currentState = "S2";
    }
    return this.currentState;
  }
}
