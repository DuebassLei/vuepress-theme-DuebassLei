---
title: 二叉树及DFS,BFS
date: 2020-12-26
categories:
  - Algorithm
tags:
  - algorithm
---

## 生成`leetcode`二叉树

在刷`leetcode `很多树题目的时候经常遇到这种情况:

**示例：**
二叉树：`[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

发现测试的例子是一个数组 ，输入的数据是一个树形结构，每次手动的去创建比较麻烦，写了一个数组到树的一个小工具

由于其中有`null `的情况所以用的是装箱类，实现过程也比较简单，就是先创建根节点然后在创建左右子树，在创建左右子树的时候依次的把左右子树加入到一个队列，如果为空就跳过，每次从队列中取出一个节点依次的把左右子树加入到一个队列,这样一直遍历下去直到把数组遍历完了。



```java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) {
        this(val,null,null);
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    /**
     * 构建 leetcode 二叉树
     * @param nums
     * */
    public static TreeNode generateTreeNode(Integer[] nums) {

        if(nums==null||nums.length==0) {
            return null;
        }

        int len=nums.length;
        int index=0;

        //初始化第一个节点
        TreeNode head=new TreeNode(nums[index]);

        Deque<TreeNode> nodeQueue = new LinkedList<>();
        //插入元素，失败返回null或false
        nodeQueue.offer(head);

        TreeNode cur;
        while (index<len){
            index++;
            if (index>=len) {
                return head;
            }
            //移除元素
            cur = nodeQueue.poll();

            Integer left=nums[index];
            if (left!=null){
                cur.left=new TreeNode(left);
                //插入
                nodeQueue.offer(cur.left);
            }

            index++;
            if (index>=len) {
                return head;
            }
            Integer right=nums[index];
            if (right!=null){
                cur.right=new TreeNode(right);
                //插入
                nodeQueue.offer(cur.right);
            }
        }
        return head;
    }

    public static void main(String[] args) {
        Integer[] data1={3,9,20,null,null,15,7};
        TreeNode node =  generateTreeNode(data1);
    } 
}

```



## `BFS`和`DFS`

### 深度优先遍历（`DFS`）

- 递归写法（容易内存溢出）

```java
    /**
     * DFS 深度优先遍历 (递归)
     * @param root
     * */
    public  static void dfsPreOrderTraverse(TreeNode root) {
        if (root == null)
        {
            return;
        }
        System.out.print(root.val + " ");
        dfsPreOrderTraverse(root.left);
        dfsPreOrderTraverse(root.right);
    }
```



- 栈写法（推荐）

```java
    /**
     * DFS 深度优先遍历（stack栈）
     * @param root
     * */
    public static void dfsWithStack(TreeNode root){
        if(root == null){
            return;
        }
        Stack<TreeNode> stack = new Stack<>();
        //进栈
        stack.push(root);
        while (!stack.isEmpty()){
            //出栈
            TreeNode node = stack.pop();
            System.out.println(node.val);
            if(node.right!= null){
                stack.push(node.right);
            }
            if(node.left!= null){
                stack.push(node.left);
            }
        }
    }
```



### 广度优先遍历（`BFS`）

```java
    public static void bfsTree(TreeNode root){
        if(root == null){
            return;
        }
        Queue<TreeNode> queue = new ArrayDeque<>();
        //入队
        queue.add(root);
        while (!queue.isEmpty()){
            //出队
            int size = queue.size();
            TreeNode node = queue.poll();
            System.out.println("遍历元素"+node.val);
            for (int i = 0; i < size; i++) {
                if(node.left != null){
                    queue.add(node.left);
                }
                if(node.right != null){
                    queue.add(node.right);
                }
            }
        }
    }
```

- 输出

```
遍历元素3
遍历元素9
遍历元素20
遍历元素15
遍历元素7
```

`BFS`常用场景：

- 二叉树层序遍历
- 求解最短路径问题

##  层次遍历

层次遍历并记录每层树节点并记录每层树节点（`leetcode 102`）

```java
	/**
     * BFS 层次遍历记录每层树的节点
     * */
    public static List<List<Integer>> bfsSaveTreeNode(TreeNode root){
        List<List<Integer>> res =new ArrayList<>();
        Queue<TreeNode> queue = new ArrayDeque<>();
        if(root!=null){
            //入队
            queue.add(root);
        }
        while (!queue.isEmpty()){
            //出队
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);
                if(node.left != null){
                    queue.add(node.left);
                }
                if(node.right != null){
                    queue.add(node.right);
                }
            }
            res.add(level);
        }
        return res;
    }

```

- 输出

```
[3]
[9, 20]
[15, 7]
```







## 树最大深度

```java
 /**
     * 获取树的最大深度
     * @param root
     * */
    public static int getTreeDepth(TreeNode root){
        int leftDepth = 0;
        int rightDepth = 0;
        if(root == null){
            return 0;
        }
        if(root.left != null){
            leftDepth =  getTreeDepth(root.left) + 1;
        }
        if(root.right != null){
            rightDepth =  getTreeDepth(root.right) + 1;
        }
        return Math.max(leftDepth,rightDepth);
    }
```

## 叶子节点个数

```java
   /**
     * 求二叉树种叶子节点的个数
     *
     * @param root
     * @return
     */
    public static int getLeafNum(TreeNode root) {
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
```



## K层节点数

```java
    /**
     * 求第K层节点个数
     *
     * @param root
     * @param k
     * @return
     */
    public static int getNumForKLevel(TreeNode root, int k) {
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
```

