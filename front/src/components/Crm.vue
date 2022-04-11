<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nom</th>
        <th scope="col">Prenom</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody id="clients">
      <tr v-for="personne in personnes">
        <td>{{ personne.nom }}</td>
        <td>{{ personne.prenom }}</td>
        <td>{{ personne.prenom }}</td>
        <td>@twitter</td>
      </tr>


    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  el: "#clients",
  data() {
    return {
      personnes: [],
    };
  },

  personnes: [
    { nom: "Durand", prenom: "Jacques" },
    { nom: "Dupont", prenom: "Albert" },
    { nom: "Martin", prenom: "Denis" },
    { nom: "Ethane", prenom: "E rie" },
    { nom: "Christo de fer", prenom: "con" },
    { nom: "Moi", prenom: "Moi" },
    { nom: "Cahe", prenom: "Aurelien" },
    { nom: "Cahe", prenom: "La Célia" },
  ],
};



</script>
