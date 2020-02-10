<template>
  <div class="container-fluid mt-3">
      <table class="table table-bordered">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Место</th>
          <th scope="col">ФИО</th>
          <th scope="col">Статус</th>
          <th scope="col">Опыт</th>
          <th scope="col">Монеты</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="player in players" :key="player.place">
          <td>{{ player.place }}</td>
          <td>{{ player.fio }}</td>
          <td>{{ player.status }}</td>
          <td>{{ player.exp }}</td>
          <td>{{ player.money }}</td>
        </tr>
        </tbody>
      </table>
      <div class="text-center">
        <div v-if="players.length === 0">
          <h2> В данный момент игроки не найдены </h2>
        </div>
      </div>
  </div>
</template>
<script>
  import { server } from "../helper";
  import axios from "axios";
  export default {
    props: ['api'],
    data() {
      return {
        players: []
      };
    },
    created(){
      axios
              .get(`${server.baseURL}/api/players/${this.api}`)
              .then(data => (this.players = data.data));
    },
    watch: {
      api : function(){
        axios
                .get(`${server.baseURL}/api/players/${this.api}`)
                .then(data => (this.players = data.data));
      }
    }
  };
</script>