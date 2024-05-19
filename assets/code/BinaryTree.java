/*
Lecture 4 Code, CS 61BL Summer 2019, UC Berkeley
@author Matthew Sit
 */

import java.util.Iterator;

public class BinaryTree implements Iterable<Integer> {

    Node root;

    @Override
    public Iterator<Integer> iterator() {
        return new MyIterator();
    }

    static class Node {
        int item;
        Node left, right, parent;

        public Node(int item) {
            this.item = item;
        }
    }

    class MyIterator implements Iterator<Integer> {

        Node curr;

        public MyIterator() {
            curr = root;

            while (curr.left != null) {
                curr = curr.left;
            }
        }

        @Override
        public boolean hasNext() {
            return curr != null;
        }

        @Override
        public Integer next() {

            Integer result = curr.item;

            if (curr.right != null) {
                curr = curr.right;

                while (curr.left != null) {
                    curr = curr.left;
                }
            } else {
                while (curr.parent != null && curr.parent.right == curr) {
                    curr = curr.parent;
                }
                curr = curr.parent;
            }
            return result;
        }
    }
}
