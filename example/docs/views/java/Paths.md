---
title: Java 文件处理Paths&Files
date: 2020-01-03
categories:
  - Java
tags:
  - java
---
## 文件路径的描述
```java
    public static void main(String[] args) {
        // 文件路径转path对象
        Path filePath = Paths.get("E:\\background.jpg");
        // 1. 获取文件名
        String fileName = filePath.getFileName().toString();
        System.out.println("文件名："+fileName);
        // 2. 获取父路径
        String parentPath = filePath.getParent().toString();
        System.out.println("父路径："+parentPath);
        // 3. 获取文件层级
        int fileLevel = filePath.getNameCount();
        System.out.println("文件层级："+fileLevel);
        // 4. 获取指定层级的文件（夹）名
        String levelName  =  filePath.getName(0).toString();
        System.out.println("指定层级的文件（夹）名："+levelName);

        // 5.获取同级目录其他文件(夹)
        String otherFile =  filePath.resolveSibling("RF").toString();
        System.out.println("同级目录其他文件(夹)："+otherFile);

        // 6. 获取文件绝对路径
        String absPath = filePath.toAbsolutePath().toString();
        System.out.println("文件绝对路径:"+absPath);

    }

```

### 输出
 
![](https://user-gold-cdn.xitu.io/2020/1/3/16f69cb434c3a17a?w=1492&h=387&f=png&s=48315)

## 文件操作
```java
   public static void main(String[] args) throws IOException {
       /**
        * 文件处理
        * */
        // 文件路径转path对象
        Path dirPath = Paths.get("E:\\");
        // boolean 判断文件存在
        Files.exists(dirPath);
        // boolean 判断文件不存在
        Files.notExists(dirPath);
        // 校验是否为文件夹
        Files.isDirectory(dirPath);
        // 校验是否为文件
        Files.isRegularFile(dirPath.resolve("background.jpg"));
        // 文件(夹)复制 E://aaa.txt == E://bbb.txt
        Files.copy(dirPath.resolve("aaa.txt"), dirPath.resolve("bbb.txt"));

        /**
         * 文件读写
         * */
        Path filePath = Paths.get("E://test.txt");

        // 读所有行文本，默认使用 UTF-8
        Files.readAllLines(filePath, Charset.defaultCharset());

        // 读字节数组
        Files.readAllBytes(filePath);

        // 写文本
        Files.write(filePath, Arrays.asList("line1", "line2"));

        // 写字节数组
        Files.write(filePath, new byte[]{});

        // 更灵活的写入数据，参数: 1.String, 2.Byte byte[]
        Files.newBufferedWriter(filePath).write("我是test数据");

        // 获取输入流 InputStream
        Files.newInputStream(filePath);

        //获取输出流 OutputStream
        Files.newOutputStream(filePath);
    }
```

## Java 8 Files 文件读写
```java
public static void main(String[] args) throws IOException {
       /**
        * 文件读写demo
        * */
        Path filePath=Paths.get("E://demo.txt");
        //创建文件
        if(!Files.exists(filePath)) {
            try {
                Files.createFile(filePath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        //创建BufferedWriter
        try {
            BufferedWriter bfw=Files.newBufferedWriter(filePath);
            bfw.write("Files类的API:newBufferedWriter");
            bfw.flush();
            bfw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        //创建BufferedReader
        try {
            BufferedReader bfr=Files.newBufferedReader(filePath);
            System.out.println(bfr.readLine());
            bfr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
```

![](https://user-gold-cdn.xitu.io/2020/1/3/16f69e826368d9a0?w=1776&h=214&f=png&s=29473)