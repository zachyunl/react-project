# Projekt React z akademie Engeto

## Téma webu
Téma webu je na tobě. Můžeš si vybrat, jakékoli téma chceš. Důležité je, aby tě tvorba stránek bavila. Může se jednat o oblíbený film, knihu, produkt, službu nebo cokoli jiného.

## První strana webu
Zde máš vzorovou první stranu webu a jak by měla vypadat. Z obrázku si převezmi pouze strukturu. Obsah je komplet na tobě. Zároveň požadavky na stránku jsou minimální. Pokud chceš přidat více částí, více komponent, tak určitě můžeš. Ber to skutečně jen jako vzor.

Pojď si stránku rozebrat. Nahoře vidíš první část stránky. Zde není nic speciálního až na to, že s každým opětovným načtením stránky se mění žlutě zvýrazněný text. Ve vzorové stránce je to nastavené tak, že při každém načtení stránky se náhodně volí text z pole 3 textů. Texty si stanov jakkoli budeš chtít.

Další část jsou jen statické komponenty. Jejich obsah je na tobě. Jen poprosíme, ať komponenty obsahují libovolné obrázky (aby to nebyl jen text).

Další částí jsou záložky. Při každém kliknutí na záložku se změní obsah v tmavé částí pod ní. Takto vypadá obsah stránky, pokud je kliknuto na záložku First.

Takto, pokud je kliknuto na záložku Third.

A tak dále.

## Druhá strana webu
Na druhé stránce zkombinuješ 2 věci - formulář a API. Můžeš si vybrat jakékoli API chceš (ale ne ty, které se používaly v kurzu). Podmínkou je, že návštěvník stránky musí zadat údaje pomocí formuláře. Ty následně tyto údaje využiješ při žádosti o informace z API.

Seznam veřejných API najdeš zde: seznam API. Můžeš si další API vygooglit.

Pokud nenajdeš žádnou inspiraci na internetu, tak můžeš např. využít toto API na generování QR kódů. Zde je endpoint daného API: https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://engeto.cz/

Když se na adresu výše podíváš, tak zjistíš, že můžeš zadat velikost QR kódu a jako data na konci URL zadáš adresu, kam má QR kód směřovat. Adresa výše po naskenování mobilním telefonem směřuje na stránku engeto.cz. Tvým úkolem by bylo, aby si uživatel mohl zadat libovolnou adresu pomocí formuláře a vytvořil se mu odpovídající QR kód.

Takto může vypadat druhá stránka webu, pokud se rozhodneš pro API na generování QR kódu.

Po zadání URL adresy a kliknutí na tlačítko Generovat QR kód se v pravé části vygeneruje QR kód, který si může návštěvník naskenovat nebo vyfotit a uložit do telefonu.

