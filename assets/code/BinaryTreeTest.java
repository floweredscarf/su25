/*
Lecture 4 Code, CS 61BL Summer 2019, UC Berkeley
@author Matthew Sit
 */

import org.junit.Test;

import java.util.Iterator;

import static org.junit.Assert.*;

public class BinaryTreeTest {

    @Test
    public void test() {
        Iterator<Integer> iter = orange().iterator();
        while (iter.hasNext()) {
            System.out.println(iter.next());
        }

        /*red().inorder();
        yellow().inorder();
        green().inorder();
        blue().inorder();
        gray().inorder();
        purple().inorder();
        white().inorder();
        orange().inorder();
        fail("\nPlease verify the outputs manually.\n" +
                "All of these samples are actually binary search trees,\n" +
                "and so the correct inorder output should be the numbers in ascending order.");
    */
    }

    private BinaryTree red() {
        BinaryTree result = new BinaryTree();
        result.root = null;

        return result;
    }

    private BinaryTree yellow() {
        BinaryTree result = new BinaryTree();
        result.root = new BinaryTree.Node(0);

        return result;
    }

    private BinaryTree green() {
        BinaryTree result = new BinaryTree();
        result.root = new BinaryTree.Node(2);
        BinaryTree.Node two = result.root;
        BinaryTree.Node one = new BinaryTree.Node(1);
        BinaryTree.Node zero = new BinaryTree.Node(0);

        two.left = one;
        one.parent = two;

        one.left = zero;
        zero.parent = one;

        return result;
    }

    private BinaryTree blue() {
        BinaryTree result = new BinaryTree();
        result.root = new BinaryTree.Node(0);
        BinaryTree.Node zero = result.root;
        BinaryTree.Node one = new BinaryTree.Node(1);
        BinaryTree.Node two = new BinaryTree.Node(2);

        zero.right = one;
        one.parent = zero;

        one.right = two;
        two.parent = one;

        return result;
    }

    private BinaryTree gray() {
        BinaryTree result = new BinaryTree();
        result.root = new BinaryTree.Node(2);
        BinaryTree.Node two = result.root;
        BinaryTree.Node zero = new BinaryTree.Node(0);
        BinaryTree.Node one = new BinaryTree.Node(1);

        two.left = zero;
        zero.parent = two;

        zero.right = one;
        one.parent = zero;

        return result;
    }

    private BinaryTree purple() {
        BinaryTree result = new BinaryTree();
        result.root = new BinaryTree.Node(0);
        BinaryTree.Node zero = result.root;
        BinaryTree.Node two = new BinaryTree.Node(2);
        BinaryTree.Node one = new BinaryTree.Node(1);

        zero.right = two;
        two.parent = zero;

        two.left = one;
        one.parent = two;

        return result;
    }

    private BinaryTree white() {
        BinaryTree result = new BinaryTree();
        result.root = new BinaryTree.Node(3);
        BinaryTree.Node three = result.root;
        BinaryTree.Node zero = new BinaryTree.Node(0);
        BinaryTree.Node one = new BinaryTree.Node(1);
        BinaryTree.Node two = new BinaryTree.Node(2);

        three.left = one;
        one.parent = three;

        one.left = zero;
        one.right = two;
        zero.parent = one;
        two.parent = one;

        return result;
    }

    private BinaryTree orange() {
        BinaryTree result = new BinaryTree();
        result.root = new BinaryTree.Node(4);
        BinaryTree.Node four = result.root;
        BinaryTree.Node two = new BinaryTree.Node(2);
        BinaryTree.Node zero = new BinaryTree.Node(0);
        BinaryTree.Node three = new BinaryTree.Node(3);
        BinaryTree.Node one = new BinaryTree.Node(1);
        BinaryTree.Node eight = new BinaryTree.Node(8);
        BinaryTree.Node six = new BinaryTree.Node(6);
        BinaryTree.Node nine = new BinaryTree.Node(9);
        BinaryTree.Node five = new BinaryTree.Node(5);
        BinaryTree.Node seven = new BinaryTree.Node(7);

        four.left = two;
        four.right = eight;
        two.parent = four;
        eight.parent = four;

        two.left = zero;
        two.right = three;
        zero.parent = two;
        three.parent = two;

        zero.right = one;
        one.parent = zero;

        eight.left = six;
        eight.right = nine;
        six.parent = eight;
        nine.parent = eight;

        six.left = five;
        six.right = seven;
        five.parent = six;
        seven.parent = six;

        return result;
    }
}
