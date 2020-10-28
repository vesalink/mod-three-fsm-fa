import { binaryModThreeFSM } from "../src/mod-three";

let __modThree: binaryModThreeFSM;

describe("Modulus 3 of binary FSM", () => {
  beforeEach(() => {
    __modThree = new binaryModThreeFSM();
  });

  it("constructor sets the current state correctly", () => {
    expect(__modThree.currentState).toBe(binaryModThreeFSM.INITIAL_STATE);
    expect(__modThree.finalState).toBeNull();
  });

  it("mod 3 of 1101 to be 1", () => {
    expect(__modThree.modThree("1101")).toBe(1);
  });

  it("mod 3 of 1110 to be 2", () => {
    expect(__modThree.modThree("1110")).toBe(2);
  });

  it("mod 3 of 1111 to be 0", () => {
    expect(__modThree.modThree("1111")).toBe(0);
  });

  it("mod 3 of 0 to be 0", () => {
    expect(__modThree.modThree("0")).toBe(0);
  });

  it("mod 3 of 1 to be 1", () => {
    expect(__modThree.modThree("1")).toBe(1);
  });

  it("mod 3 of null or empty string to be 0", () => {
    expect(__modThree.modThree("")).toBe(0);
  });

  it("mod 3 of 10101101110 to be 1", () => {
    expect(__modThree.modThree("10101101110")).toBe(1);
  });
});
