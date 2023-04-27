# Project 2

### [16,21,11,8,12,22] -> Merge Sort

    Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
    
    Big-O gösterimini yazınız.

---

### Problem Çözümü

#### Şematik Gösterim

                     [16,21,11,8,12,22]
                    
                 |[16,21,11]| - |[8,12,22]|

              |[16,21]  [11]| - |[8,12]  [22]|

           |[16]  [21]  [11]| - |[8]  [12]  [22]|

              |[16,21]  [11]| - |[8,12]  [22]|

                 |[11,16,21]| - |[8,12,22]|

                      [8,11,12,16,21,22]

---

#### Teorik Anlatım
1. Listemiz 6 elemanlı olduğu için [16,21,11] ve [8,12,22] olarak 2 ayrı kümeye ayrılır.
2. İlk kümemiz [16,21],[11] olarak, ikinci kümemiz ise [8,12], [22] şeklinde parçalara ayrılır.
3. Aynı şekilde 1er elemandan oluşana kadar ilk küme [16], [21], [11], ikinci küme [8], [12], [22] şeklinde parçalanır.
4. Daha sonra ilk adımda büyükten küçüğe doğru sıralı gelecek şekilde ilk küme [16,21], [11], ikinci küme ise [8,12], [22] şeklinde sıralanır.
5. Sonrasında ilk kümedeki 2 elemanlı alt küme ile tek elemanlı alt kümeler karşılaştırılır. [16,21] ve [11] alt kümelerin ilk elemanlarına bakılır. *16 > 11* olduğu için yeni oluşacak 3 elemanlı alt kümede 11 sayısı [11,16,21] şeklinde ilk başa yazılır.
6. Aynı olay ikinci kümemizde de yapılır ve [8,12], [22] alt kümelerine bakılarak *8 < 22* eşitliği kontrol edilir. 8 sayısı 22 sayısından küçük olduğu için, 8 sayısı ilk sırada kalmaya devam eder.
7. 12 sayısı 22 sayısı ile karşılaştırılır. Sonuçta *12 < 22* olduğundan sıralama değişmeden alt kümeler birleşerek [8,12,22] kümemizi oluşturur.
8. Asıl olay bu aşamada gerçekleşir. *11 > 8* olduğundan bütün sayıların birleşeceği sıralı ana kümemizde 8 sayısı en başa yazılmaya hak kazanır.
9. Ardından *11 < 12* olduğundan 11 sayısı 2. sırada olacaktır.
10. *16 > 12* olduğundan 12 sayısı 3. sıraya yerleşir.
11. Ardından *16 < 22* olduğundan 16 sayısı 4. sırada kalır.
12. *21 < 22* olacağından da 5. sırada 21 olacak ve sıralanmış listemiz **[8,11,12,16,21,22]** şeklinde olacaktır.

---

- Big-O-Notation = Her taramada yapılan işlemlerimiz **n** kadar yapılır. Ancak sürekli iki parçaya ayrıldığı için tek parçaya ayrıldıktan sonra **_O(logn)_** olacaktır. İkisini birleştirdiğimizde ise asıl Big-o-Notation değerimiz "**_O(nlogn)_**" olur. 