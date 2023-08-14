<template>
  <div class="p-8 md:p-12 lg:px-16 lg:pt-24 lg:pb-12 bg-white text-background">
        <div class="mx-auto text-center">
            <h2 class="text-2xl font-bold text-center  md:text-3xl">
                Melyik hibával melyik tipust lehet felújítani?
            </h2>
            <p class="tr:max-w-[85%] mt-4">
                Az Apple az iPhone X szériától kezdte használni készülékeiben az OLED technológiával gyártott képernyőket, mely nehezebb, de több javítási lehetőséget biztosítanak, mint a korábban használt LCD társaik. Fontos különbség, hogy az OLED nem igényel háttérvilágítást, ezáltal a fekete szín valóban fekete marad, illetve könnyebb, rugalmasabb és kevesebb energiát fogyaszt (pl. az előbb említett fekete színt nem kell megvilágítani). Ugyanakkor az LCD gyártása kevesebb pénzt emészt fel, így az ő előnye az alacsonyabb ár. 
            </p>
        </div>
  </div>
  <div class="px-8 pb-12 bg-white text-background">
    <div class="max-w-4xl flex flex-col mx-auto">
        <simple-accordion :content="accordionContent1" :withSlot="true">
            <p class="text-md">Első szériáktól az iPhone 8 Plusig és az iPhone Xr, iPhone 11,  iPhone SE 2020</p>
            <div class="mr-auto p-2">
                <div>
                    <p class="underline text-xl font-semibold">Felújítható:</p>
                    <ul class="list-disc ml-4">
                        <li>aminek csak az üvege van betörve, a kijelző ép, hibátlanul ad képet</li>
                        <li>a világos hátteren fehér pont vagy beázás nyoma látható</li>
                        <li>ha a gomb az átvezető kábel miatt nem működik</li>
                    </ul>
                </div>
                <div>
                    <p class="underline text-xl font-semibold">Nem felújítható:</p>
                    <ul class="list-disc ml-4">
                        <li>ha a kijelző becsíkozódott, megtört vagy már egyáltalán nem ad képet</li>
                        <li>ami nem érzékeli az érintést</li>
                    </ul>
                </div>
            </div>
        </simple-accordion>
        <simple-accordion :content="accordionContent2" :withSlot="true">
            <p class="text-md">iPhone X-től az újabb szériák, kivéve az LCD-nél felsorolt pár típus</p>
        <div class="mr-auto p-2">
            <div>
                <p class="underline text-xl font-semibold">Felújítható:</p>
                <ul class="list-disc ml-4">
                    <li>aminek csak az üvege van betörve, a kijelző ép, hibátlanul ad képet</li>
                    <li>ami nem érzékeli az érintést</li>
                </ul>
            </div>
            <div>
                <p class="underline text-xl font-semibold">Nem felújítható:</p>
                <ul class="list-disc ml-4">
                    <li>ha a kijelző becsíkozódott (zöld vagy lila csík)</li>
                    <li>ha megfolyt (fekete folt, folyás)</li>
                    <li>ha „beégés” látható (főleg) világos hátteren</li>
                    <li>már egyáltalán nem ad képet</li>
                </ul>
            </div>
        </div>
    </simple-accordion>
    </div>
  </div>
</template>

<script>
import SimpleAccordion from '../Accordions/SimpleAccordion.vue'
export default {
  components: { SimpleAccordion },
  data() {
    return {
        accordionContent1: [
            {
                head: 'LCD',
                active: false,
            }
        ],
        accordionContent2: [
            {
                head: 'OLED',
                active: false,
            }
        ]
    }
  }
}
</script>

<style>

</style>