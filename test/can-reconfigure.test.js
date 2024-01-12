import { describe, it, expect } from "vitest";
import canReconfigure from "../src/can-reconfigure";

describe("canReconfigure", () => {
    it("should be a function", () => {
        expect(canReconfigure).toBeTypeOf("function");
    });
    it("should throw if first parameter is missing", () => {
        expect(() => canReconfigure()).throw();
    });
    it("should throw if first parameter is not a string", () => {
        expect(() => canReconfigure(2)).throw();
    });
    it("should throw if second parameter is not a string", () => {
        expect(() => canReconfigure("a")).throw();
    });
    it("should return a boolean", () => {
        expect(canReconfigure('a', 'b')).toBeTypeOf("boolean");
    });
    it("should return false if strings provided have different length", () => {
        expect(canReconfigure('assssss', 'b')).toBe(false);
    });
    it("should return false if strings provided have different length even with same unique letters", () => {
        expect(canReconfigure('aab', 'ab')).toBe(false);
    });
    it("should return false if strings provided have different number of unique letters", () => {
        expect(canReconfigure('abc', 'ddd')).toBe(false);
    });
    it("should return false if strings provided have different order of transformation", () => {
        expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
    });
})
