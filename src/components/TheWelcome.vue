<script setup>
import WelcomeItem from "./WelcomeItem.vue";
</script>

<template>
  <WelcomeItem>
    <template #heading
      >Je suis Alexandre Pinot <span class="yellow">✺</span>
      Product designer <span class="orange">❊</span>
    </template>
    <template #paragraph>
      Actuellement étudiant @Hetic à Paris. J’aime travailler sur des produits
      <span class="blue">innovants</span> et faire en sorte qu’ils soient
      compris par <span class="blue">l’humain</span>.
    </template>
  </WelcomeItem>
</template>
