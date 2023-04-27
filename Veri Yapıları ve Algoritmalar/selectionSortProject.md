# Project 1

### [22,27,16,2,18,6] -> Insertion Sort

    1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

    2. Big-O gösterimini yazınız.

    3. Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

* Average case: Aradığımız sayının ortada olması
* Worst case: Aradığımız sayının sonda olması
* Best case: Aradığımız sayının dizinin en başında olması.


### [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

---

## Problem 1: 
### Insertion Sort Çözümü:

1. İlk sıradaki sayı yerine en küçük sayı gelmesi gerektiğinden, bütün sayılar arasından en küçüğü bulunur.
2. Bulunan en küçük sayı olan 2, ilk sıradaki 22 sayısı ile yer değiştirir. Yeni sıralama **[2, 27, 16, 22, 18, 6]** olur.
3. İlk sıraya bakılmaksızın diğer sayılar taranır ve en küçük sayı olan 6 2. sıradaki 27 sayısı ile yer değiştirir. Yeni sıralama **[2, 6, 16, 22, 18, 27]** olur.
4. İlk iki sıra hariç diğer sıralar tekrar taranarak 3. sıraya en küçük sayı olan 16 getirilmesi gerekir. Zaten 16 sayısı 3. sırada olduğu için değişiklik yapılmaz.
5. İlk üç sıra düzenlendiği için şimdi 4. sıradaki 22 sayısı, kalan listenin en küçük sayısı olan 18 ile yer değiştirerek yeni sıralama **[2, 6, 16, 18, 22, 27]** olur.
6. Beşinci sıra ile altıncı sıra sona kaldığı için o ikisi arasındaki en küçük sayı seçilerek 5. sıraya getirilir. Ancak zaten 22 daha küçük olduğundan herhangi bir sıralama değişimi olmaz. Listemizin son hali **[2, 6, 16, 18, 22, 27]** şeklindedir.

* Big-o-Notation = İlk başlarken *'n'* elemanlı listeyi **_(n)_** kere taramıştık. Sonradan yapılan her taramada 1 eleman eksileceği için **_(n-1) -> (n-2) -> (n-...)_** şeklinde devam edecektir.  
* Buradan hareketle *$\frac{n(n+1)}{2}$* kadarlık bir **Time Complexity** değerine sahip olur. **Big-o-Notation** olarak gösterirsek ise **O($n^2$)** şeklinde olacaktır.
* *Time Complexity:* Aradığımız sayı en başta ya da en sonda olmadığı için **_Average Case_** kapsamına girmektedir.

***

## Problem 2:
### [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımı Çözümü:

1. Dizinin en küçük elemanı bulunarak ilk sıradaki 7 sayısı ile yer değiştirir. Listedeki en küçük eleman 2 sayısı olduğu için yeni liste **[2,3,5,8,7,9,4,15,6]** şeklinde olacaktır.
2. İkinci sıra için tekrar bir tarama yapılarak en küçük sayı bulunur. 3 sayısı zaten kalan sayılar arasındaki en küçük sayı olduğu için listemizde herhangi bir değişiklik olmaz.
3. Daha sonra üçüncü sıraya koyulacak en küçük sayı taranır. 4 sayısı kalan sayılar arasındaki en küçük sayı olduğu için üçüncü sıradaki 5 sayısı ile yer değiştirerek yeni listemiz **[2,3,4,8,7,9,5,15,6]** şeklinde düzenlenir.
4. Ardından dördüncü sıradaki 8 sayısı, listenin kalanındaki en küçük sayı olan 5 sayısı ile yer değiştirerek listemiz **[2,3,4,5,7,9,8,15,6]** halini alır.