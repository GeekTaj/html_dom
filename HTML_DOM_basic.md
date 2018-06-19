#DOM的基本知识
##一、何为DOM
前端开发三板斧HTML-CSS-JAVASCRIPT众所周知，使用前二者我们可以做出很漂亮的静态web，从静态web进一步过渡到动态就需要用到DOM了。DOM的全称是Document Object Model（文档对象模型），根据W3C的标准，每一个HTML文档都被视为一个大的文档节点，文档中的所有元素、文本、以及相应的属性都是这个文档节点的子节点，这个以文档为根节点的节点树大概是下面的样子：

![](https://i.imgur.com/TEWrcJ2.gif)

这样一来，我们就可以使用JAVASCRIPT的方法对其中的任意一个节点进行操作了，包括标签、ID、类、背景颜色、字体等等，这些元素都可以通过JAVACRIPT的条件、循环、跳转语句变得更加灵活生动，这种通过对象的方式实现对元素的选取操作，就是DOM的思想了。
##二、通过浏览器开发者工具初步了解一下DOM
在CHROME中，我们可以使用开发者工具中的控制台体会一下DOM。打开console，输入document，会得到整个html标签的内容，可以选择具体的标签，如document.head,documnet.body；也可以选择一些其他的标签，比如document.scripts，这里会得到包含所有script标签的数组，也可以document.scripts[0]选择第一个script标签。

![](https://i.imgur.com/8Ro5VpK.jpg)

##二、DOM常用的选择器方法
- DOM中常用到的选择器方法有五个
- getElementsById(),返回一个或若干个ID名称匹配的；
- getElementsByTagName()，返回一个或若干个标签名称匹配的；
- getElementsByClassName()，返回一个或若干个类名称匹配的；
- querySelector()，返回第一个符合CSS形式选择器的；
- querySelectorAll(),使用方式如上个函数，返回所有符合CSS形式选择器的；
- 练习，在下面代码中，用至少三方式选中第一个P标签。
><p class="a1" id="id1">some words to test in class a1.</p>
><p class="a2">some words to test in class a2.</p>
><p class="a3">some words to test in class a3.</p>

- 具体实现：
>var p1 = "";
>p1=document.getElementsByID("id1");
>p1=document.getElementsByTagName("p")[0];
>p1=document.getElementsByClassName("a2");
>p1=document.querySelector("p#id1");

##三、对样式进行操作
- 在DOM选择器方法选中元素以后，就可以对元素进行操作了，这一小部分是对样式（style)的操作；
- 所有的样式都在style节点下面，里面包括很多子节点，background-color,color,front等等，具体操作时使用直接赋值的方法；
>document.getElementsByID("id1").style.color = "red";

- 同样可以预定义一些类，然后使用增加或者删除类的方法，对元素进行相应的操作，使用CSS定义一个class1的类，并赋予一个color样式，然后使用选择器方法选择第一个P标签，添加定义好的类，就实现了对第一个P标签样式的操作；
>.class1{color:red;}
>document.querySelector("p").addclass("class1");

##四、对文本内容进行操作
- 主要用到的方法：textContent，在获取一个元素以后，可以用textContent方法将这个标签的文本内容读取出来；
>document.getElementsByID("id1").textContent;

- 上述方法读取到的是这个标签中的所有文本，并不会将标签内包含的子标签读取出来，如果要读取原生的HTML标签一并读取出来，就要用到innerHTML这个方法了；
>document.getElementsByID("id1").innerHTML;

##五、对属性进行操作
- CSS中属性都是以键值对的形式出现，在获取一个元素以后，我们可以使用getAttribute的方法，获取某个属性的值，比如a.getAttribute("class")得到a的类的名称。 
- 练习：1、修改某个img元素的链接到另一张图片上；2、修改某个Link元素的链接，并修改这个link的相应名称。

##六、一个关于百度首页的控制台操作练习
- 利用控制台修改GOOGLE首页上的元素包括：
- 1、修改一下GOOGLE的图标；
- 2、修改一个所有的link，将背景修改为粉色，文本修改为黄色；
- 3、修改所有的link链接，将它们指向另外一个相同的地址；
- 其中2和3用for循环来实现。