import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { Tree, prettyPrint } from "./main.js";

Deno.test(function buildEmptyTreeTest() {
  const arr: number[] = [];
  const tree = new Tree(arr);
  assertEquals(tree.root, null);
  assertEquals(prettyPrint(tree.root), undefined);
});

Deno.test(function singleNodeTreeTest() {
  const arr = [0];
  const tree = new Tree(arr);

  assertEquals(tree.root?.data, 0);
  assertEquals(tree.root?.left, null);
  assertEquals(tree.root?.right, null);
});

Deno.test(function checkDuplicateTest() {
  const arr = [0, 0];
  const tree = new Tree(arr);

  assertEquals(tree.root?.data, 0);
  assertEquals(tree.root?.left, null);
  assertEquals(tree.root?.right, null);
});

Deno.test(function twoNodesTest() {
  const arr = [0, 1];
  const tree = new Tree(arr);

  assertEquals(tree.root?.data, 1);
  assertEquals(tree.root?.left.data, 0);
  assertEquals(tree.root?.right, null);
});

Deno.test(function unorderdTest() {
  const arr = [4, 3, 2, 1, 0];
  const tree = new Tree(arr);

  assertEquals(tree.root?.data, 2);
  assertEquals(tree.root?.left.data, 1);
  assertEquals(tree.root?.left.right, null);
  assertEquals(tree.root?.left.left.data, 0);
  assertEquals(tree.root?.left.left.right, null);

  assertEquals(tree.root?.right.data, 4);
  assertEquals(tree.root?.right.right, null);
  assertEquals(tree.root?.right.left.data, 3);
  assertEquals(tree.root?.right.left.right, null);
});

Deno.test(function longArrTest() {
  const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(arr);

  prettyPrint(tree.root);
});
