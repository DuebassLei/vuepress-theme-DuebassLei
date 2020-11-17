---
title: Java 常用工具
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
##  FileUtil

### 读取流到字节数组

```java
	/**
	 * 读取流到字节数组
	 * 
	 * @param is
	 * @return
	 */
	public static byte[] readByte(InputStream is) {
		try {
			byte[] r = new byte[is.available()];
			is.read(r);
			return r;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
```

###  读取文件到字节数组

```java
	/**
	 * 读取文件到字节数组
	 * 
	 * @param fileName
	 * @return
	 */
	public static byte[] readByte(String fileName) {
		try (FileInputStream fis = new FileInputStream(fileName);){
			byte[] r = new byte[fis.available()];
			fis.read(r);
			return r;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
```

### 写字节数组到文件

```java
	/**
	 * 写字节数组到文件
	 * 
	 * @param fileName
	 * @param b
	 * @return
	 */
	public static boolean writeByte(String fileName, byte[] b) {
		try (BufferedOutputStream fos = new BufferedOutputStream(new FileOutputStream(fileName));){
			File file=new File(fileName);
			if(!file.exists()){
				file.createNewFile();
			}
			fos.write(b);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
```

### 文件拷贝

```java
	/**
	 * 文件拷贝
	 * 
	 * @param from 源文件路径
	 * @param to 拷贝文件路径
	 * @return
	 */
	public static boolean copyFile(String from, String to) {
		File fromFile = new File(from);
		File toFile = new File(to);
		try (FileInputStream fis = new FileInputStream(fromFile);FileOutputStream fos = new FileOutputStream(toFile);){
			int bytesRead;
			byte[] buf = new byte[4 * 1024]; // 4K buffer
			while ((bytesRead = fis.read(buf)) != -1) {
				fos.write(buf, 0, bytesRead);
			}

			fos.flush();
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}
		return true;

	}
```

### 获得文件大小

```java
/**
 * 取得文件大小
 * 
 * @return 返回文件大小
 * @throws IOException
 */
public static String getFileSize(File file) throws IOException {
   if (file.isFile()) {
      int size = 0;
      try (FileInputStream fis = new FileInputStream(file);){
         size = fis.available();
      } catch (Exception e) {
         e.printStackTrace();
      }

      return getSize((double) size);
   }
   return "";
}
```

### 根据字节大小获取带单位的大小

```java
/**
	 * 根据字节大小获取带单位的大小。
	 * 
	 * @param size
	 * @return
	 */
	public static String getSize(double size) {
		DecimalFormat df = new DecimalFormat("0.00");
		if (size > 1024 * 1024) {
			double ss = size / (1024 * 1024);
			return df.format(ss) + " M";
		} else if (size > 1024) {
			double ss = size / 1024;
			return df.format(ss) + " KB";
		} else {
			return size + " bytes";
		}
	}
```

## HttpUtil

### 文件下载

```java
/**
 * 下载文件。
 * 
 * @param response
 * @param fullPath
 *            下载文件路径
 * @param fileName
 *            下载文件名
 * @throws IOException
 *             void
 */
public static void downLoadFile(HttpServletResponse response, String fullPath, String fileName) throws IOException {
   OutputStream outp = response.getOutputStream();
   File file = new File(fullPath);
   if (file.exists()) {
      response.setContentType("application/x-download");
      if (System.getProperty("file.encoding").equals("GBK")) {
         response.setHeader("Content-Disposition", "attachment;filename=\"" + new String(fileName.getBytes(), "ISO-8859-1") + "\"");
      } else {
         response.setHeader("Content-Disposition", "attachment;filename=\"" + URLEncoder.encode(fileName, "utf-8") + "\"");
      }
      try (FileInputStream in = new FileInputStream(fullPath);){
         IOUtils.copy(in, outp);
      } catch (Exception e) {
         e.printStackTrace();
      } finally {
         if (outp != null) {
            outp.close();
            outp = null;
            response.flushBuffer();
         }
      }
   } else {
      outp.write("文件不存在!".getBytes("utf-8"));
   }
}
```

## BaseUtil

###  根据月日获取星座

```java
/**
     * 根据月日获取星座
     * 
     * @param monthAndDay 月日字符串(MMdd格式)
     * @return 返回的星座
     * @since 2.0.2
     */
    public static String constellation(String monthAndDay) {
        if (monthAndDay.compareTo("0120") < 0) {
            return "摩羯座";
        } else if (monthAndDay.compareTo("0219") < 0) {
            return "水瓶座";
        } else if (monthAndDay.compareTo("0321") < 0) {
            return "双鱼座";
        } else if (monthAndDay.compareTo("0421") < 0) {
            return "白羊座";
        } else if (monthAndDay.compareTo("0521") < 0) {
            return "金牛座";
        } else if (monthAndDay.compareTo("0622") < 0) {
            return "双子座";
        } else if (monthAndDay.compareTo("0723") < 0) {
            return "巨蟹座";
        } else if (monthAndDay.compareTo("0823") < 0) {
            return "狮子座";
        } else if (monthAndDay.compareTo("0923") < 0) {
            return "处女座";
        } else if (monthAndDay.compareTo("1023") < 0) {
            return "天秤座";
        } else if (monthAndDay.compareTo("1122") < 0) {
            return "天蝎座";
        } else if (monthAndDay.compareTo("1222") < 0) {
            return "射手座";
        } else {
            return "摩羯座";
        }
    }
```

### 命名驼峰转为下划线形式

```java
    /**
     * 驼峰转为下划线形式
     *
     * @param str 原始字符串
     * @return 转换后的字符串
     * @since 1.0.0
     */
    public static String underLine(String str) {
        StringBuilder sb = new StringBuilder();
        char[] chs = str.toCharArray();
        for (int i = 0; i < chs.length; i++) {
            char ch = chs[i];
            if (Character.isUpperCase(ch)) {
                sb.append("_");
            }
            sb.append(ch);
        }
        return sb.toString().toLowerCase();
    }
```

### 温度转化

```java
 /**
     * 摄氏转华氏
     *
     * @param centigrade 摄氏温度
     * @return 华氏温度
     * @version 2.0.4
     */
    public static double temperature4c2f(double centigrade) {
        return centigrade * 1.8 + 32d;
    }

    /**
     * 华氏转摄氏
     *
     * @param fahrenheit 华氏温度
     * @return 摄氏温度
     * @version 2.0.4
     */
    public static double temperature4f2c(double fahrenheit) {
        return (fahrenheit - 32d) / 1.8;
    }
```

