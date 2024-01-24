# Projekt React z akademie Engeto

## Téma webu
Téma webu je na tobě. Můžeš si vybrat, jakékoli téma chceš. Důležité je, aby tě tvorba stránek bavila. Může se jednat o oblíbený film, knihu, produkt, službu nebo cokoli jiného.

## První strana webu
Zde máš vzorovou první stranu webu a jak by měla vypadat. Z obrázku si převezmi pouze strukturu. Obsah je komplet na tobě. Zároveň požadavky na stránku jsou minimální. Pokud chceš přidat více částí, více komponent, tak určitě můžeš. Ber to skutečně jen jako vzor.

![image](https://github.com/zachyunl/react-project/assets/47257941/e47e3662-457c-4374-a933-9881048215f6)


Pojď si stránku rozebrat. Nahoře vidíš první část stránky. Zde není nic speciálního až na to, že s každým opětovným načtením stránky se mění žlutě zvýrazněný text. Ve vzorové stránce je to nastavené tak, že při každém načtení stránky se náhodně volí text z pole 3 textů. Texty si stanov jakkoli budeš chtít.

![image](https://github.com/zachyunl/react-project/assets/47257941/b222d758-5075-487e-b19a-825f1de122e0)


Další část jsou jen statické komponenty. Jejich obsah je na tobě. Jen poprosíme, ať komponenty obsahují libovolné obrázky (aby to nebyl jen text).

![image](https://github.com/zachyunl/react-project/assets/47257941/eb777be5-d782-4139-95da-91c96fc190ad)


Další částí jsou záložky. Při každém kliknutí na záložku se změní obsah v tmavé částí pod ní. Takto vypadá obsah stránky, pokud je kliknuto na záložku First.

![image](https://github.com/zachyunl/react-project/assets/47257941/114bcfdb-d9e5-4fd2-a3fd-42bc115192e5)


Takto, pokud je kliknuto na záložku Third.

![image](https://github.com/zachyunl/react-project/assets/47257941/58131633-4fcb-4935-8607-4b2ca56b36a1)


A tak dále.

## Druhá strana webu
Na druhé stránce zkombinuješ 2 věci - formulář a API. Můžeš si vybrat jakékoli API chceš (ale ne ty, které se používaly v kurzu). Podmínkou je, že návštěvník stránky musí zadat údaje pomocí formuláře. Ty následně tyto údaje využiješ při žádosti o informace z API.

Seznam veřejných API najdeš zde: seznam API. Můžeš si další API vygooglit.

Pokud nenajdeš žádnou inspiraci na internetu, tak můžeš např. využít toto API na generování QR kódů. Zde je endpoint daného API: https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://engeto.cz/

Když se na adresu výše podíváš, tak zjistíš, že můžeš zadat velikost QR kódu a jako data na konci URL zadáš adresu, kam má QR kód směřovat. Adresa výše po naskenování mobilním telefonem směřuje na stránku engeto.cz. Tvým úkolem by bylo, aby si uživatel mohl zadat libovolnou adresu pomocí formuláře a vytvořil se mu odpovídající QR kód.

Takto může vypadat druhá stránka webu, pokud se rozhodneš pro API na generování QR kódu.

![image](https://github.com/zachyunl/react-project/assets/47257941/2f3423c9-73f8-4275-a9cf-9f1d7ab5a84e)


Po zadání URL adresy a kliknutí na tlačítko Generovat QR kód se v pravé části vygeneruje QR kód, který si může návštěvník naskenovat nebo vyfotit a uložit do telefonu.

![image](https://github.com/zachyunl/react-project/assets/47257941/324c676f-e5ec-404a-836f-88c11d816815)
