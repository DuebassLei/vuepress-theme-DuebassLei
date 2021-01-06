---
title: 二叉树遍历
date: 2021-01-03
categories:
  - Algorithm
tags:
  - algorithm
---

## 二叉树遍历

- 深度优先遍历（`Depth First Search`, 简称 `DFS`） 
- 广度优先遍历（`Breath First Search`,简称 `BFS`）

>是图论中两种非常重要的算法，生产上广泛用于拓扑排序，寻路（走迷宫），搜索引擎，爬虫等，也频繁出现在 `leetcode`，高频面试题中。


```java
import java.util.*;

/**
 * @author DuebassLei
 * @version 1.0
 * @date 2021/1/4 17:12
 * 二叉树
 */
public class BinTree {
    public BinTree left;
    public BinTree right;
    /**
     * 根节点
     * */
    public BinTree root;
    /**
     * 数据域
     * */
    public Object data;
    /**
     * 存节点信息
     * */
    public List<BinTree> datas;

    public BinTree(BinTree left, BinTree right, Object data) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
    /**
     * 将初始的左右孩子值为空
     * */
    public BinTree(Object data){
        this(null,null,data);
    }

    public BinTree() {

    }
    /**
     * 通过一维数组构建出二叉树
     * @param objs
     * */
    public void createBinTree(Object[] objs){
        datas = new ArrayList<BinTree>();
        //将一个数组的值依次转换为BinTree节点
        for (Object o: objs) {
            datas.add(new BinTree(o));
        }
        root = datas.get(0);

        for (int i = 0; i < objs.length/2; i++) {
            //左孩子
            datas.get(i).left = datas.get(i*2 + 1);
            //避免偶数的时候，下标越界
            if(i*2+2 < datas.size()){
                datas.get(i).right = datas.get(i*2 + 2);
            }
        }
    }
    /**
     * 深度优先遍历（dfs） 递归 先序遍历
     * 特点：
     * 递归表达性好，但是如果层级过深，很容易导致栈溢出
     * @param node
     * */
    public  void dfsPreOrderTraverse(BinTree node) {
        if (node == null)
        { return;}
        System.out.print(node.data + " ");
        dfsPreOrderTraverse(node.left);
        dfsPreOrderTraverse(node.right);
    }
    /**
     * 深度优先遍历（dfs） 栈（推荐）
     * @param root
     * */
    public  void dfsStack(BinTree root) {
        if(root == null){
            return;
        }
        Stack<BinTree> stack = new Stack<>();

        //先将根节点压栈
        stack.push(root);
        while(!stack.isEmpty()){
            //出栈
            BinTree treeNode = stack.pop();

            //遍历节点
            // process(treeNode);
            System.out.println(treeNode.data);
            //先压右节点
            if(treeNode.right != null){
                stack.push(treeNode.right);
            }

            //在压左节点
            if(treeNode.left != null){
                stack.push(treeNode.left);
            }
        }

    }

    /**
     * 广度优先遍历（bfs） 使用队列实现
     * @param root
     * */
    public  void bfsQueue(BinTree root) {
        if(root == null){
            return;
        }
        Queue<BinTree> stack = new LinkedList<>();
        stack.add(root);
        int i= 0 ;
        while(!stack.isEmpty()){
            BinTree node = stack.poll();
            System.out.println("value"+ node.data);
            if(node.left != null ){
                stack.add(node.left);
            }
            if(node.right != null ){
                stack.add(node.right);
            }
        }
        System.out.println(stack);
    }

    /**
     * 获取树的最大深度
     * @param root
     * @return
     * */
    public int getMaxTreeDepth(BinTree root){
        int leftDepth = 0;
        int rightDepth = 0;
        if(root == null ){
            return  0;
        }
        if(root.left != null){
            leftDepth =  getMaxTreeDepth(root.left) +1;
        }
        if(root.left != null){
            rightDepth =  getMaxTreeDepth(root.left) +1;
        }
        return Math.max(leftDepth,rightDepth);
    }

    /**
     * 获取树的最小深度
     * 特点：
     *  当只有一个节点（左子树、右子树为空）的二叉树，最小深度为1
     * @param root
     * @return
     * */
    public int getMinTreeDepth(BinTree root){
        if(root == null ){
            return  0;
        }
        int minDepth = Integer.MAX_VALUE;
        if(root.left == null && root.right == null){
            return  1;
        }
        if(root.left != null){
            minDepth = Math.min(getMinTreeDepth(root.left),minDepth);
        }
        if(root.left != null){
            minDepth = Math.min(getMinTreeDepth(root.right),minDepth);
        }
        return minDepth + 1;
    }

    /**
     * 求二叉树种叶子节点的个数
     *
     * @param root
     * @return
     */
    public  int getLeafNum(BinTree root) {
        if (root == null) {
            return 0;
        }
        if (root.left == null && root.right == null) {
            return 1;
        }
        int leftNum = getLeafNum(root.left);
        int rightNum = getLeafNum(root.right);
        return leftNum + rightNum;
    }

    /**
     * 求第K层节点个数
     *
     * @param root
     * @param k
     * @return
     */
    public  int getNumForKLevel(BinTree root, int k) {
        if (root == null || k < 1) {
            return 0;
        }
        if (k == 1) {
            return 1;
        }
        int leftNum = getNumForKLevel(root.left, k - 1);
        int rightNum = getNumForKLevel(root.right, k - 1);
        return leftNum + rightNum;
    }

    /**
     * 获取树的节点个数
     * @param  root
     * */
    public int getTreeNodeNum(BinTree root) {
        if (root == null) {
            return 0;
        }
        return getTreeNodeNum(root.left) + getTreeNodeNum(root.right) + 1;
    }


    public static void main(String[] args) {
        BinTree bintree=new BinTree();
        Object []a={2,4,5,7,1,6,12,32,51,22};
        bintree.createBinTree(a);

        //dfs 深度优先遍历
         //bintree.dfsPreOrderTraverse(bintree.root);
        //bintree.dfsStack(bintree.root);

        //bfs 广度优先遍历
        bintree.bfsQueue(bintree.root);

        //获取树的最大深度
        //System.out.println(bintree.getMaxTreeDepth(bintree.root));

//       //获取叶子节点数据
//        bintree.getLeafNum(bintree.root);
//       //求第K层节点个数
//        bintree.getNumForKLevel(bintree.root,4);
//        //获取树的节点个数
//        System.out.println( bintree.getTreeNodeNum(bintree.root));

    }
}
```