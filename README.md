# javascript_practice## 解說

Math.random()方法是在JavaScript中產生亂數的一個方法。不論你要作野球拳遊戲，還是線上博杯拿大獎的應用程式，都可以用它來產生亂數。

Math.random會隨時產生一個0到1的浮點數，它的基本用法如下:

```js
Math.floor(Math.random() * 6) + 1
```

上面的語句代表要產生1到6的整數亂數
1代表開始數字
6代表可能情況有6種

所以如果是以最大值max，最小值min來寫這個語句，這也是產生整數的亂數，會像下面這樣:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

---

## 作業一

一個線上抽獎的活動，客戶說有下面幾個獎品:

- 50吋液晶電視 1台
- PS4遊戲機 3台
- 手機行動充電器 10台
- 7-11的100元購物券 100張

預計參與抽獎的人數有1萬人，要如何來寫這個程式的抽獎過程的應用程式？

---

## 作業二

請製作一個手機遊戲的抽卡程式，卡片抽中的機率為:

- 3星卡 2%
- 2星卡 18%
- 1星卡 80% 
