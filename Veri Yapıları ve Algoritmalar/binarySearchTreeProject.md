# Project 3

    [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

    Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

---

### Problem Çözümü

- Root olarak 7 değerini alırsak:

#### Şematik Gösterim

                    |7|
                   /   \
                |5|     |8|
               /   \       \
            |1|     |6|    |9|
           /   \
          |0|  |3|
              /   \
            |2|   |4|

---

#### Teorik Anlatım

1. Root değerinden sonra sırayla diğer değerlere bakılmaya başlanır.

2. 5 değeri 7den küçük olduğu için 7 sayısının **_sol alt kısmına_** yazılır.

3. 1 değeri 7 ve 5ten küçük olduğu için 5 sayısının **_sol alt kısmına_** yazılır.

4. 8 değeri 7den büyük olduğu için 7 sayısının **_sağ alt kısmına_** yazılır.

5. 3 değeri 7den ve 5ten küçük olduğu için 5 sayısının sol altına yazılması gerekir. Ancak o kısımda 1 sayısı olduğu için 3 sayısı 1 sayısından büyük olması sebebiyle 1in **_sağ alt kısmına_** yazılır.

6. 6 değeri 7den küçük ancak 5ten büyük bir değerdir. O nedenle 5 sayısının **_sağ alt kısmına_** yazılır.

7. 0 değeri 7den, 5ten ve 1den küçük olduğu için 1 sayısının **_sol alt kısmına_** yazılır.

8. 9 değeri 7den ve 8den büyük olduğu için 8 sayısının **_sağ alt kısmına_** yazılır.

9. 4 değeri 7den ve 5ten küçük, 1den ve 3ten büyük olduğu için 3 sayısının **_sağ alt kısmına_** yazılmalıdır.

10. Son olarak da 2 değeri 7den, 5ten ve 3ten küçük olduğu için 3 sayısının **_sol alt kısmına_** yazılarak ağacımız tamamlanmış olur.